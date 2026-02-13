import { useState } from 'react';
import logo from '../../assets/Concrete-Logo.png';
import SideNavBar from '../../layout/SideNavBar';
import ScrollToTop from '../../layout/ScrollToTop';

import '../homePage/homePageStyles/player.css';

function PlayersOfTheMonth() {
	const [showNav, setShowNav] = useState(false);
	return (
		<div>
			<ScrollToTop />

			<SideNavBar show={showNav} logo={logo} />
			<div className="player-of-the-month-page">
				<h1 className="player-title">Athletes of the Month</h1>
				<div className="player-profile">
					<div className="month">September</div>
					<div className="player-card">
						<div className="player-info">
							<div>
								<span className="player-name">Avery Collins</span> <br />
							</div>
						</div>
						<div className="player-sport">🏐 Volleyball</div>
					</div>

					<div className="player-card">
						<div className="player-info">
							<div>
								<span className="player-name">Zach Richter</span> <br />
							</div>
						</div>
						<div className="player-sport">🏈 Football</div>
					</div>
				</div>

				<div className="player-profile">
					<div className="month">October</div>
					<div className="player-card">
						<div className="player-info">
							<div>
								<span className="player-name">Lily Falconer</span> <br />
							</div>
						</div>
						<div className="player-sport">🏐 Volleyball</div>
					</div>

					<div className="player-card">
						<div className="player-info">
							<div>
								<span className="player-name">Alex Olson </span> <br />
							</div>
						</div>
						<div className="player-sport">🏈 Football</div>
					</div>
				</div>

				<div className="player-profile">
					<div className="month">November</div>
					<div className="player-card">
						<div className="player-info">
							<div>
								<span className="player-name">Maddy Norris</span> <br />
							</div>
						</div>
						<div className="player-sport">🏐 Volleyball</div>
					</div>

					<div className="player-card">
						<div className="player-info">
							<div>
								<span className="player-name">Zack Richter</span> <br />
							</div>
						</div>
						<div className="player-sport">🏈 Football</div>
					</div>
				</div>

				<div className="player-profile">
					<div className="month">December</div>
					<div className="player-card">
						<div className="player-info">
							<div>
								<span className="player-name">Riley O’Neil</span> <br />
							</div>
						</div>
						<div className="player-sport">🤼 Wrestling</div>
					</div>

					<div className="player-card">
						<div className="player-info">
							<div>
								<span className="player-name">Kylie Selin</span> <br />
							</div>
						</div>
						<div className="player-sport">🏀 Girls Basketball</div>
					</div>
					<div className="player-card">
						<div className="player-info">
							<div>
								<span className="player-name">Tait Bosa</span> <br />
							</div>
						</div>
						<div className="player-sport">🏈 Football</div>
					</div>
				</div>

				<div className="player-profile">
					<div className="month">January</div>
					<div className="player-card">
						<div className="player-info">
							<div>
								<span className="player-name">Brodie Nick</span> <br />
							</div>
						</div>
						<div className="player-sport">🤼 Wrestling</div>
					</div>

					<div className="player-card">
						<div className="player-info">
							<div>
								<span className="player-name">Alexa Dalton</span> <br />
							</div>
						</div>
						<div className="player-sport">🏀 Girls Basketball</div>
					</div>
					<div className="player-card">
						<div className="player-info">
							<div>
								<span className="player-name">Lincoln Stibbs</span> <br />
							</div>
						</div>
						<div className="player-sport">🏀 Boys Basketball</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PlayersOfTheMonth;
