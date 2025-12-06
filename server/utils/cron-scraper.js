import cron from 'node-cron';
import scheduleController from '../controllers/scheduleController.js';

cron.schedule('30 7 * * *', () => {
	console.log('cron test run at 11:30 PM PST');
	scheduleController.syncSchedules();
});
