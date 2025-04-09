import { useState } from 'react';
import Header from '../header/Header';
import logo from '../../assets/Concrete-Logo.png';
import SideNavBar from '../sideNavBar/SideNavBar';

function MapFrame() {
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

			<img
				src="../../src/assets/team_photo_1.png"
				alt=""
				style={{ marginTop: '7rem' }}
			/>
			<img
				src="../../src/assets/team_photo_2.jpg"
				alt=""
				style={{ marginTop: '1rem' }}
			/>
			<img
				src="../../src/assets/team_photo_3.jpg"
				alt=""
				style={{ marginTop: '1rem' }}
			/>
			<img
				src="../../src/assets/team_photo_4.jpg"
				alt=""
				style={{ marginTop: '1rem' }}
			/>
			<img
				src="../../src/assets/team_photo_5.jpg"
				alt=""
				style={{ marginTop: '1rem' }}
			/>
		</div>
	);
}

export default MapFrame;
