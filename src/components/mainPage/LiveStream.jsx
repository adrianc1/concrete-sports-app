import { useState } from 'react';
import Header from '../header/Header';
import logo from '../../assets/Concrete-Logo.png';
import SideNavBar from '../sideNavBar/SideNavBar';

function LiveStream() {
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
					marginTop: '4rem',
					padding: 0,
					width: '100vw',
					textAlign: 'left',
					border: '1px solid red',
				}}
			>
				<h1 style={{ textAlign: 'center' }}>Players of the Month</h1>
				<div className="player-profile">
					<div className="player-name">Name: Dwayne Johnson</div>
					<div className="player-position">Position: Guard</div>
					<div className="fav-food">Favorite Food: Candy and Junk Food</div>
					<div className="coach-text">
						From Coach: Dwayne is like a ROCK! Tough as nails and really nice.{' '}
					</div>
				</div>
			</div>
		</div>
	);
}

export default LiveStream;
