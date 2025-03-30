import { useState } from 'react';
import Header from '../header/Header';
import SideNavBar from '../sideNavBar/SideNavBar';
import logo from '../../assets/Concrete-Logo.png';

function IFrame({ url }) {
	const [showNav, setShowNav] = useState(false);
	const [showExitIcon, setShowExitIcon] = useState(false);
	return (
		<div className="main-iframe">
			<Header
				toggleNav={() => setShowNav(!showNav)}
				toggleIcon={() => setShowExitIcon(!showExitIcon)}
				logo={logo}
				display={showExitIcon}
			/>
			<SideNavBar show={showNav} logo={logo} />
			<iframe
				src={url}
				title="WATCH THE SHOW"
				style={{
					position: 'fixed',
					top: '4rem',
					left: 0,
					width: '100vw',
					height: '100vh',
					border: 'none',
				}}
			></iframe>
		</div>
	);
}

export default IFrame;
