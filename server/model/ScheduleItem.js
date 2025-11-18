import mongoose from 'mongoose';

const ScheduleItemSchema = new mongoose.Schema(
	{
		watchLink: {
			type: String,
			required: false,
			trim: true,
		},

		dayOfWeek: {
			type: String,
			required: true,
			uppercase: true,
			enum: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
		},

		date: {
			type: String,
			required: true,
		},

		time: {
			type: String,
			required: true,
			trim: true,
		},

		opponent: {
			type: String,
			required: true,
			trim: true,
		},

		location: {
			type: String,
			required: true,
			enum: ['Home', 'Away', 'Neutral'],
		},

		venue: {
			type: String,
			required: true,
			trim: true,
		},

		sport: {
			type: String,
			required: true,
			uppercase: true,
			enum: ['FOOTBALL', 'VOLLEYBALL', 'GIRLS-BASKETBALL', 'BOYS-BASKETBALL'],
		},

		level: {
			type: String,
			required: true,
			trim: true,
			enum: ['Girls Varsity', 'Boys Varsity'],
		},

		result: {
			type: String,
			required: false,
			trim: true,
			default: null,
		},
	},
	{
		timestamps: true,
	}
);

export { ScheduleItemSchema, mongoose };
