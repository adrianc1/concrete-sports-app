import * as cheerio from 'cheerio';

// const SPORTS_MAP = [
// 	{
// 		sportId: 'Volleyball',
// 		url: 'https://www.wpanetwork.com/widgets/widget-wiaa-event-list.php?sport_id=10&school_year=2025-26&classification=1B&school_id=43&date_range_kword=season&include_styles=1&output_mode=plain&utm_source=WA_wiaa',
// 	},
// 	{
// 		sportId: 'Boys Basketball',
// 		url: 'https://www.wpanetwork.com/widgets/widget-wiaa-event-list.php?sport_id=3&school_year=2025-26&classification=1B&school_id=43&date_range_kword=season&include_styles=1&output_mode=plain&utm_source=WA_wiaa',
// 	},
// ];

async function fetchAndExtractSchedules(sources) {
	const allGames = [];

	const fetchPromises = sources.map(async (source) => {
		const { url, sportId } = source;
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
					sport: sportId,
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

				allGames.push(game);
			});
		} catch {
			return null;
		}
	});

	const results = await Promise.all(fetchPromises);

	results.forEach((gameArray) => {
		if (gameArray) {
			allGames.push(...gameArray);
		}
	});

	return allGames;
}

export default fetchAndExtractSchedules;
