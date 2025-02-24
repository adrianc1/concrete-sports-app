import puppeteer from 'puppeteer';
import fs from 'fs/promises';

export async function scrapeGames() {
	let games = [];
	const browser = await puppeteer.launch({
		headless: false,
		defaultViewport: false,
		ignoreHTTPSErrors: true,
	});
	const page = await browser.newPage();

	const response = await page.goto(
		'http://concretehslions.com/teams/3446004/basketball/varsity/schedule',
		{ waitUntil: 'domcontentloaded' }
	);
	console.log(response.headers());

	// update this to be GAMES!
	const gameElements = await page.$$('.event-mobile');

	for (const gameElement of gameElements) {
		let game = {};

		game.date = await gameElement
			.$eval('[data-event-date]', (el) => el.getAttribute('data-event-date'))
			.then((text) => text.replace(/\s+/g, ' ').split(', ')[1]) // Extracts the month and day
			.catch(() => 'n/a');

		game.opponent = await gameElement
			.$eval('.opponent > a', (el) => el.innerText.trim())
			.catch(async () => {
				return await gameElement
					.$eval('.opponent', (el) => el.innerText.trim())
					.catch(() => 'n/a');
			});

		game.location = await gameElement
			.$eval('.home-away', (el) => el.innerText.trim())
			.catch(() => 'n/a');

		game.result = await gameElement
			.$eval('.event-score', (el) => el.innerText.trim())
			.catch(() => 'n/a');

		games.push(game);
	}
	await browser.close();

	await fs
		.writeFile('games.json', JSON.stringify(games, null, 2))
		.then(() => console.log('✅ Games data successfully saved to games.json'))
		.catch((err) => console.error('❌ Error writing file:', err));
}
scrapeGames();
