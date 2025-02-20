import React, { useState } from 'react';
import SideNavBar from './components/SideNavBar';
import Banner from './components/Banner';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import Header from './components/Header';
import logo from './assets/Concrete-Logo.png';

function App() {
	const [showNav, setShowNav] = useState(false);
	const [showExitIcon, setShowExitIcon] = useState(false);

	return (
		<>
			<Header
				toggleNav={() => setShowNav(!showNav)}
				toggleIcon={() => setShowExitIcon(!showExitIcon)}
				logo={logo}
				display={showExitIcon}
			/>
			<SideNavBar show={showNav} logo={logo} />
			<Banner />
			<MainPage />
			<Footer />
		</>
	);
}

export default App;
