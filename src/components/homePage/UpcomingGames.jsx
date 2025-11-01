import './homePageStyles/upcomingGames.css';
export default function UpcomingGames() {
	const upcomingGames = [
		{
			sport: 'Varsity Football',
			date: 'Nov 5',
			time: '7:00 PM',
			opponent: 'Lincoln High',
			location: 'Home',
		},
		{
			sport: 'JV Basketball',
			date: 'Nov 6',
			time: '5:30 PM',
			opponent: 'Roosevelt',
			location: 'Away',
		},
	];
	return (
		<div className="upcoming-schedules">
			<>
				<h3 className="recent-scores-title">Team Schedules</h3>

				<div className="upcoming-schedules-section">
					<h2 className="section-title">Upcoming Games</h2>

					<div className="games-grid">
						{upcomingGames.map((game, index) => (
							<div key={index} className="game-card">
								<div className="game-sport">{game.sport}</div>
								<div className="game-details">
									<div className="game-date">
										{game.date} • {game.time}
									</div>
									<div className="game-matchup">
										{game.location === 'Away' ? '@' : 'vs'} {game.opponent}
									</div>
								</div>
							</div>
						))}
					</div>

					{/* <div to="/schedules" className="view-all-link">
							View Full Schedule →
						</div> */}
				</div>
			</>
		</div>
	);
}
