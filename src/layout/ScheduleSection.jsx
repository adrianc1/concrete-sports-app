import './scheduleSection.css';
import { Link } from 'react-router';
import { FaFootballBall, FaVolleyballBall, FaBasketballBall, FaBaseballBall, FaRunning, FaCalendarAlt } from 'react-icons/fa';

export default function ScheduleSection() {
	const sports = [
		{ name: 'Football', sport: 'football', season: 'Fall', icon: <FaFootballBall /> },
		{ name: 'Volleyball', sport: 'volleyball', season: 'Fall', icon: <FaVolleyballBall /> },
		{
			name: 'Boys Basketball',
			sport: 'boys-basketball',
			season: 'Winter',
			icon: <FaBasketballBall />,
		},
		{
			name: 'Girls Basketball',
			sport: 'girls-basketball',
			season: 'Winter',
			icon: <FaBasketballBall />,
		},
		// { name: 'Wrestling', sport: 'wrestling', season: 'Winter', icon: <FaHandRock /> },
		{ name: 'Baseball', sport: 'baseball', season: 'Spring', icon: <FaBaseballBall /> },
		{ name: 'Softball', sport: 'softball', season: 'Spring', icon: <FaBaseballBall /> },
		{ name: 'Track & Field', sport: 'track', season: 'Spring', icon: <FaRunning /> },
		{
			name: 'View All Schedules',
			sport: 'schedules',
			season: 'All',
			icon: <FaCalendarAlt />,
		},
	];

	return (
		<div className="schedule-section">
			<div className="schedule-header">
				<h2>Team Schedules</h2>
				<p>Year-Round Athletic Excellence</p>
			</div>

			<div className="sports-grid">
				{sports.map((sport, index) => (
					<Link
						to={
							sport.sport !== 'schedules'
								? `${sport.sport}Schedule`
								: 'schedules'
						}
						key={index}
					>
						<div className="sport-card">
							<div className="sport-icon">{sport.icon}</div>
							<div className="sport-name">{sport.name}</div>
							<div className="sport-season">{sport.season} Season</div>
						</div>
					</Link>
				))}
			</div>

			<Link to="/sponsors">
				<div className="lions-footer">
					<h3>Go Lions!</h3>
					<p>Supporting our athletes all year long</p>
				</div>
			</Link>
		</div>
	);
}
