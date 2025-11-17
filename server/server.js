import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import scheduleRouter from './routes/scheduleRoutes.js';

dotenv.config();

const app = express();
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

async function connectDB() {
	try {
		await mongoose.connect(uri);
		console.log('Connected to MongoDB via Mongoose');
	} catch (error) {
		console.error('MongoDB Connection Error:', error);
		process.exit(1);
	}
}

// GET request to get all games
app.get('/api/all', scheduleRouter);

// GET request to get specific sport schedule
app.get('/api/:sport', async (req, res) => {
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

const PORT = process.env.PORT || 3030;

connectDB().then(() => {
	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`);
	});
});
