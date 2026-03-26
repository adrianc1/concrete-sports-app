import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import './homePageStyles/upcomingGames.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { fetchUpcomingGames } from '../../utils/api';
import { FaFootballBall, FaVolleyballBall, FaBasketballBall, FaBaseballBall, FaRunning, FaHandRock, FaSwimmer, FaTrophy } from 'react-icons/fa';
import { GiSoccerBall } from 'react-icons/gi';
import { Card, CardContent } from '../ui/card';

const sportIcons = {
	volleyball: <FaVolleyballBall />,
	football: <FaFootballBall />,
	'boys-basketball': <FaBasketballBall />,
	'girls-basketball': <FaBasketballBall />,
	soccer: <GiSoccerBall />,
	baseball: <FaBaseballBall />,
	softball: <FaBaseballBall />,
	track: <FaRunning />,
	wrestling: <FaHandRock />,
	swimming: <FaSwimmer />,
};

const sportColors = {
	volleyball: '#f97316',
	football: '#854d0e',
	'boys-basketball': '#f59e0b',
	'girls-basketball': '#f59e0b',
	soccer: '#22c55e',
	baseball: '#3b82f6',
	softball: '#ec4899',
	track: '#ef4444',
	wrestling: '#8b5cf6',
	swimming: '#06b6d4',
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

	return (
		<div className="upcoming-schedules">
			<h3 className="recent-scores-title">Upcoming Games</h3>

			<div className="upcoming-schedules-section">
				<div className="upcoming-games-grid">
					{loading
						? Array(4)
								.fill(0)
								.map((_, index) => (
									<Card key={index} className="min-w-72 max-w-72 shrink-0 py-0">
										<CardContent className="flex flex-col gap-2.5 p-3">
											<Skeleton height={16} width={120} />
											<Skeleton height={16} width={160} />
											<Skeleton height={16} width={100} />
										</CardContent>
									</Card>
								))
						: upcomingGames
								.filter((game) => game.result === 'TBD')
								.sort((a, b) => new Date(a.date) - new Date(b.date))
								.slice(0, 4)
								.map((game, index) => (
									<Card key={index} className="min-w-72 max-w-72 shrink-0 py-0">
										<CardContent className="flex flex-col gap-2.5 p-3">
											{/* Sport + date on one row */}
											<div className="flex items-center justify-between">
												<Link
													to={`${game.sport}Schedule`}
													style={{ textDecoration: 'none', color: '#420a72' }}
													className="inline-flex items-center gap-1.5 hover:text-[#f2bc40] transition-colors font-bold text-sm"
												>
													<span style={{ color: sportColors[game.sport] || '#420a72' }}>
														{sportIcons[game.sport] || <FaTrophy />}
													</span>
													{transformSport[game.sport]}
												</Link>
												<span className="text-[11px] text-muted-foreground">{game.date}</span>
											</div>

											{/* Matchup + time */}
											<div className="flex flex-col gap-1 border-t border-border pt-2">
												<span className="text-sm font-bold text-foreground">
													{game.location === 'Away' ? '@ ' : 'vs '}{game.opponent}
												</span>
												{game.time && (
													<span className="text-[11px] text-muted-foreground">{game.time}</span>
												)}
											</div>

											{/* See schedule button */}
											<Link
												to={`${game.sport}Schedule`}
												style={{ textDecoration: 'none' }}
												className="block border-t border-border pt-2"
											>
												<button className="w-full text-[11px] font-bold py-2 rounded-full tracking-wide uppercase bg-linear-to-r from-[#420a72] to-[#6b2c91] text-white hover:from-[#6b2c91] hover:to-[#420a72] hover:shadow-md transition-all cursor-pointer">
													See Schedule
												</button>
											</Link>
										</CardContent>
									</Card>
								))}
				</div>
			</div>
		</div>
	);
}
