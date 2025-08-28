import { useState, useEffect } from 'react';
import SideNavBar from './layout/SideNavBar';
import Banner from './components/banner/Banner';
import MainPage from './components/homePage/MainPage';
import Header from './layout/Header';
import DownloadBanner from './components/homePage/DownloadBanner';
import logo from './assets/Concrete-Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import DownloadModal from './components/homePage/DownloadModal';
import Footer from './layout/Footer';
import { useLocation } from 'react-router-dom';

function App() {
	const [showNav, setShowNav] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [bannerActive, setBannerActive] = useState(true);
	const [isDesktop, setIsDesktop] = useState(false);

	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	function isPWA() {
		return (
			window.matchMedia('(display-mode: standalone)').matches ||
			window.navigator.standalone === true
		);
	}

	const isRunningPWA = isPWA();

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= 1024); // treat 1024px+ as desktop
		};

		handleResize(); // run on mount
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			{bannerActive && !isRunningPWA && !isDesktop && (
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
				logo={logo}
				display={showNav}
			/>
			<SideNavBar show={showNav} logo={logo} />
			<Banner />
			<MainPage />
			<Footer />
		</>
	);
}

export default App;
