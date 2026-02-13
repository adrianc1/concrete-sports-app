import '../homePage/homePageStyles/mainPage.css';
import RecentGames from '../../layout/RecentGames.jsx';
import UpcomingGames from './UpcomingGames.jsx';
import ScheduleSection from '../../layout/ScheduleSection.jsx';

function MainPage() {
	return (
		<>
			<RecentGames />
			<UpcomingGames />
			<ScheduleSection />
		</>
	);
}

export default MainPage;
