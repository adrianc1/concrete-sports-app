import { Link } from 'react-router';
import './sideNavBar.css';

function SideNavBar({ show, logo }) {
	return (
		<nav className={`side-nav ${show ? 'active' : ''}`}>
			<ul className="nav-list">
				<img src={logo} alt="Logo" className="logo" />
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/SchedulePage">CHS Boosters</Link>
				</li>
				<li>
					<Link to="/Calendar">Schedule</Link>
				</li>
				<li>
					<Link to="/Standings">Standings</Link>
				</li>
				<li>
					<a href="#">Contact Us</a>
				</li>
			</ul>
		</nav>
	);
}

export default SideNavBar;
