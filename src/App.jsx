import { useState } from 'react';
import SideNavBar from './components/sideNavBar/SideNavBar';
import Banner from './components/banner/Banner';
import MainPage from './components/mainPage/MainPage';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import logo from './assets/Concrete-Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

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
