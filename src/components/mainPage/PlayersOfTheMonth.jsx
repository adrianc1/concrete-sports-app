import { useState } from 'react';
import Header from '../header/Header';
import logo from '../../assets/Concrete-Logo.png';
import SideNavBar from '../sideNavBar/SideNavBar';
import './player.css';

function PlayersOfTheMonth() {
	const [showNav, setShowNav] = useState(false);
	const [showExitIcon, setShowExitIcon] = useState(false);
	return (
		<div>
			<Header
				toggleNav={() => setShowNav(!showNav)}
				toggleIcon={() => setShowExitIcon(!showExitIcon)}
				logo={logo}
				display={showExitIcon}
			/>
			<SideNavBar show={showNav} logo={logo} />
			<div
				className="player-of-the-month-page"
				style={{
					marginTop: '5rem',
					padding: 0,
					width: '100vw',
					textAlign: 'left',
				}}
			>
				<h1 style={{ textAlign: 'center' }}>Players of the Month</h1>
				<div className="player-profile">
					<div className="player-photo-container">
						<img
							src="src/assets/player_1.jpg"
							className="player-photo-img"
							alt=""
						/>
					</div>
					<div className="player-name">Name: Ethan Rodriguez</div>
					<div className="player-position">Position: Shortstop/Pitcher</div>
					<div className="player-grade">Grade: 12</div>
					<div className="coach-text">
						Ethans dedication and skill are truly remarkable. Hes a player who
						leads by example and always gives his all. He is a true team player.{' '}
					</div>
					<div className="player-highlights">
						Highlights: Ethans exceptional performance throughout the month has
						been instrumental in Northwoods undefeated streak. His powerful
						hitting and consistent pitching have made him a dual threat. In a
						crucial game against rival Southridge, he hit two home runs and
						pitched a complete game shutout. Ethans leadership on and off the
						field is highly valued by his teammates and coaches.
					</div>
				</div>
				<br />
				<br />
				<div className="player-profile">
					<div className="player-photo-container">
						<img
							src="src/assets/player_2.jpg"
							className="player-photo-img"
							alt=""
						/>
					</div>
					<div className="player-name">Name: Maya Chen</div>
					<div className="player-position">Position: Center Field/Pitcher</div>
					<div className="player-grade">Grade: 11</div>
					<div className="coach-text">
						Mayas athleticism and competitive spirit are unmatched. She brings
						an energy to the team that is contagious. She is a very valuable
						player.
					</div>
					<div className="player-highlights">
						Highlights: Mayas speed and agility in the outfield, coupled with
						her powerful hitting and solid pitching, have made her a standout
						player. She had a streak of 10 consecutive games with at least one
						hit and one stolen base. In the regional tournament opener, she hit
						a walk-off triple and pitched seven strong innings. Mayas ability to
						cover a lot of ground in center field has saved many runs for her
						team.
					</div>
				</div>
			</div>
		</div>
	);
}

export default PlayersOfTheMonth;
