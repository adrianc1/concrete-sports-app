import { useSchedules } from '../../hooks/useSchedules';
import logo from '../../assets/Concrete-Logo.png';
import SchedulePage from './SchedulePage';
import './schedulePage.css';

export default function TrackSchedule() {
	const { games, loading } = useSchedules('track');
	if (loading) {
		return <div>Loading track schedule...</div>;
	}
	return <SchedulePage sportName="Track" games={games} logo={logo} />;
}
