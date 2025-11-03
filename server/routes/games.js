import express from 'express';
import { getSportModel } from '../models/schedule.model.js';

export const gamesRouter = express.Router();
const sports = ['football', 'volleyball'];

gamesRouter.get('/all', async (req, res) => {
	let allGames = [];

	try {
		for (const sport of sports) {
			const SportModel = getSportModel(sport);
			console.log(`Sport: ${sport}, Collection: ${SportModel.collection.name}`);

			const results = await SportModel.find({}).sort({ date: 1 });
			allGames.push(...results);
		}
		res.json(allGames);
	} catch (error) {
		console.error('Error fetching data:', error);
		res.status(500).json({ error: error.message });
	}
});

gamesRouter.get('/:sport', async (req, res) => {
	try {
		const sport = req.params.sport;
		const SportModel = getSportModel(sport);
		const results = await SportModel.find({}).sort({ date: 1 });
		res.json(results);
	} catch (error) {
		console.error('Error fetching data:', error);
		res.status(500).json({ error: error.message });
	}
});

// router.post('/add', async (req, res) => {
// 	try {
// 		const schedule = await ScheduleSchemaModel.create(req.body);
// 		res.status(200).json(schedule);
// 	} catch (error) {
// 		res.status(500).json({ message: error.message });
// 	}
// });
