import cron from 'node-cron';
import scheduleController from '../controllers/scheduleController.js';

cron.schedule('0 6 * * *', () => {
	scheduleController.syncSchedules();
});

console.log('Cron job started, waiting for next scheduled run...');
