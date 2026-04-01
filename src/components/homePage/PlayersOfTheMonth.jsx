import ScrollToTop from '../../layout/ScrollToTop';
import { Star } from 'lucide-react';

const months = [
	{
		month: 'February',
		players: [
			{ name: 'Stellah Nick', sport: 'Girls Basketball' },
			{ name: 'Zach Richter', sport: 'Boys Basketball' },
		],
	},
	{
		month: 'January',
		current: true,
		players: [
			{ name: 'Brodie Nick', sport: 'Wrestling' },
			{ name: 'Alexa Dalton', sport: 'Girls Basketball' },
			{ name: 'Lincoln Stibbs', sport: 'Boys Basketball' },
		],
	},
	{
		month: 'December',
		players: [
			{ name: "Riley O'Neil", sport: 'Wrestling' },
			{ name: 'Kylie Selin', sport: 'Girls Basketball' },
			{ name: 'Tait Bosa', sport: 'Football' },
		],
	},
	{
		month: 'November',
		players: [
			{ name: 'Maddy Norris', sport: 'Volleyball' },
			{ name: 'Zack Richter', sport: 'Football' },
		],
	},
	{
		month: 'October',
		players: [
			{ name: 'Lily Falconer', sport: 'Volleyball' },
			{ name: 'Alex Olson', sport: 'Football' },
		],
	},
	{
		month: 'September',
		players: [
			{ name: 'Avery Collins', sport: 'Volleyball' },
			{ name: 'Zach Richter', sport: 'Football' },
		],
	},
];

function PlayersOfTheMonth() {
	return (
		<div
			className="w-full flex flex-col items-center px-4"
			style={{ paddingBottom: '8rem' }}
		>
			<ScrollToTop />

			<div className="w-full max-w-2xl mt-8">
				{/* Title */}
				<h2
					className="font-black mb-10"
					style={{
						fontSize: '2.25rem',
						fontWeight: 900,
						letterSpacing: '-0.5px',
						color: '#420a72',
						textAlign: 'center',
						marginTop: '2rem',
						fontFamily: 'inherit',
					}}
				>
					Athlete Spotlight
					<span
						className="block rounded-full mt-3 mb-8"
						style={{
							width: 80,
							height: 3,
							background: '#f2bc40',
							margin: '0.75rem auto 2rem',
						}}
					/>
				</h2>

				<div className="flex flex-col gap-8">
					{months.map(({ month, current, players }) => (
						<div key={month}>
							{/* Month header */}
							<div className="flex items-center gap-3 mb-3">
								<h3
									className="font-black uppercase tracking-wide m-0"
									style={{ fontSize: '1rem', color: '#420a72' }}
								>
									{month}
								</h3>
								{current && (
									<span
										className="inline-flex items-center gap-1 rounded-full font-black uppercase tracking-widest px-3 py-1"
										style={{
											background: '#f2bc40',
											color: '#1a0033',
											fontSize: '0.6rem',
										}}
									>
										<Star size={8} fill="currentColor" />
										Current
									</span>
								)}
								<span
									className="flex-1"
									style={{ height: 1, background: '#f0f0f0' }}
								/>
							</div>

							{/* Player rows */}
							<div className="flex flex-col gap-2">
								{players.map((player, i) => (
									<div
										key={i}
										className="flex items-center justify-between px-4 py-3.5 rounded"
										style={{
											borderLeft: `4px solid ${current ? '#f2bc40' : '#420a72'}`,
											background: current ? '#fffbf0' : '#faf8fd',
										}}
									>
										<span
											className="font-black"
											style={{ fontSize: '1.05rem', color: '#1a0033' }}
										>
											{player.name}
										</span>
										<span
											className="font-bold uppercase tracking-widest"
											style={{
												fontSize: '0.65rem',
												color: '#420a72',
												opacity: 0.6,
											}}
										>
											{player.sport}
										</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default PlayersOfTheMonth;
