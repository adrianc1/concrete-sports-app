import games from '../../utils/webScraper/footballGames.json';
import logo from '../../assets/Concrete-Logo.png';
import SchedulePage from './SchedulePage';
import './schedulePage.css';

export default function FootballSchedule() {
	return <SchedulePage sportName="Football" games={games} logo={logo} />;
}
