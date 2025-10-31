import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
app.use(express.json());

// Enable CORS for your domains
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
const client = new MongoClient(uri);
let db;

// Lazy DB connection
async function getDB() {
	if (!db) {
		await client.connect();
		db = client.db('schedules');
		console.log('connected to database');
	}
	return db;
}

// Health route
app.get('/', (req, res) => res.send('Backend is running ✅'));

// Main data route
app.get('/data/:sport', async (req, res) => {
	try {
		const sport = req.params.sport;
		const database = await getDB();
		const collection = database.collection(sport);
		const results = await collection.find({}).toArray();
		res.json(results);
	} catch (error) {
		console.error('Error fetching data:', error);
		res.status(500).json({ error: error.message });
	}
});

// Graceful shutdown
process.on('SIGINT', async () => {
	console.log('Closing MongoDB connection...');
	await client.close();
	process.exit(0);
});

const PORT = process.env.PORT || 3030;

// Start server immediately
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
