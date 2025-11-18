import fetchAndExtractSchedules from '../../src/utils/scraper.js';
import { ScheduleItemSchema, mongoose } from '../model/ScheduleItem.js';

const SCHEDULE_SOURCES = [
	{
		sport: 'boy-basketball',
		url: 'https://www.wpanetwork.com/widgets/widget-wiaa-event-list.php?sport_id=3&school_year=2025-26&classification=1B&school_id=43&date_range_kword=season&include_styles=1&output_mode=plain&utm_source=WA_wiaa',
	},
	{
		sport: 'girls-basketball',
		url: 'https://www.wpanetwork.com/widgets/widget-wiaa-event-list.php?sport_id=12&school_year=2025-26&classification=1B&school_id=43&date_range_kword=season&include_styles=1&output_mode=plain&utm_source=WA_wiaa',
	},
];
const getAllGames = async (req, res) => {
	const sports = [
		'volleyball',
		'football',
		'boys-basketball',
		'girls-basketball',
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

async function syncSchedules() {
	// Scrape data (get rawGames)
	// const rawGames = await fetchAndExtractSchedules(SCHEDULE_SOURCES);
	// Step 3: Implement the grouping and Mongoose upsert logic (Model.bulkWrite)
}

// async function getSportSchedule(req, res) {
// 	try {
// 		const sport = req.params.sport;
// 		const collection = sport.find();
// 		const results = await collection.find({}).sort({ date: 1 }).toArray();
// 		res.json(results);
// 	} catch (error) {
// 		console.error('Error fetching data:', error);
// 		res.status(500).json({ error: error.message });
// 	}
// }

export default {
	getAllGames,
	syncSchedules,
};
