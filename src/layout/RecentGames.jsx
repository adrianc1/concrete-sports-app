import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUpcomingGames } from '../utils/api';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const RecentGames = () => {
	const [upcomingGames, setUpcomingGames] = useState([]);
	const [loading, setLoading] = useState(true);
	const sportEmojis = {
		volleyball: '🏐',
		football: '🏈',
		'boys-basketball': '🏀',
		'girls-basketball': '🏀',
		soccer: '⚽',
		baseball: '⚾',
		softball: '🥎',
		track: '🏃',
		wrestling: '🤼',
	};
	const transformSport = {
		volleyball: 'Volleyball',
		football: 'Football',
		'boys-basketball': 'Boys Basketball',
		'girls-basketball': 'Girls Basketball',
		soccer: 'Soccer',
		baseball: 'Baseball',
		softball: 'Softball',
		track: 'Track',
		wrestling: 'Wrestling',
	};

	useEffect(() => {
		async function loadUpcomingGames() {
			try {
				setLoading(true);
				const data = await fetchUpcomingGames();
				setUpcomingGames(data);
				console.log(data);
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
									<div key={index} className="game-card">
										<div className="game-info-card">
											<Skeleton height={20} width={150} />
										</div>
										<div className="score-container">
											<Skeleton height={40} width="100%" />
											<Skeleton height={40} width="100%" />
											<Skeleton height={36} width="100%" borderRadius={20} />
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
									return (
										<div key={game._id} className="game-card">
											<div className="game-info-card">
												<div className="game-date">{game.date}</div>
												<div className="game-sport">
													{sportEmojis[game.sport] || '🏆'}{' '}
													{transformSport[game.sport]}
												</div>
											</div>
											<div className="score-container">
												<div className="team-container">
													<div className="team-name">Concrete</div>
													<div className="team-score">
														{game.concrete_score}
													</div>
												</div>
												<div className="team-container">
													<div className="team-name">{game.opponent}</div>
													<div className="team-score">
														{game.opponent_score}
													</div>
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
