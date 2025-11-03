import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { gamesRouter } from './routes/games.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3030;
const uri = process.env.MONGODB_URI;

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

mongoose.connect(uri, { dbName: 'schedules' }).then(() => {
	console.log('connectd!');
	app.use('/api/games', gamesRouter);
	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`);
	});
});
