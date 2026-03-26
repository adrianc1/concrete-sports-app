import { Link } from 'react-router';
import { MapPin, ChevronLeft } from 'lucide-react';
import ScrollToTop from '../../layout/ScrollToTop';
import ComingSoon from '../../layout/ComingSoon';
import 'bootstrap/dist/css/bootstrap.min.css';
import './schedulePage.css';

function SchedulePage({ sportName, games, record }) {
	const sorted = games
		? [...games].sort((a, b) => new Date(a.date) - new Date(b.date))
		: [];

	const isWin = (result) => result?.includes('W');
	const isLoss = (result) => result?.includes('L');
	const isPlayed = (result) => result && result !== 'TBD' && result.trim() !== '';

	const accentColor = (result) => {
		if (isWin(result)) return '#16a34a';
		if (isLoss(result)) return '#dc2626';
		if (isPlayed(result)) return '#6b7280';
		return '#e5e7eb';
	};

	return (
		<div className="schedule-page-container">
			<ScrollToTop />

			<Link to="/schedules" className="schedule-back-btn">
				<ChevronLeft size={15} strokeWidth={2.5} />
				All Schedules
			</Link>

			<h2 className="sport-title">{sportName}</h2>

			{record && (
				<div className="record-badge">
					<span>Record</span>
					<strong>{record}</strong>
				</div>
			)}

			{!sorted || sorted.length === 0 ? (
				<ComingSoon />
			) : (
				<div className="games-list">
					{sorted.map((game, index) => {
						const isAway = game.home_away?.includes('Away');
						const played = isPlayed(game.result);

						return (
							<div
								key={index}
								className="game-row"
								style={{ borderLeftColor: accentColor(game.result) }}
							>
								<div className="game-date-col">
									<span className="game-date">{game.date}</span>
									{game.time && <span className="game-time">{game.time}</span>}
								</div>

								<div className="game-matchup-col">
									<span className="game-opponent">
										{isAway ? '@ ' : 'vs '}{game.opponent}
									</span>
									{game.location && (
										<span className="game-location">
											<MapPin size={10} />
											{game.location}
										</span>
									)}
								</div>

								<div className="game-result-col">
									{played ? (
										<span className="game-result" style={{ color: accentColor(game.result) }}>
											{game.result}
										</span>
									) : (
										<span className="game-upcoming">Upcoming</span>
									)}
								</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default SchedulePage;
