import { useSchedules } from '../../hooks/useSchedules';
import logo from '../../assets/Concrete-Logo.png';
import SchedulePage from './SchedulePage';
import './schedulePage.css';

export default function SoftballSchedule() {
	const { games, loading } = useSchedules('softball');
	if (loading) {
		return <div>Loading softball schedule...</div>;
	}
	return <SchedulePage sportName="Softball" games={games} logo={logo} />;
}
