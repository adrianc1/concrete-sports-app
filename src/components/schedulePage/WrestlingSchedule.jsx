import { useSchedules } from '../../hooks/useSchedules';
import logo from '../../assets/Concrete-Logo.png';
import SchedulePage from './SchedulePage';
import './schedulePage.css';

export default function WrestlingSchedule() {
	const { games, loading } = useSchedules('wrestling');
	if (loading) {
		return <div>Loading wrestling schedule...</div>;
	}
	return <SchedulePage sportName="Wrestling" games={games} logo={logo} />;
}
