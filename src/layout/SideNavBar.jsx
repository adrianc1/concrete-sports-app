import { NavLink } from 'react-router';
import { Sheet, SheetContent } from '../components/ui/sheet';

const navLinks = [
	{ to: '/', label: 'Home', end: true },
	{ to: '/schedules', label: 'Schedules' },
	{ to: '/playersOfTheMonth', label: 'Players Of The Month' },
	{ to: '/sponsors', label: 'Sponsors' },
	{ to: '/boosters', label: 'Booster Club' },
	{ to: '/contact', label: 'Coach Connect' },
];

const scheduleLinks = [
	{ to: '/BOYS-BASKETBALLSchedule', label: 'Boys Basketball' },
	{ to: '/GIRLS-BASKETBALLSchedule', label: 'Girls Basketball' },
	{ to: '/footballSchedule', label: 'Football' },
	{ to: '/baseballSchedule', label: 'Baseball' },
	{ to: '/softballSchedule', label: 'Softball' },
	{ to: '/volleyballSchedule', label: 'Volleyball' },
	{ to: '/trackSchedule', label: 'Track' },
];

const linkStyle = (isActive, alpha) => ({
	textDecoration: 'none',
	display: 'block',
	padding: '0.75rem 1rem',
	borderRadius: '0.25rem',
	color: isActive ? '#f2bc40' : `rgba(255,255,255,${alpha})`,
	background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
});

function SideNavBar({ show, logo, onClose }) {
	return (
		<Sheet open={show} onOpenChange={(open) => !open && onClose()}>
			<SheetContent
				side="left"
				className="flex flex-col gap-0 overflow-y-auto p-0 border-0"
				style={{ background: '#420a72', width: '75%', maxWidth: '320px' }}
			>
				{/* Logo */}
				<div style={{ padding: '2rem 1.5rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
					<img src={logo} alt="Concrete Lions" style={{ width: '3rem' }} />
				</div>

				{/* Main links */}
				<nav style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
					{navLinks.map(({ to, label, end }) => (
						<NavLink
							key={to}
							to={to}
							end={end}
							onClick={onClose}
							style={({ isActive }) => ({
								...linkStyle(isActive, '0.8'),
								fontSize: '0.8rem',
								fontWeight: 700,
								textTransform: 'uppercase',
								letterSpacing: '0.05em',
							})}
						>
							{label}
						</NavLink>
					))}
				</nav>

				{/* Schedule links */}
				<div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
					<span style={{ padding: '0 0.25rem 0.5rem', fontSize: '0.6rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)' }}>
						Team Schedules
					</span>
					{scheduleLinks.map(({ to, label }) => (
						<NavLink
							key={to}
							to={to}
							onClick={onClose}
							style={({ isActive }) => ({
								...linkStyle(isActive, '0.7'),
								fontSize: '0.8rem',
								fontWeight: 600,
							})}
						>
							{label}
						</NavLink>
					))}
				</div>

				{/* Footer */}
				<div style={{ marginTop: 'auto', padding: '1rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
					<span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>
						© 2025 <a href="https://dreauxdigital.com/" style={{ color: 'inherit' }}>Dreaux Digital</a>
					</span>
				</div>
			</SheetContent>
		</Sheet>
	);
}

export default SideNavBar;
