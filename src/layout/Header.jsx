import { Link } from 'react-router';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

import './header.css';

export default function Header({ toggleNav, logo, display }) {
	const handleToggle = () => {
		toggleNav();
	};

	return (
		<header className="topNavBar">
			{/* Group logo and school name */}
			<div className="logo-group">
				<Link to="/">
					<img src={logo} alt="Logo" className="nav-logo" />
				</Link>
				<h1 className="school-name">Concrete Lions Sports</h1>
			</div>

			{/* Desktop Links */}
			<nav className="desktop-nav">
				<Link to="/schedules">Schedules</Link>
				<Link to="/updates">Updates</Link>
				<Link to="/sponsors">Sponsors</Link>
				<Link to="/boosters">Booster Club</Link>
				<Link to="/contact">Coach Connect</Link>
			</nav>

			{/* Mobile Hamburger - show when nav is closed */}
			{!display && (
				<GiHamburgerMenu className="menu-bars" onClick={handleToggle} />
			)}

			{/* Mobile Close Icon - show when nav is open */}
			{display && <MdClose className="close-icon" onClick={handleToggle} />}
		</header>
	);
}
