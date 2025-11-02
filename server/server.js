import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';
import { gamesRouter } from './routes/games.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3030;
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
let db;

app.use(
	cors({
		origin: '*',
	})
);
app.use(express.json());

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

process.on('SIGINT', async () => {
	console.log('Closing MongoDB connection...');
	await client.close();
	process.exit(0);
});

connectDB().then(() => {
	app.use('/api/games', gamesRouter(db));
	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`);
	});
});
