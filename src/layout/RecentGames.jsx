import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUpcomingGames } from '../utils/api';
const RecentGames = () => {
	const [upcomingGames, setUpcomingGames] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function loadUpcomingGames() {
			try {
				setLoading(true);
				const data = await fetchUpcomingGames();
				setUpcomingGames(data);
			} catch (error) {
				console.log(error, 'cannot fetch upcoming games!');
			} finally {
				setLoading(false);
			}
		}
		loadUpcomingGames();
	}, []);

	return (
		<>
			<h3 className="recent-scores-title">Recent Scores</h3>

			<div className="recent-container">
				<div className="recent-games">
					{upcomingGames
						.filter((game) => game.result !== 'TBD')
						.sort((a, b) => {
							const dateA = new Date(a.date);
							const dateB = new Date(b.date);
							return dateB.getTime() - dateA.getTime();
						})
						.slice(0, 4)
						.map((game, index) => {
							const parts = game.result.split(' ');
							const concreteScore = parts[0];
							const opponentScore = parts[2];
							const outcome = parts[4];
							return (
								<>
									<div className="game-card game-1">
										<div className="game-info-card">
											<div className="game-date">{game.date}</div>
											<div className="sport-name">{game.sport}</div>
										</div>
										<div className="score-container">
											<div className="team-container">
												<div className="team-name">Concrete</div>
												<div className="team-score">{concreteScore}</div>
											</div>
											<div className="team-container">
												<div className="team-name">{game.opponent}</div>
												<div className="team-score">{opponentScore}</div>
											</div>
											<Link to="/volleyballSchedule">
												<button className="see-schedule">Schedule</button>
											</Link>
										</div>
									</div>
								</>
							);
						})}
					{/* <div className="game-card game-1">
						<div className="game-info-card">
							<div className="game-date">WED Oct 29</div>
							<div className="sport-name">Varsity Volleyball</div>
						</div>
						<div className="score-container">
							<div className="team-container">
								<div className="team-name">Concrete</div>
								<div className="team-score">3</div>
							</div>
							<div className="team-container">
								<div className="team-name">Evangel Classical</div>
								<div className="team-score">0</div>
							</div>
							<Link to="/volleyballSchedule">
								<button className="see-schedule">Schedule</button>
							</Link>
						</div>
					</div>
					<div className="game-card game-2">
						<div className="game-info-card">
							<div className="game-date">WED Oct 29</div>
							<div className="sport-name">Varsity Volleyball</div>
						</div>
						<div className="score-container">
							<div className="team-container">
								<div className="team-name">Concrete</div>
								<div className="team-score">0</div>
							</div>
							<div className="team-container">
								<div className="team-name">Darrington</div>
								<div className="team-score">3</div>
							</div>
							<Link to="/volleyballSchedule">
								<button className="see-schedule">Schedule</button>
							</Link>
						</div>
					</div>
					<div className="game-card game-3">
						<div className="game-info-card">
							<div className="game-date">MON Oct 27</div>
							<div className="sport-name">Varsity Volleyball</div>
						</div>
						<div className="score-container">
							<div className="team-container">
								<div className="team-name">Concrete</div>
								<div className="team-score">0</div>
							</div>
							<div className="team-container">
								<div className="team-name">Darrington</div>
								<div className="team-score">3</div>
							</div>
							<Link to="/volleyballSchedule">
								<button className="see-schedule">Schedule</button>
							</Link>
						</div>
					</div>
					<div className="game-card game-4">
						<div className="game-info-card">
							<div className="game-date">SAT Oct 25</div>
							<div className="sport-name">Varsity Football</div>
						</div>
						<div className="score-container">
							<div className="team-container">
								<div className="team-name">Concrete</div>
								<div className="team-score">16 </div>
							</div>
							<div className="team-container">
								<div className="team-name">Darrington</div>
								<div className="team-score">52</div>
							</div>
							<Link to="/footballSchedule">
								<button className="see-schedule">Schedule</button>
							</Link>
						</div>
					</div> */}
				</div>
			</div>
		</>
	);
};

export default RecentGames;
