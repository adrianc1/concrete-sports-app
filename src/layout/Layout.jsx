import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import SideNavBar from './SideNavBar';
import Footer from './Footer';
import BottomNav from '../components/homePage/BottomNav';
import DownloadBanner from '../components/homePage/DownloadBanner';
import DownloadModal from '../components/homePage/DownloadModal';
import logo from '../assets/Concrete-Logo.png';
import '../index.css';
import ScheduleSection from './scheduleSection';

function Layout({ children }) {
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
			setIsDesktop(window.innerWidth >= 1024);
		};

		handleResize();
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
			)}
			<Header
				toggleNav={() => setShowNav(!showNav)}
				logo={logo}
				display={showNav}
			/>
			<SideNavBar show={showNav} logo={logo} />

			{children}

			{/* <ScheduleSection /> */}
			<Footer />
			<BottomNav />
		</>
	);
}

export default Layout;
