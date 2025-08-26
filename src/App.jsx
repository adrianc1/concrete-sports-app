import { useState } from 'react';
import SideNavBar from './layout/SideNavBar';
import Banner from './components/banner/Banner';
import MainPage from './components/homePage/MainPage';
import Header from './layout/Header';
import DownloadBanner from './components/homePage/DownloadBanner';
import logo from './assets/Concrete-Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import DownloadModal from './components/homePage/DownloadModal';
import Footer from './layout/Footer';

function App() {
	const [showNav, setShowNav] = useState(false);
	const [showExitIcon, setShowExitIcon] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [bannerActive, setBannerActive] = useState(true);

	function isPWA() {
		return (
			window.matchMedia('(display-mode: standalone)').matches ||
			window.navigator.standalone === true
		);
	}

	const isRunningPWA = isPWA();

	return (
		<>
			{bannerActive && !isRunningPWA && (
				<DownloadBanner
					setBannerActive={setBannerActive}
					setShowModal={setShowModal}
				/>
			)}
			{showModal && !isRunningPWA && (
				<DownloadModal setShowModal={setShowModal} />
			)}{' '}
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
