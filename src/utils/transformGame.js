const transformGame = (rawGame) => {
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

	return {
		date: rawGame.date,
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
