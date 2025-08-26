import games from '../../utils/webScraper/softballGames.json';
import logo from '../../assets/Concrete-Logo.png';
import SchedulePage from './SchedulePage';
import './schedulePage.css';

export default function SoftballSchedule() {
	return <SchedulePage sportName="Softball" games={games} logo={logo} />;
}
