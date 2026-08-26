import mongoose from 'mongoose';
import fetchAndExtractSchedules from '../utils/scraper.js';
import transformGame from '../utils/transformGame.js';

// WIAA publishes each season's schedule separately, so the sports roll over to a
// new school year at different times rather than all at once. Bump a sport's year
// here once wpanetwork actually has its games; until then it keeps serving last
// season, which reads as history rather than a blank page.
//
// Checked 2026-08-25: fall is published for 2026-27 (football 9 games, volleyball
// 18). Winter has 1 game per basketball team and spring has none, so those stay
// on 2025-26 for now.
const SCHEDULE_YEARS = {
	football: '2026-27',
	volleyball: '2026-27',
	'boys-basketball': '2025-26',
	'girls-basketball': '2025-26',
	baseball: '2025-26',
	softball: '2025-26',
};

const SPORT_IDS = {
	football: 1,
	volleyball: 10,
	'boys-basketball': 3,
	'girls-basketball': 12,
	baseball: 6,
	softball: 15,
};

function scheduleUrl(sport) {
	const params = new URLSearchParams({
		sport_id: SPORT_IDS[sport],
		school_year: SCHEDULE_YEARS[sport],
		classification: '1B',
		school_id: '43',
		date_range_kword: 'season',
		include_styles: '1',
		output_mode: 'plain',
		utm_source: 'WA_wiaa',
	});
	return `https://www.wpanetwork.com/widgets/widget-wiaa-event-list.php?${params}`;
}

const SCHEDULE_SOURCES = Object.keys(SPORT_IDS).map((sport) => ({
	sport,
	schoolYear: SCHEDULE_YEARS[sport],
	url: scheduleUrl(sport),
}));

const getAllGames = async (req, res) => {
	const sports = [
		'boys-basketball',
		'girls-basketball',
		'volleyball',
		'football',
		'softball',
		'baseball',
	];
	const allGames = [];
	try {
		for (const s of sports) {
			const db = mongoose.connection.db;
			const sport = db.collection(s);
			const docs = await sport.find({}).toArray();

			allGames.push(...docs);
		}
		res.json(allGames);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: error.message });
	}
};

async function getSportSchedule(req, res) {
	try {
		const db = mongoose.connection.db;
		const sport = req.params.sport;
		const collection = db.collection(sport);
		const results = await collection.find({}).sort({ date: 1 }).toArray();
		res.json(results);
	} catch (error) {
		console.error('Error fetching data:', error);
		res.status(500).json({ error: error.message });
	}
}

async function syncSchedules() {
	console.log('sync starting...');
	try {
		console.log('fetching...');

		// Scrape data (get rawGames)
		const rawGames = await fetchAndExtractSchedules(SCHEDULE_SOURCES);

		// group games by sport
		const gamesBySport = {};
		rawGames.forEach((rawGame) => {
			if (!gamesBySport[rawGame.sport]) {
				gamesBySport[rawGame.sport] = [];
			}

			// transform games
			const transformedGame = transformGame(rawGame);
			gamesBySport[rawGame.sport].push(transformedGame);
		});

		// upsert games in to schedule database
		for (const [sport, games] of Object.entries(gamesBySport)) {
			const db = mongoose.connection.db;
			const collection = db.collection(sport);
			const bulkOps = games.map((game) => ({
				updateOne: {
					filter: {
						date: game.date,
						time: game.time,
						away_team: game.away_team,
						home_team: game.home_team,
					},
					update: { $set: game },
					upsert: true,
				},
			}));

			if (bulkOps.length > 0) {
				await collection.bulkWrite(bulkOps);
				console.log(`Synced ${games.length} games for ${sport}`);
			}
		}
		console.log('Schedule sync complete');
	} catch (error) {
		console.error('Error syncing schedules:', error);
		throw error;
	}
}

export default {
	getAllGames,
	syncSchedules,
	getSportSchedule,
};
