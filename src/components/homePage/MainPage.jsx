import '../homePage/homePageStyles/mainPage.css';
import RecentGames from '../../layout/RecentGames.jsx';
import UpcomingGames from './UpcomingGames.jsx';

function MainPage() {
	return (
		<>
			<RecentGames />
			<UpcomingGames />
		</>
	);
}

export default MainPage;
