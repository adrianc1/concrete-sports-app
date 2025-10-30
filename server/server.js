import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const uri =
	'mongodb+srv://concrete:concrete@sports-app-cluster.be8tahc.mongodb.net/?retryWrites=true&w=majority';

app.get('/data', async (req, res) => {
	const client = new MongoClient(uri);

	try {
		await client.connect();
		const database = client.db('schedules');
		const collection = database.collection('volleyball');
		const results = await collection.find({}).toArray();
		res.json(results);
	} catch (error) {
		res.status(500).json({ error: error.message });
		console.log('hey error here ');
	} finally {
		await client.close();
	}
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
