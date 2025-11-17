import * as cheerio from 'cheerio';

async function scheduleScraper(url) {
	const games = [];
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`'not good!' ${response.status}`);
		}

		const htmlContent = await response.text();
		const $ = cheerio.load(htmlContent);
		$('.events .event_row').each((i, element) => {
			const row = $(element);
			const date = row.find('.col_group1 .event_date_desktop').text().trim();
			const time = row.find('.col_group1 .event_time').text().trim();
			const home_team = row
				.find('.col_group2 .event_team:nth-child(2) .event_team_name a')
				.text()
				.trim();
			const home_score = row
				.find('.col_group2 .event_team:nth-child(2) .event_team_score')
				.text()
				.trim();
			const away_team = row
				.find('.col_group2 .event_team:nth-child(1) .event_team_name a')
				.text()
				.trim();
			const away_score = row
				.find('.col_group2 .event_team:nth-child(1) .event_team_score')
				.text()
				.trim();
			const location = row.find('.col_group3 .event_location').text().trim();
			const concat_id = date + time + home_team;
			const game_id = concat_id.replaceAll(' ', '');

			games.push({
				game_id,
				date,
				time,
				home_team,
				home_score,
				away_team,
				away_score,
				location,
			});
		});
	} catch (err) {
		console.log(err);
	}
	return games;
}

export default scheduleScraper;
