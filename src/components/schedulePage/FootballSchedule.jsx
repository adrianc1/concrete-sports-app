import logo from '../../assets/Concrete-Logo.png';
import { useSchedules } from '../../hooks/useSchedules';
import SchedulePage from './SchedulePage';
import './schedulePage.css';

export default function FootballSchedule() {
	const { games, loading } = useSchedules('football');
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
