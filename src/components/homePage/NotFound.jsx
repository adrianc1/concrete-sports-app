import { Link } from 'react-router';
import logo from '../../assets/Concrete-Logo.png';

export default function NotFound() {
	return (
		<div className="w-full flex flex-col items-center justify-center px-4" style={{ minHeight: '60vh' }}>
			<img src={logo} alt="Concrete Lions" style={{ width: '4rem', marginBottom: '1.5rem', opacity: 0.4 }} />
			<h2 className="font-black" style={{ fontSize: '2.25rem', color: '#420a72', textAlign: 'center', marginBottom: '0.5rem' }}>
				Page Not Found
			</h2>
			<p style={{ color: '#9ca3af', fontSize: '0.95rem', textAlign: 'center', marginBottom: '2rem' }}>
				That page doesn't exist.
			</p>
			<Link
				to="/"
				style={{
					background: '#420a72',
					color: '#fff',
					fontWeight: 900,
					fontSize: '0.8rem',
					textTransform: 'uppercase',
					letterSpacing: '0.08em',
					padding: '0.6rem 1.5rem',
					borderRadius: '4px',
					textDecoration: 'none',
				}}
			>
				Go Home
			</Link>
		</div>
	);
}
