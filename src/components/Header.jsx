import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header({ toggleNav, logo }) {
	return (
		<header className="topNavBar">
			<img src={logo} alt="Logo" className="nav-logo" />
			<h1 className="school-name">Concrete Lions Basketball</h1>
			<FontAwesomeIcon
				icon={faBars}
				className="menu-bars nav-icons"
				onClick={toggleNav}
			/>
		</header>
	);
}

export default Header;
