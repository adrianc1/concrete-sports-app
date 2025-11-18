import express from 'express';
import scheduleController from '../controllers/scheduleController.js';
const scheduleRouter = express.Router();

scheduleRouter.get('/all', scheduleController.getAllGames);
scheduleRouter.get('/:sport', scheduleController.getSportSchedule);

export default scheduleRouter;
