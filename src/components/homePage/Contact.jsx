import ScrollToTop from '../../layout/ScrollToTop';
import { Mail } from 'lucide-react';

const coachList = [
	{ team: 'Boys Basketball', coachName: 'Jesse Reed', coachEmail: 'jesseisreed@gmail.com' },
	{ team: 'Girls Basketball', coachName: 'Kevik Rensink', coachEmail: 'Kevik.Rensink@pse.com' },
	{ team: 'Football', coachName: 'Patrick Silmane', coachEmail: 'psilmane@concrete.k12.wa.us' },
	{ team: 'Volleyball', coachName: 'Kevik Rensink', coachEmail: 'Kevik.Rensink@pse.com' },
	{ team: 'Softball', coachName: 'Iris Nevin', coachEmail: 'inevin@concrete.k12.wa.us' },
	{ team: 'Baseball', coachName: 'Elliott Weyand', coachEmail: 'eweyand@concrete.k12.wa.us' },
	{ team: 'Wrestling', coachName: 'Riley Fichter', coachEmail: 'rileyf2410@hotmail.com' },
	{ team: 'Track', coachName: 'Jason Miller', coachEmail: 'jason@concrete-herald.com' },
	{ team: 'Cheer', coachName: 'Tracie Meacham', coachEmail: 'tmeacham@concrete.k12.wa.us' },
	{
		team: 'Athletic Director',
		coachName: 'David Rodriguez',
		coachEmail: 'drodriguez@concrete.k12.wa.us',
	},
];

function Contact() {

	return (
		<div className="w-full flex flex-col items-center px-4" style={{ paddingBottom: '8rem' }}>
			<ScrollToTop />

			<div className="w-full max-w-2xl mt-8">
				{/* Title */}
				<h2
					className="font-black mb-8"
					style={{ fontSize: '2.25rem', fontWeight: 900, letterSpacing: '-0.5px', color: '#420a72', textAlign: 'center', marginTop: '2rem', fontFamily: 'inherit' }}
				>
					Coach Connect
					<span
						className="block rounded-full mt-3"
						style={{ width: 80, height: 3, background: '#f2bc40', margin: '0.75rem auto 2rem' }}
					/>
				</h2>

				{/* Coach rows */}
				<div className="flex flex-col gap-2">
					{coachList.map((coach, index) => (
						<div
							key={index}
							className="flex items-center gap-4 px-4 py-4 rounded transition-colors"
							style={{ borderLeft: '4px solid #420a72', background: '#faf8fd' }}
						>
							<div className="flex flex-col gap-0.5 flex-1 min-w-0">
								<span
									className="font-black uppercase tracking-wide leading-none"
									style={{ fontSize: '0.7rem', color: '#f2bc40' }}
								>
									{coach.team}
								</span>
								<span
									className="font-bold"
									style={{ fontSize: '1rem', color: '#1a0033' }}
								>
									{coach.coachName}
								</span>
							</div>
							<a
								href={`mailto:${coach.coachEmail}`}
								className="flex items-center gap-1.5 shrink-0 transition-opacity hover:opacity-70"
								style={{ textDecoration: 'none', color: '#420a72', fontSize: '0.8rem', fontWeight: 600 }}
							>
								<Mail size={13} />
								<span className="max-md:hidden">{coach.coachEmail}</span>
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Contact;
