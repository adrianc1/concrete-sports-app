import games from '../../utils/webScraper/baseballGames.json';
import logo from '../../assets/Concrete-Logo.png';
import SchedulePage from './SchedulePage';
import './schedulePage.css';

export default function BaseballSchedule() {
	return <SchedulePage sportName="Baseball" games={games} logo={logo} />;
}
