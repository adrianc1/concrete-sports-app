import * as cheerio from 'cheerio';

async function fetchAndExtractSchedules(sources) {
	const rawGames = [];

	const fetchPromises = sources.map(async (source) => {
		const { url, sport } = source;
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`'not good!' ${response.status}`);
			}

			const htmlContent = await response.text();
			const $ = cheerio.load(htmlContent);

			$('.events .event_row').each((i, element) => {
				const row = $(element);
				const game = {
					sport: sport,
					date: row.find('.col_group1 .event_date_desktop').text().trim(),
					time: row.find('.col_group1 .event_time').text().trim(),
					home_team: row
						.find('.col_group2 .event_team:nth-child(2) .event_team_name a')
						.text()
						.trim(),
					home_score: row
						.find('.col_group2 .event_team:nth-child(2) .event_team_score')
						.text()
						.trim(),
					away_team: row
						.find('.col_group2 .event_team:nth-child(1) .event_team_name a')
						.text()
						.trim(),
					away_score: row
						.find('.col_group2 .event_team:nth-child(1) .event_team_score')
						.text()
						.trim(),
					location: row.find('.col_group3 .event_location').text().trim(),
				};

				rawGames.push(game);
			});
		} catch {
			return null;
		}
	});

	await Promise.all(fetchPromises);

	return rawGames;
}

export default fetchAndExtractSchedules;
