import logo from '../../assets/Concrete-Logo.png';
import SchedulePage from './SchedulePage';
import recordKeeper from '../../utils/recordKeeper.js';
import './schedulePage.css';
import { useSchedules } from '../../hooks/useSchedules.js';

export default function VolleyballSchedule() {
	const { games, loading } = useSchedules('volleyball');
	let record = recordKeeper(games);

	if (loading) {
		return <div>Loading volleyball schedule...</div>;
	}

	return (
		<SchedulePage
			sportName="Volleyball"
			games={games}
			logo={logo}
			record={record}
		/>
	);
}
