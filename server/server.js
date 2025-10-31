import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
const client = new MongoClient(uri);
let db;

app.use(
	cors({
		origin: [
			'http://localhost:5173',
			'https://concretesports.app',
			'https://www.concretesports.app',
		],
		credentials: true,
	})
);

const uri = process.env.MONGODB_URI;

if (!uri) {
	console.log('ERROR MONGODB URL IS NOT SET!');
	process.exit(1);
}

async function connectDB() {
	try {
		await client.connect();
		db = client.db('schedules');
		console.log('connected to database');
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
}

app.get('/data/:sport', async (req, res) => {
	try {
		const sport = req.params.sport;
		const collection = db.collection(sport);
		const results = await collection.find({}).toArray();
		res.json(results);
	} catch (error) {
		console.error('Error fetching data:', error);
		res.status(500).json({ error: error.message });
	}
});

process.on('SIGINT', async () => {
	console.log('Closing MongoDB connection...');
	await client.close();
	process.exit(0);
});

const PORT = process.env.PORT || 3030;

connectDB().then(() => {
	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`);
	});
});
