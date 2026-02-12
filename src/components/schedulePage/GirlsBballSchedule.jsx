import { useSchedules } from '../../hooks/useSchedules';
import logo from '../../assets/Concrete-Logo.png';
import SchedulePage from './SchedulePage';
import recordKeeper from '../../utils/recordKeeper';
import './schedulePage.css';

export default function GirlsBasketballSchedule() {
	const { games, loading } = useSchedules('girls-basketball');
	let record = recordKeeper(games);

	if (loading) {
		return <div>Loading volleyball schedule...</div>;
	}
	return (
		<SchedulePage
			sportName="Girls Basketball"
			games={games}
			logo={logo}
			record={record}
		/>
	);
}
