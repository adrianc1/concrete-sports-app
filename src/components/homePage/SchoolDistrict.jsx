import { useState } from 'react';
import Header from '../../layout/Header';
import logo from '../../assets/Concrete-Logo.png';

function SchoolDistrict() {
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
				src="https://www.concrete.k12.wa.us/"
				title="Announcements"
				style={{
					position: 'fixed',
					top: '6rem',
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
