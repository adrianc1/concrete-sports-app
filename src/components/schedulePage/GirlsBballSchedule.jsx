import games from '../../utils/webScraper/girlsBballgames.json';
import logo from '../../assets/Concrete-Logo.png';
import SchedulePage from './SchedulePage';
import './schedulePage.css';

export default function GirlsBasketballSchedule() {
	return (
		<SchedulePage sportName="Girls Basketball" games={games} logo={logo} />
	);
}
