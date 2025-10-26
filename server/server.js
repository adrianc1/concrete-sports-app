import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
	console.log(`server running on PORT:${PORT}`);
});
