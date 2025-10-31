const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3030';

export async function fetchSchedules(sport) {
	try {
		const response = await fetch(`${API_URL}/data/${sport}`);

		if (!response.ok) {
			throw new Error(`Failed to fetch ${sport} schedule`);
		}
		return await response.json();
	} catch (error) {
		console.error('Error fetching schedules:', error);
		throw error;
	}
}
