import games from '../../utils/webScraper/boysbballgames.json';
import logo from '../../assets/Concrete-Logo.png';
import SchedulePage from './SchedulePage';
import './schedulePage.css';

export default function GirlsBasketballSchedule() {
	return (
		<SchedulePage sportName="Girls Basketball" games={games} logo={logo} />
	);
}
