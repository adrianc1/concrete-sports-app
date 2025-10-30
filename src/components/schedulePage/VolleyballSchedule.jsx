import { useState, useEffect } from 'react';
import logo from '../../assets/Concrete-Logo.png';
import SchedulePage from './SchedulePage';
import { fetchSchedules } from '../../utils/api.js';
import './schedulePage.css';

export default function VolleyballSchedule() {
	const [games, setGames] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function loadGames() {
			try {
				setLoading(true);
				const data = await fetchSchedules('volleyball');
				setGames(data);
			} catch (err) {
				setError(err);
				console.log('error loading up the schedules');
			} finally {
				setLoading(false);
			}
		}
		loadGames();
	}, []);

	if (loading) {
		return <div>Loading volleyball schedule...</div>;
	}

	if (error) {
		return <div>Error loading schedule: {error}</div>;
	}

	return <SchedulePage sportName="Volleyball" games={games} logo={logo} />;
}
