import games from '../../utils/webScraper/trackGames.json';
import logo from '../../assets/Concrete-Logo.png';
import SchedulePage from './SchedulePage';
import './schedulePage.css';

export default function TrackSchedule() {
	return <SchedulePage sportName="Track" games={games} logo={logo} />;
}
