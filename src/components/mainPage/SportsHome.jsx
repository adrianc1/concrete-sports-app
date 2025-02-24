import { useState } from 'react';
import Header from '../header/Header';
import logo from '../../assets/Concrete-Logo.png';
function SportsHome() {
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
			<iframe
				src="https://concretehslions.com/"
				title="Sports Home"
				style={{
					position: 'fixed',
					top: '1rem',
					left: 0,
					width: '100vw',
					height: '100vh',
					border: 'none',
				}}
			></iframe>
		</div>
	);
}

export default SportsHome;
