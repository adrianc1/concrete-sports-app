import logo from '../../assets/Concrete-Logo.png';
import SchedulePage from './SchedulePage';
import './schedulePage.css';
import { useSchedules } from '../../hooks/useSchedules.js';
import { ReceiptRussianRuble } from 'lucide-react';

export default function VolleyballSchedule() {
	const { games, loading } = useSchedules('volleyball');
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
