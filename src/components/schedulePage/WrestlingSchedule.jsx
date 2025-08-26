import games from '../../utils/webScraper/boysbballgames.json';
import logo from '../../assets/Concrete-Logo.png';
import SchedulePage from './SchedulePage';
import './schedulePage.css';

export default function WrestlingSchedule() {
	return <SchedulePage sportName="Wrestling" games={games} logo={logo} />;
}
