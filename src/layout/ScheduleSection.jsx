import './scheduleSection.css';
import { Link } from 'react-router';
import { Card } from '../components/ui/card';
import { ArrowRight } from 'lucide-react';

import footballImg from '../assets/sports/football.webp';
import volleyballImg from '../assets/sports/volleyball.webp';
import basketballImg from '../assets/sports/basketball.webp';
import wrestlingImg from '../assets/sports/wrestling.webp';
import baseballImg from '../assets/sports/baseball.webp';
import softballImg from '../assets/sports/softball.webp';
import trackImg from '../assets/sports/track.webp';

const seasons = [
	{
		label: 'Fall',
		sports: [
			{ name: 'Football', sport: 'football', img: footballImg },
			{ name: 'Volleyball', sport: 'volleyball', img: volleyballImg },
		],
	},
	{
		label: 'Winter',
		sports: [
			{ name: 'Boys Basketball', sport: 'boys-basketball', img: basketballImg },
			{
				name: 'Girls Basketball',
				sport: 'girls-basketball',
				img: basketballImg,
			},
			{ name: 'Wrestling', sport: 'wrestling', img: wrestlingImg },
		],
	},
	{
		label: 'Spring',
		sports: [
			{ name: 'Baseball', sport: 'baseball', img: baseballImg },
			{ name: 'Softball', sport: 'softball', img: softballImg },
			{ name: 'Track & Field', sport: 'track', img: trackImg },
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
							{/* <Link
								to="/schedules"
								className="inline-flex items-center gap-1 text-[12px] font-bold uppercase tracking-wide text-[#420a72] hover:text-[#f2bc40] transition-colors"
								style={{ textDecoration: 'none' }}
							>
								View All Schedules
								<ArrowRight size={13} strokeWidth={2.5} />
							</Link> */}
						</div>

						{/* Sport cards */}
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
							{season.sports.map((sport) => (
								<Link
									key={sport.sport}
									to={`/${sport.sport}Schedule`}
									style={{ textDecoration: 'none' }}
								>
									<Card className="py-0 h-32 md:h-44 overflow-hidden relative border-0 hover:scale-[1.02] hover:shadow-lg transition-all cursor-pointer">
										{/* Background image */}
										<img
											src={sport.img}
											alt={sport.name}
											className="absolute inset-0 w-full h-full object-cover"
											loading="lazy"
											decoding="async"
										/>
										{/* Dark overlay */}
										<div
											className="absolute inset-0"
											style={{
												background:
													'linear-gradient(160deg, rgba(26,0,51,0.82) 0%, rgba(66,10,114,0.65) 100%)',
											}}
										/>
										{/* Text */}
										<div className="relative z-10 flex flex-col justify-end h-full p-3 gap-0.5">
											<span className="font-black text-sm text-white leading-tight">
												{sport.name}
											</span>
											<span className="text-[10px] text-white/60 uppercase tracking-widest font-semibold">
												{season.label} Season
											</span>
										</div>
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
