import logo from '../../assets/Concrete-Logo.png';
import SchedulePage from './SchedulePage';
import { useSchedules } from '../../hooks/useSchedules';
import recordKeeper from '../../utils/recordKeeper';
import './schedulePage.css';

export default function BaseballSchedule() {
	const { games, loading } = useSchedules('baseball');
	let record = recordKeeper(games);

	if (loading) {
		return <div>Loading baseball schedule...</div>;
	}
	return (
		<SchedulePage
			sportName="Baseball"
			games={games}
			logo={logo}
			record={record}
		/>
	);
}
