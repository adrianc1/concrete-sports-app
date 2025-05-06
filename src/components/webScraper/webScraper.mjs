import puppeteer from 'puppeteer';
import fs from 'fs/promises';

export async function scrapeGames(url, outputFilename = 'games.json') {
	let games = [];
	const browser = await puppeteer.launch({
		headless: false,
		defaultViewport: false,
		ignoreHTTPSErrors: true,
	});
	const page = await browser.newPage();

	const response = await page.goto(url, { waitUntil: 'domcontentloaded' });
	console.log(`Scraping from: ${url}`);
	console.log(response.headers());

	const gameElements = await page.$$('.event-mobile');

	for (const gameElement of gameElements) {
		let game = {};

		game.date = await gameElement
			.$eval('[data-event-date]', (el) => el.getAttribute('data-event-date'))
			.then((text) => text.replace(/\s+/g, ' ').split(', ')[1])
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
		.writeFile(outputFilename, JSON.stringify(games, null, 2))
		.then(() =>
			console.log(`✅ Games data successfully saved to ${outputFilename}`)
		)
		.catch((err) => console.error('❌ Error writing file:', err));
}

// Example usage
const schedulesToScrape = [
	{
		url: 'https://concretehslions.com/teams/4531696/boys/basketball/varsity/schedule',
		output: 'boysBballGames.json',
	},
	{
		url: 'https://concretehslions.com/teams/4531694/boys/football/varsity/schedule',
		output: 'footballGames.json',
	},
	{
		url: 'https://concretehslions.com/teams/4531695/girls/volleyball/varsity/schedule',
		output: 'volleyballGames.json',
	},
	{
		url: 'https://concretehslions.com/teams/4531698/girls/basketball/varsity/schedule',
		output: 'girlsBballGames.json',
	},
	{
		url: 'https://concretehslions.com/teams/4531705/boys/wrestling/varsity/schedule',
		output: 'wrestlingGames.json',
	},
	{
		url: 'https://concretehslions.com/teams/4531700/boys/baseball/varsity/schedule',
		output: 'baseballGames.json',
	},
	{
		url: 'https://concretehslions.com/teams/4531701/girls/fastpitch-softball/varsity/schedule',
		output: 'softballGames.json',
	},
	{
		url: 'https://concretehslions.com/teams/4531703/coed/track-&-field/varsity/schedule',
		output: 'trackGames.json',
	},
	{
		url: 'https://concretehslions.com/teams/4531694/boys/football/varsity/schedule',
		output: 'footballGames.json',
	},
	// Add more as needed
];

async function scrapeAll() {
	for (const { url, output } of schedulesToScrape) {
		await scrapeGames(url, output);
	}
}

scrapeAll();

scrapeGames(
	'https://concretehslions.com/teams/4531700/boys/baseball/varsity/schedule'
);
