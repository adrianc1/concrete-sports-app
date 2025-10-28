import { Link } from 'react-router-dom';
const RecentGames = () => {
	return (
		<>
			<h3 className="recent-scores-title">Recent Scores</h3>

			<div className="recent-container">
				<div className="recent-games">
					<div className="game-card game-4">
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
					<div className="game-card game-1">
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
					</div>
					<div className="game-card game-2">
						<div className="game-info-card">
							<div className="game-date">FRI Oct 24</div>
							<div className="sport-name">Varsity Volleyball</div>
						</div>
						<div className="score-container">
							<div className="team-container">
								<div className="team-name">Concrete</div>
								<div className="team-score">3 </div>
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
					<div className="game-card game-3">
						<div className="game-info-card">
							<div className="game-date">THU Oct 23</div>
							<div className="sport-name">Varsity Volleyball</div>
						</div>
						<div className="score-container">
							<div className="team-container">
								<div className="team-name">Concrete</div>
								<div className="team-score">0</div>
							</div>
							<div className="team-container">
								<div className="team-name">Coupeville</div>
								<div className="team-score">3</div>
							</div>
							<Link to="/volleyballSchedule">
								<button className="see-schedule">Schedule</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RecentGames;
