const TIME_ZONE = 'America/Los_Angeles';

export function formatGameDate(startsAt) {
	if (!startsAt) return '';
	return new Date(startsAt).toLocaleDateString('en-US', {
		timeZone: TIME_ZONE,
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	});
}

export function formatGameTime(startsAt) {
	if (!startsAt) return '';
	return new Date(startsAt)
		.toLocaleTimeString('en-US', {
			timeZone: TIME_ZONE,
			hour: 'numeric',
			minute: '2-digit',
		})
		.toLowerCase();
}

// Sorts newest first
export function byStartsAtDesc(a, b) {
	return new Date(b.starts_at) - new Date(a.starts_at);
}

export function byStartsAtAsc(a, b) {
	return new Date(a.starts_at) - new Date(b.starts_at);
}
