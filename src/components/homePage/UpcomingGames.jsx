import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import './homePageStyles/upcomingGames.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { fetchUpcomingGames } from '../../utils/api';

export default function UpcomingGames() {
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

	const sportEmojis = {
		VOLLEYBALL: '🏐',
		FOOTBALL: '🏈',
		BASKETBALL: '🏀',
		SOCCER: '⚽',
		BASEBALL: '⚾',
		SOFTBALL: '🥎',
		TRACK: '🏃',
		WRESTLING: '🤼',
	};

	return (
		<div className="upcoming-schedules">
			<h3 className="recent-scores-title team-schedule-title">
				Upcoming Games
			</h3>

			<div className="upcoming-schedules-section">
				<div className="upcoming-games-grid">
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
								.filter((game) => game.result === 'TBD')
								.sort((a, b) => {
									const dateA = new Date(a.date);
									const dateB = new Date(b.date);
									return dateA.getTime() - dateB.getTime();
								})
								.slice(0, 4)
								.map((game, index) => {
									return (
										<div key={index} className="upcoming-game-card">
											<div className="game-sport">
												{sportEmojis[game.sport.toUpperCase()] || '🏆'}{' '}
												{game.level.includes('Boys') ? 'BOYS' : 'GIRLS'}{' '}
												{game.sport}
											</div>
											<div className="game-details">
												<div className="game-date">
													{game.date} • {game.time}
												</div>
												<div className="game-matchup">
													{game.location === 'Away' ? '@' : 'vs'}{' '}
													{game.opponent}
												</div>
												<Link
													to={`${
														game.level.includes('Boys') ? 'BOYS' : 'GIRLS'
													}-${game.sport}Schedule`}
												>
													<button className="see-schedule">Schedule</button>
												</Link>
											</div>
										</div>
									);
								})}
				</div>
			</div>
		</div>
	);
}
