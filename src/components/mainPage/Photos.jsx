import { useState } from 'react';
import Header from '../header/Header';
import logo from '../../assets/Concrete-Logo.png';
import SideNavBar from '../sideNavBar/SideNavBar';
// import team_1 from '../../assets/team_photo_1.png';
import team_2 from '../../assets/IMG_9949.png';
import team_3 from '../../assets/IMG_9950.png';

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

			<div
				className="photo-container"
				style={{ marginTop: '10rem', height: '100%' }}
			>
				<img
					src={team_2}
					alt=""
					className="team-photo"
					style={{ width: '100%' }}
				/>
				<img
					src={team_3}
					alt=""
					className="team-photo"
					style={{ width: '100%' }}
				/>
			</div>
		</div>
	);
}

export default MapFrame;
