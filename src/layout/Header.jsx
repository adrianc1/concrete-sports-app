import { Link } from 'react-router';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

import './header.css';
import { Download } from 'lucide-react';

function Header({ toggleNav, logo, toggleIcon, display }) {
	const handleBothToggles = () => {
		toggleNav();
		toggleIcon();
	};

	return (
		<header className="topNavBar">
			<Link to="/">
				<img src={logo} alt="Logo" className="nav-logo" />
			</Link>

			<h1 className="school-name">Concrete Lions Sports</h1>
			<GiHamburgerMenu
				className={
					display ? 'menu-bars nav-icons hidden' : 'menu-bars nav-icons active'
				}
				onClick={handleBothToggles}
			/>

			<MdClose
				className={display ? 'nav-icons active' : 'side-nav hidden'}
				onClick={handleBothToggles}
			/>
		</header>
	);
}

export default Header;
