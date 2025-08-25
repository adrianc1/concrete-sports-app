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

	function normalize(text) {
		return text.toLowerCase().replace(/\s+/g, ' ').trim();
	}

	// Wait for content to load
	await new Promise((resolve) => setTimeout(resolve, 2000));

	// Look for the main container that holds all game events
	const gameElements = await page.$$('.xl\\:flex'); // This was working!

	console.log(`Found ${gameElements.length} game elements`);

	for (const gameElement of gameElements) {
		let game = {};

		game.watchLink = await gameElement
			.$eval('[data-testid*="watch-live"]', (el) => el.href)
			.catch(() => 'n/a');

		// Extract date - looking for the date display elements
		game.dayOfWeek = await gameElement
			.$eval('[data-testid*="day-of-week"]', (el) => el.textContent.trim())
			.catch(() => 'n/a');

		game.date = await gameElement
			.$eval('[data-testid*="month-and-day"]', (el) => el.textContent.trim())
			.catch(() => 'n/a');

		// Extract time
		game.time = await gameElement
			.$eval('[data-testid*="time"]', (el) => el.textContent.trim())
			.catch(() => 'n/a');

		// Extract opponent name from the event name
		game.opponent = await gameElement
			.$eval('[data-testid*="event-name"]', (el) => {
				const text = el.textContent.trim();
				// Remove "vs " or "@ " prefix and any trailing "..."
				return text.replace(/^(vs |@ )/, '').replace(/\.\.\.$/, '');
			})
			.catch(() => 'n/a');

		// Extract home/away status
		game.location = await gameElement
			.$eval('.rounded-full', (el) => el.textContent.trim())
			.catch(() => 'n/a');

		// Extract venue
		game.venue = await gameElement
			.$eval('[data-testid*="venue"]', (el) => el.textContent.trim())
			.catch(() => 'n/a');

		// Extract sport and level
		game.sport = await gameElement
			.$eval('[data-testid*="activity-name"]', (el) => el.textContent.trim())
			.catch(() => 'n/a');

		game.level = await gameElement
			.$eval('[data-testid*="gender-level"]', (el) => el.textContent.trim())
			.catch(() => 'n/a');

		// Look for any score/result information (may not be present for future games)
		game.result = await gameElement
			.$eval('.event-score, [data-testid*="score"]', (el) =>
				el.textContent.trim()
			)
			.catch(() => 'n/a');

		// Only add games that have meaningful data
		if (game.opponent !== 'n/a' && game.date !== 'n/a' && game.time !== 'n/a') {
			games.push(game);
		}
	}

	// Alternative approach if the above doesn't work - look for any container with game data
	if (games.length === 0) {
		console.log('Trying alternative selector approach...');

		const alternativeElements = await page.$$('[data-testid*="event-"]');
		console.log(`Found ${alternativeElements.length} alternative elements`);

		// Group elements by event number
		const eventGroups = {};

		for (const element of alternativeElements) {
			const testId = await element.evaluate((el) =>
				el.getAttribute('data-testid')
			);
			if (testId) {
				const eventMatch = testId.match(/event-(\d+)-/);
				if (eventMatch) {
					const eventNum = eventMatch[1];
					if (!eventGroups[eventNum]) {
						eventGroups[eventNum] = {};
					}

					const content = await element.evaluate((el) => el.textContent.trim());

					if (testId.includes('day-of-week')) {
						eventGroups[eventNum].dayOfWeek = content;
					} else if (testId.includes('month-and-day')) {
						eventGroups[eventNum].date = content;
					} else if (testId.includes('time')) {
						eventGroups[eventNum].time = content;
					} else if (testId.includes('event-name')) {
						eventGroups[eventNum].opponent = content
							.replace(/^(vs |@ )/, '')
							.replace(/\.\.\.$/, '');
					} else if (testId.includes('venue')) {
						eventGroups[eventNum].venue = content;
					} else if (testId.includes('activity-name')) {
						eventGroups[eventNum].sport = content;
					} else if (testId.includes('gender-level')) {
						eventGroups[eventNum].level = content;
					}
				}
			}
		}

		// Convert grouped data to games array
		for (const eventNum in eventGroups) {
			const eventData = eventGroups[eventNum];
			if (eventData.opponent || eventData.date) {
				games.push({
					dayOfWeek: eventData.dayOfWeek || 'n/a',
					date: eventData.date || 'n/a',
					time: eventData.time || 'n/a',
					opponent: eventData.opponent || 'n/a',
					venue: eventData.venue || 'n/a',
					sport: eventData.sport || 'n/a',
					level: eventData.level || 'n/a',
					result: 'n/a',
				});
			}
		}
	}

	await browser.close();

	console.log(`Scraped ${games.length} games before deduplication`);

	// Remove duplicates and empty records
	const uniqueGames = [];
	const seenGames = new Set();

	for (const game of games) {
		// Skip games that are mostly empty
		if (game.opponent === 'n/a' && game.date === 'n/a') {
			continue;
		}

		// Create a unique key for each game
		const gameKey = `${normalize(game.date)}-${normalize(
			game.time
		)}-${normalize(game.opponent)}`;

		// Only add if we haven't seen this game before
		if (!seenGames.has(gameKey)) {
			seenGames.add(gameKey);
			uniqueGames.push(game);
		}
	}

	console.log(`${uniqueGames.length} unique games after deduplication`);

	await fs
		.writeFile(outputFilename, JSON.stringify(uniqueGames, null, 2))
		.then(() =>
			console.log(`✅ Games data successfully saved to ${outputFilename}`)
		)
		.catch((err) => console.error('❌ Error writing file:', err));

	return uniqueGames;
}

// Example usage
const schedulesToScrape = [
	{
		url: 'https://www.concretehslions.com/sports/boys-football/schedule?team=boys-football-5262666&year=2025-2026',
		output: 'footballGames.json',
	},
	{
		url: 'https://www.concretehslions.com/sports/girls-volleyball/schedule?team=girls-volleyball-5262667&year=2025-2026',
		output: 'volleyballSchedule.json',
	},
];

async function scrapeAll() {
	for (const { url, output } of schedulesToScrape) {
		await scrapeGames(url, output);
	}
}

scrapeAll();
