import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import scheduleRouter from './routes/scheduleRoutes.js';

dotenv.config();

const app = express();
const uri = process.env.MONGODB_URI;

console.log('uri', uri);

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
app.use('/api', scheduleRouter);

const PORT = process.env.PORT || 3030;

connectDB().then(() => {
	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`);
	});
});
