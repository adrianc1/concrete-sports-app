import games from '../../utils/webScraper/volleyballGames.json';
import logo from '../../assets/Concrete-Logo.png';
import SchedulePage from './SchedulePage';
import './schedulePage.css';

export default function VolleyballSchedule() {
	return <SchedulePage sportName="Volleyball" games={games} logo={logo} />;
}
