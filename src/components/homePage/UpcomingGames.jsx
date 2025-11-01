import { Link } from 'react-router';
import './homePageStyles/upcomingGames.css';
export default function UpcomingGames() {
	const upcomingGames = [
		{
			sport: 'football',
			date: 'Nov 5',
			time: '7:00 PM',
			opponent: 'Lincoln High',
			location: 'Home',
		},
		{
			sport: 'volleyball',
			date: 'Nov 6',
			time: '5:30 PM',
			opponent: 'Roosevelt',
			location: 'Away',
		},
		{
			sport: 'Wrestling',
			date: 'Nov 5',
			time: '7:00 PM',
			opponent: 'Edison High',
			location: 'Home',
		},
		{
			sport: 'Volleyball',
			date: 'Nov 9',
			time: '4:30 PM',
			opponent: 'Change',
			location: 'Away',
		},
	];
	return (
		<div className="upcoming-schedules">
			<h3 className="recent-scores-title team-schedule-title">
				Upcoming Games
			</h3>

			<div className="upcoming-schedules-section">
				{/* <h2 className="section-title">Upcoming Games</h2> */}

				<div className="upcoming-games-grid">
					{upcomingGames.map((game, index) => (
						<div key={index} className="upcoming-game-card">
							<div className="game-sport">{game.sport}</div>
							<div className="game-details">
								<div className="game-date">
									{game.date} • {game.time}
								</div>
								<div className="game-matchup">
									{game.location === 'Away' ? '@' : 'vs'} {game.opponent}
								</div>
								<Link to={`${game.sport}Schedule`}>
									<button className="see-schedule">Schedule</button>
								</Link>
							</div>
						</div>
					))}
				</div>

				{/* <div to="/schedules" className="view-all-link">
							View Full Schedule →
						</div> */}
			</div>
		</div>
	);
}
