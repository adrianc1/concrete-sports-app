const recordKeeper = (games) => {
	let wins = 0;
	let loss = 0;
	let record;
	games.map((game) => {
		if (game.result.includes('W')) {
			wins += 1;
		} else if (game.result.includes('L')) {
			loss += 1;
		}
	});
	record = `${wins} - ${loss}`;
	return record;
};

export default recordKeeper;
