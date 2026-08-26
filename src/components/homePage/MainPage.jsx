import '../homePage/homePageStyles/mainPage.css';
import RecentGames from '../../layout/RecentGames.jsx';
import UpcomingGames from './UpcomingGames.jsx';
import SpotlightBanner from './SpotlightBanner.jsx';
import ScheduleSection from '../../layout/ScheduleSection.jsx';

function MainPage() {
	return (
		<>
			<UpcomingGames />
			<RecentGames />
			<SpotlightBanner />
			<ScheduleSection />
		</>
	);
}

export default MainPage;
