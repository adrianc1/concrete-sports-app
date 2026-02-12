import logo from '../../assets/Concrete-Logo.png';
import { useSchedules } from '../../hooks/useSchedules';
import SchedulePage from './SchedulePage';
import recordKeeper from '../../utils/recordKeeper';
import './schedulePage.css';

export default function FootballSchedule() {
	const { games, loading } = useSchedules('football');
	let record = recordKeeper(games);

	if (loading) {
		return <div>Loading football schedule...</div>;
	}
	return (
		<SchedulePage
			sportName="Football"
			games={games}
			logo={logo}
			record={record}
		/>
	);
}
