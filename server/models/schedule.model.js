import mongoose from 'mongoose';

const ScheduleSchema = mongoose.Schema(
	{
		watchLink: String,
		dayOfWeek: String,
		date: String,
		time: String,
		opponent: String,
		location: String,
		venue: String,
		sport: String,
		level: String,
		result: String,
	},
	{ timestamps: true }
);

export const getSportModel = (sport) => {
	const collectionName = sport.toLowerCase();
	return (
		mongoose.models[sport] ||
		mongoose.model(sport, ScheduleSchema, collectionName)
	);
};
