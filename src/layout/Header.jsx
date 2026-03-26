import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';

export default function Header({ toggleNav, logo, display }) {
	return (
		<header className="sticky top-0 left-0 z-50 w-full flex items-center justify-between px-4 py-3 md:px-12 md:py-5 bg-[#420a72]">
			{/* Logo + school name */}
			<div className="flex items-center gap-4 md:gap-6">
				<Link to="/">
					<img src={logo} alt="Logo" className="w-12 md:w-20 h-auto" />
				</Link>
				<h1
					className="font-normal text-lg md:text-2xl tracking-widest m-0"
					style={{ fontFamily: "'Anton', sans-serif", color: '#f2bc40' }}
				>
					Concrete Lions Sports
				</h1>
			</div>

			{/* Desktop nav */}
			<nav className="max-sm:hidden flex gap-10 items-center">
				<Link
					to="/schedules"
					style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}
					className="hover:text-[#f2bc40] transition-colors"
				>
					Schedules
				</Link>
				<Link
					to="/sponsors"
					style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}
					className="hover:text-[#f2bc40] transition-colors"
				>
					Sponsors
				</Link>
				<Link
					to="/playersOfTheMonth"
					style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}
					className="hover:text-[#f2bc40] transition-colors"
				>
					Spotlight
				</Link>
				<Link
					to="/contact"
					style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}
					className="hover:text-[#f2bc40] transition-colors"
				>
					Coach Connect
				</Link>
			</nav>

			{/* Mobile toggle */}
			<button
				className="md:hidden bg-transparent border-0 p-1 cursor-pointer text-white"
				onClick={toggleNav}
			>
				{display ? <X size={24} /> : <Menu size={24} />}
			</button>
		</header>
	);
}
