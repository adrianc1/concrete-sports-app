import logo from '../../assets/Concrete-Logo.png';
import SchedulePage from './SchedulePage';
import { useSchedules } from '../../hooks/useSchedules';
import './schedulePage.css';

export default function BaseballSchedule() {
	const { games, loading } = useSchedules('baseball');
	if (loading) {
		return <div>Loading baseball schedule...</div>;
	}
	return <SchedulePage sportName="Baseball" games={games} logo={logo} />;
}
