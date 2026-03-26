import './scheduleSection.css';
import { Link } from 'react-router';
import {
	FaFootballBall,
	FaVolleyballBall,
	FaBasketballBall,
	FaBaseballBall,
	FaRunning,
	FaHandRock,
} from 'react-icons/fa';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight } from 'lucide-react';

const seasons = [
	{
		label: 'Fall',
		sports: [
			{ name: 'Football', sport: 'football', icon: <FaFootballBall />, color: '#854d0e' },
			{ name: 'Volleyball', sport: 'volleyball', icon: <FaVolleyballBall />, color: '#f97316' },
		],
	},
	{
		label: 'Winter',
		sports: [
			{ name: 'Boys Basketball', sport: 'boys-basketball', icon: <FaBasketballBall />, color: '#f59e0b' },
			{ name: 'Girls Basketball', sport: 'girls-basketball', icon: <FaBasketballBall />, color: '#f59e0b' },
			{ name: 'Wrestling', sport: 'wrestling', icon: <FaHandRock />, color: '#8b5cf6' },
		],
	},
	{
		label: 'Spring',
		sports: [
			{ name: 'Baseball', sport: 'baseball', icon: <FaBaseballBall />, color: '#3b82f6' },
			{ name: 'Softball', sport: 'softball', icon: <FaBaseballBall />, color: '#84cc16' },
			{ name: 'Track & Field', sport: 'track', icon: <FaRunning />, color: '#ef4444' },
		],
	},
];

export default function ScheduleSection() {
	return (
		<div className="schedule-section">
			<div className="schedule-header">
				<h2>Team Schedules</h2>
			</div>

			<div className="flex flex-col gap-10">
				{seasons.map((season) => (
					<div key={season.label}>
						{/* Season row header */}
						<div className="flex items-center justify-between mb-4">
							<div className="flex items-center gap-3">
								<h3 className="text-lg font-black uppercase tracking-wide text-[#420a72] m-0">
									{season.label}
								</h3>
								<span className="h-0.5 w-10 bg-[#f2bc40] rounded-full inline-block" />
							</div>
							<Link
								to="schedules"
								className="inline-flex items-center gap-1 text-[12px] font-bold uppercase tracking-wide text-[#420a72] hover:text-[#f2bc40] transition-colors"
								style={{ textDecoration: 'none' }}
							>
								View All Schedules
								<ArrowRight size={13} strokeWidth={2.5} />
							</Link>
						</div>

						{/* Sport cards */}
						<div className="flex flex-wrap gap-4">
							{season.sports.map((sport) => (
								<Link
									key={sport.sport}
									to={`${sport.sport}Schedule`}
									style={{ textDecoration: 'none' }}
									className="flex-1 min-w-40 max-w-55"
								>
									<Card className="py-0 h-full hover:shadow-md hover:border-[#6b2c91] border-transparent border-2 transition-all cursor-pointer">
										<CardContent className="flex flex-col gap-2 p-4">
											<span style={{ color: sport.color }} className="text-2xl">
												{sport.icon}
											</span>
											<span className="font-bold text-sm text-[#420a72] leading-tight">
												{sport.name}
											</span>
											<span className="text-[11px] text-muted-foreground uppercase tracking-wide font-semibold">
												{season.label} Season
											</span>
										</CardContent>
									</Card>
								</Link>
							))}
						</div>
					</div>
				))}
			</div>

		</div>
	);
}
