import { Link } from 'react-router';
import { ArrowRight, Star } from 'lucide-react';
import spotlightBanner from '../../assets/spotlight-banner.webp';

// Most recent athletes — update each month
const featuredAthletes = [
	{ name: 'Brodie Nick', sport: 'Wrestling' },
	{ name: 'Alexa Dalton', sport: 'Girls Basketball' },
	{ name: 'Lincoln Stibbs', sport: 'Boys Basketball' },
];

const month = 'January';

export default function SpotlightBanner() {
	return (
		<div
			className="relative w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] mx-auto my-6 rounded-2xl overflow-hidden"
			style={{ minHeight: '420px' }}
		>
			{/* Background image */}
			<img
				src={spotlightBanner}
				alt="Lions banner"
				className="absolute inset-0 w-full h-full object-cover object-center"
			/>

			{/* Dark purple overlay */}
			<div
				className="absolute inset-0"
				style={{
					background:
						'linear-gradient(120deg, rgba(26,0,51,0.92) 20%, rgba(66,10,114,0.75) 100%)',
				}}
			/>

			{/* Content */}
			<div
				className="relative z-10 flex flex-col justify-between h-full gap-4"
				style={{
					minHeight: '420px',
					padding:
						'clamp(1.5rem, 4vw, 3rem) clamp(1.5rem, 4vw, 3rem) clamp(1.5rem, 4vw, 3rem) clamp(2rem, 6vw, 5rem)',
				}}
			>
				{/* Badge */}
				<div className="flex items-center gap-1.5 bg-[#f2bc40] text-[#1a0033] text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full w-fit">
					<Star size={10} fill="currentColor" />
					Athlete Spotlight
				</div>

				{/* Headline */}
				<div className="flex flex-col gap-2">
					<h2
						className="text-white font-black uppercase leading-none m-0"
						style={{
							fontFamily: "'Anton', sans-serif",
							fontSize: 'clamp(1.8rem, 6vw, 3.5rem)',
							letterSpacing: '-0.5px',
						}}
					>
						{month} Athletes of the Month
					</h2>
					<p
						className="text-white/60 m-0"
						style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1.1rem)' }}
					>
						{featuredAthletes.map((a) => a.name).join(' · ')}
					</p>
				</div>

				{/* CTA */}
				<Link
					to="/playersOfTheMonth"
					className="inline-flex items-center gap-2 bg-[#f2bc40] text-[#420a72] font-black uppercase tracking-widest px-12 py-3 rounded w-fit hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-black/30"
					style={{
						textDecoration: 'none',
						color: '#420a72',
						padding: '0 12px',
						fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
					}}
				>
					View Spotlight
					<ArrowRight size={16} strokeWidth={2.5} />
				</Link>
			</div>
		</div>
	);
}
