import puppeteer from 'puppeteer';

(async () => {
	let gameObject = {};
	const browser = await puppeteer.launch({
		headless: true,
		defaultViewport: false,
		ignoreHTTPSErrors: true,
	});
	const page = await browser.newPage();
	await page.goto(
		'http://concretehslions.com/teams/3446004/basketball/varsity/schedule'
	);

	const opponentNodes = await page.$$('.opponent');
	for (const opponent of opponentNodes) {
		await page.waitForTimeout(10000);
		const opponentName = await page.evaluate((el) => {
			const link = el.querySelector('.opponent > a');
			return link ? link.textContent.trim() : null;
		}, opponent);

		gameObject.opponentName
			? gameObject.opponentName.push(opponentName)
			: (gameObject.opponentName = []);

		console.log(gameObject);
	}
})();
