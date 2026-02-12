import { useSchedules } from '../../hooks/useSchedules';
import logo from '../../assets/Concrete-Logo.png';
import SchedulePage from './SchedulePage';
import recordKeeper from '../../utils/recordKeeper';
import './schedulePage.css';

export default function SoftballSchedule() {
	const { games, loading } = useSchedules('softball');
	let record = recordKeeper(games);

	if (loading) {
		return <div>Loading softball schedule...</div>;
	}
	return (
		<SchedulePage
			sportName="Softball"
			games={games}
			logo={logo}
			record={record}
		/>
	);
}
