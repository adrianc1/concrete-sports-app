import { useState } from 'react';
import Header from '../header/Header';
import logo from '../../assets/Concrete-Logo.png';
import SideNavBar from '../sideNavBar/SideNavBar';

function SchoolDistrict() {
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
			<iframe
				src="https://www.concrete.k12.wa.us/"
				title="Announcements"
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

export default SchoolDistrict;
