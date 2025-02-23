import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';
import './header.css';

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

			<h1 className="school-name">Concrete Lions Basketball</h1>
			<FontAwesomeIcon
				icon={faBars}
				className={
					display ? 'menu-bars nav-icons hidden' : 'menu-bars nav-icons active'
				}
				onClick={handleBothToggles}
			/>

			<FontAwesomeIcon
				icon={faX}
				className={display ? 'nav-icons active' : 'side-nav hidden'}
				onClick={handleBothToggles}
			/>
		</header>
	);
}

export default Header;
