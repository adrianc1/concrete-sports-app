import { useSchedules } from '../../hooks/useSchedules';
import logo from '../../assets/Concrete-Logo.png';
import SchedulePage from './SchedulePage';
import './schedulePage.css';

export default function BoysBasketballSchedule() {
	const { games, loading } = useSchedules('boys-basketball');
	if (loading) {
		return <div>Loading boys basketball schedule...</div>;
	}
	return <SchedulePage sportName="Boys Basketball" games={games} logo={logo} />;
}
