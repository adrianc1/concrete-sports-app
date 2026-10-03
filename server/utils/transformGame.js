const transformGame = (rawGame) => {
	// Find is Concrete is home or away team
	const isConcreteHome = rawGame.home_team === 'Concrete';
	const concreteScore = isConcreteHome
		? rawGame.home_score
		: rawGame.away_score;
	const opponentScore = isConcreteHome
		? rawGame.away_score
		: rawGame.home_score;

	const concreteScoreNum =
		concreteScore && concreteScore.trim() ? parseInt(concreteScore) : null;
	const opponentScoreNum =
		opponentScore && opponentScore.trim() ? parseInt(opponentScore) : null;

	let result = 'TBD';
	if (concreteScoreNum !== null && opponentScoreNum !== null) {
		const outcome =
			concreteScoreNum > opponentScoreNum
				? 'W'
				: concreteScoreNum < opponentScoreNum
				? 'L'
				: 'T';
		result = `${concreteScoreNum} - ${opponentScoreNum} ${outcome}`;
	}

	// The scraped date carries no year ("Fri, Sep 4"), so derive it from the school
	// year the game was scraped under. A school year spans two calendar years:
	// Jul-Dec fall in the first, Jan-Jun in the second. This used to be hardcoded
	// to 2025, which silently stamped the 2026-27 season a year in the past.
	const startYear = parseInt(String(rawGame.schoolYear ?? '').slice(0, 4));
	if (!Number.isInteger(startYear)) {
		throw new Error(
			`transformGame: missing or malformed schoolYear (${rawGame.schoolYear}) for ${rawGame.sport}`,
		);
	}

	let gameDateString = rawGame.date.replace(/,/g, '');
	let gameDateArray = gameDateString.split(' ');
	const gameMonthStr = gameDateArray[1];
	const gameDay = parseInt(gameDateArray[2]);

	const monthIndex = new Date(Date.parse(gameMonthStr + ' 1')).getMonth();

	const sportYear = monthIndex < 6 ? startYear + 1 : startYear;
	const transformedDate = `${gameMonthStr} ${gameDay} ${sportYear}`;

	return {
		date: transformedDate,
		time: rawGame.time,
		opponent: isConcreteHome
			? rawGame.away_team.trim()
			: rawGame.home_team.trim(),
		concrete: 'Concrete',
		opponent_score: opponentScore ? parseInt(opponentScore) : null,
		concrete_score: concreteScore ? parseInt(concreteScore) : null,
		home_away: isConcreteHome ? 'Home' : 'Away',
		result: result,
		location: rawGame.location.trim(),
		sport: rawGame.sport,
		createdAt: new Date(),
		updatedAt: new Date(),
	};
};

export default transformGame;
