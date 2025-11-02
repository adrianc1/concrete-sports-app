import express from 'express';

export function gamesRouter(db) {
	const router = express.Router();
	const sports = ['football', 'volleyball'];

	router.get('/all', async (req, res) => {
		let allGames = [];

		try {
			for (const sport of sports) {
				const collection = db.collection(sport);
				const results = await collection.find({}).toArray();
				allGames.push(...results);
			}
			res.json(allGames);
		} catch (error) {
			console.error('Error fetching data:', error);
			res.status(500).json({ error: error.message });
		}
	});

	router.get('/:sport', async (req, res) => {
		try {
			const sport = req.params.sport;
			const collection = db.collection(sport);
			const results = await collection.find({}).sort({ date: 1 }).toArray();
			res.json(results);
		} catch (error) {
			console.error('Error fetching data:', error);
			res.status(500).json({ error: error.message });
		}
	});

	router.post('/add/:sport', async (req, res) => {
		try {
			const sport = req.params.sport;
			const collection = db.collection(sport);
			const newDocument = req.body;

			const result = await collection.insertOne(newDocument);

			res.status(201).json({
				message: 'Game added successfully',
				insertedId: result.insertedId,
			});
		} catch (error) {
			console.error('Error adding game:', error);
			res.status(500).json({ error: 'Failed to add game' });
		}
	});
	return router;
}
