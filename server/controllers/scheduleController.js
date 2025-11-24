import mongoose from 'mongoose';
import fetchAndExtractSchedules from '../utils/scraper.js';
import transformGame from '../utils/transformGame.js';

const SCHEDULE_SOURCES = [
	{
		sport: 'boys-basketball',
		url: 'https://www.wpanetwork.com/widgets/widget-wiaa-event-list.php?sport_id=3&school_year=2025-26&classification=1B&school_id=43&date_range_kword=season&include_styles=1&output_mode=plain&utm_source=WA_wiaa',
	},
	{
		sport: 'girls-basketball',
		url: 'https://www.wpanetwork.com/widgets/widget-wiaa-event-list.php?sport_id=12&school_year=2025-26&classification=1B&school_id=43&date_range_kword=season&include_styles=1&output_mode=plain&utm_source=WA_wiaa',
	},
	{
		sport: 'volleyball',
		url: 'https://www.wpanetwork.com/widgets/widget-wiaa-event-list.php?sport_id=10&school_year=2025-26&classification=1B&school_id=43&date_range_kword=season&include_styles=1&output_mode=plain&utm_source=WA_wiaa',
	},
	{
		sport: 'football',
		url: 'https://www.wpanetwork.com/widgets/widget-wiaa-event-list.php?sport_id=1&school_year=2025-26&classification=1B&school_id=43&date_range_kword=season&include_styles=1&output_mode=plain&utm_source=WA_wiaa',
	},
];
const getAllGames = async (req, res) => {
	const sports = [
		'boys-basketball',
		'girls-basketball',
		'volleyball',
		'football',
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

async function syncSchedules(req, res) {
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
		res.json({ success: true, message: 'Schedules synced successfully' });
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
