import '../homePage/homePageStyles/mainPage.css';
import { Link } from 'react-router';
import { RiContactsLine } from 'react-icons/ri';
import { RiMegaphoneLine } from 'react-icons/ri';
import { PiUsers } from 'react-icons/pi';
import { MdOutlineAddBusiness } from 'react-icons/md';
import { GiLion } from 'react-icons/gi';
import { Calendar } from 'lucide-react';
import ScrollToTop from '../../layout/ScrollToTop';
import RecentGames from '../../layout/RecentGames.jsx';
import UpcomingGames from './UpcomingGames.jsx';
import BottomNav from './BottomNav.jsx';

function MainPage() {
	return (
		<>
			<RecentGames />
			<UpcomingGames />
			<BottomNav />
		</>
	);
}

export default MainPage;
