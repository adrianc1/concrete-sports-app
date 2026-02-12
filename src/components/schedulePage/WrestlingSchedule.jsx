import { useSchedules } from '../../hooks/useSchedules';
import logo from '../../assets/Concrete-Logo.png';
import SchedulePage from './SchedulePage';
import './schedulePage.css';

export default function WrestlingSchedule() {
	const { games, loading } = useSchedules('wrestling');
	let wins = 0;
	let loss = 0;
	let record;
	games.map((game) => {
		console.log(game.result.includes('W'));

		if (game.result.includes('W')) {
			wins += 1;
		} else if (game.result.includes('L')) {
			loss += 1;
		}
	});
	record = `${wins} - ${loss}`;
	if (loading) {
		return <div>Loading wrestling schedule...</div>;
	}
	return (
		<SchedulePage
			sportName="Wrestling"
			games={games}
			logo={logo}
			record={record}
		/>
	);
}
