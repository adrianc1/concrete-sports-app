import { useEffect, useState } from 'react';
import { fetchSchedules } from '../utils/api';
export function useSchedules(sportname) {
	const [games, setGames] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function loadGames() {
			try {
				setLoading(true);
				const data = await fetchSchedules(sportname);
				setGames(data);
			} catch (err) {
				setError(err);
				console.log('error loading up the schedules');
			} finally {
				setLoading(false);
			}
		}
		loadGames();
	}, [sportname]);
	return {
		games,
		loading,
		error,
	};
}
