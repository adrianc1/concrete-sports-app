import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUpcomingGames } from '../utils/api';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../components/homePage/homePageStyles/upcomingGames.css';
import { FaFootballBall, FaVolleyballBall, FaBasketballBall, FaBaseballBall, FaRunning, FaHandRock, FaTrophy } from 'react-icons/fa';
import { Card, CardContent } from '../components/ui/card';
import { getTeamLogo } from '../utils/teamLogos';
import { MapPin } from 'lucide-react';

const sportIcons = {
	volleyball: <FaVolleyballBall />,
	football: <FaFootballBall />,
	'boys-basketball': <FaBasketballBall />,
	'girls-basketball': <FaBasketballBall />,
	baseball: <FaBaseballBall />,
	softball: <FaBaseballBall />,
	track: <FaRunning />,
	wrestling: <FaHandRock />,
};

const sportColors = {
	volleyball: '#f97316',       // orange
	football: '#854d0e',         // brown
	'boys-basketball': '#f59e0b', // amber
	'girls-basketball': '#f59e0b',
	baseball: '#3b82f6',         // blue
	softball: '#84cc16',         // lime green
	track: '#ef4444',            // red
	wrestling: '#8b5cf6',        // violet
};

const transformSport = {
	volleyball: 'Volleyball',
	football: 'Football',
	'boys-basketball': 'Boys Basketball',
	'girls-basketball': 'Girls Basketball',
	baseball: 'Baseball',
	softball: 'Softball',
	track: 'Track',
	wrestling: 'Wrestling',
};

const RecentGames = () => {
	const [upcomingGames, setUpcomingGames] = useState([]);
	const [loading, setLoading] = useState(true);

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
			<div className="recent-container">
				<h3 className="recent-scores-title">Recent Scores</h3>
				<div className="recent-games">
					{loading
						? Array(4)
								.fill(0)
								.map((_, index) => (
									<Card key={index} className="min-w-72 max-w-72 shrink-0 py-0">
										<CardContent className="flex flex-col gap-2.5 p-3">
											<Skeleton height={16} width={120} />
											<Skeleton height={20} width="100%" />
											<Skeleton height={20} width="100%" />
										</CardContent>
									</Card>
								))
						: upcomingGames
								.filter((game) => game.result !== 'TBD')
								.sort((a, b) => new Date(b.date) - new Date(a.date))
								.slice(0, 4)
								.map((game) => {
									const concreteWon = game.concrete_score > game.opponent_score;
									const opponentName = game.opponent?.replace(/\s*\([^)]*\)\s*/g, '').trim();
									return (
										<Card key={game._id} className="min-w-72 max-w-72 shrink-0 py-0">
											<CardContent className="flex flex-col gap-2.5 p-3">
												{/* Sport + Final · date on one row */}
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
													<span className="text-[11px] text-muted-foreground">Final · {game.date}</span>
												</div>

												{/* Teams + scores */}
												<div className="flex flex-col gap-1.5 border-t border-border pt-2">
													{game.location && (
														<span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground pb-1">
															<MapPin size={10} />
															{game.location}
														</span>
													)}
													<div className="flex items-center justify-between gap-2">
														<div className="flex items-center gap-2 min-w-0">
															{getTeamLogo('concrete') && (
																<img src={getTeamLogo('concrete')} alt="Concrete" className="w-6 h-6 object-contain shrink-0 rounded-full bg-gray-100 p-0.5" />
															)}
															<div className="flex flex-col min-w-0">
																<span className={`truncate text-sm ${concreteWon ? 'font-bold text-foreground' : 'text-muted-foreground'}`}>
																	Concrete
																</span>
																<span className="text-[10px] text-muted-foreground">{game.home_away?.includes('Away') ? 'Away' : 'Home'}</span>
															</div>
														</div>
														<span className={`text-lg tabular-nums shrink-0 ${concreteWon ? 'font-black text-foreground' : 'font-normal text-muted-foreground'}`}>
															{game.concrete_score}
														</span>
													</div>
													<div className="flex items-center justify-between gap-2">
														<div className="flex items-center gap-2 min-w-0">
															{getTeamLogo(game.opponent) && (
																<img src={getTeamLogo(game.opponent)} alt={opponentName} className="w-6 h-6 object-contain shrink-0 rounded-full bg-gray-100 p-0.5" />
															)}
															<div className="flex flex-col min-w-0">
																<span className={`truncate text-sm ${!concreteWon ? 'font-bold text-foreground' : 'text-muted-foreground'}`}>
																	{opponentName}
																</span>
																<span className="text-[10px] text-muted-foreground">{game.home_away?.includes('Away') ? 'Home' : 'Away'}</span>
															</div>
														</div>
														<span className={`text-lg tabular-nums shrink-0 ${!concreteWon ? 'font-black text-foreground' : 'font-normal text-muted-foreground'}`}>
															{game.opponent_score}
														</span>
													</div>
												</div>
											</CardContent>
										</Card>
									);
								})}
				</div>
			</div>
		</>
	);
};

export default RecentGames;
