import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUpcomingGames } from '../utils/api';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const RecentGames = () => {
	const [upcomingGames, setUpcomingGames] = useState([]);
	const [loading, setLoading] = useState(true);
	const sportEmojis = {
		VOLLEYBALL: '🏐',
		FOOTBALL: '🏈',
		BASKETBALL: '🏀',
		SOCCER: '⚽',
		BASEBALL: '⚾',
		SOFTBALL: '🥎',
		TRACK: '🏃',
		WRESTLING: '🤼',
		SWIMMING: '🏊',
	};

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
					{loading
						? Array(4)
								.fill(0)
								.map((_, index) => (
									<div key={index} className="upcoming-game-card">
										<div className="game-sport">
											<Skeleton height={20} width={150} />
										</div>
										<div className="game-details">
											<div className="game-date">
												<Skeleton height={16} width={180} />
											</div>
											<div className="game-matchup">
												<Skeleton height={16} width={140} />
											</div>
											<Skeleton height={36} width={100} borderRadius={4} />
										</div>
									</div>
								))
						: upcomingGames
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
										<div key={game._id} className="game-card game-1">
											<div className="game-info-card">
												<div className="game-date">{game.date}</div>
												<div className="sport-name">
													{sportEmojis[game.sport.toUpperCase()] || '🏆'}{' '}
													{game.sport}
												</div>
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
												<Link to={`${game.sport}Schedule`}>
													<button className="see-schedule">Schedule</button>
												</Link>
											</div>
										</div>
									);
								})}
				</div>
			</div>
		</>
	);
};

export default RecentGames;
