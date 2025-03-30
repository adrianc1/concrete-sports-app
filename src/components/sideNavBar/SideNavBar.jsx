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
					<Link to="/Boosters">CHS Booster</Link>
				</li>
				<li>
					<Link to="/Sponsors">Sponsors</Link>
				</li>
				<li>
					<Link to="/Contact">Coach Connect</Link>
				</li>
				<li>
					<Link to="/SchoolDistrict">School District</Link>
				</li>
			</ul>
			<ul className="nav-schedule">
				<h4>Schedules</h4>
				<li>
					<Link to="/SchedulePage">Boys Basketball</Link>
				</li>
				<li>
					<a href="#">Girls Basketball</a>
				</li>
				<li>
					<a href="#">Football</a>
				</li>
				<li>
					<a href="#">Softball</a>
				</li>
				<li>
					<a href="#">Baseball</a>
				</li>
				<li>
					<a href="#">Wrestling</a>
				</li>
				<p className="copyright">Adrian Crosby 2025&copy;</p>
			</ul>
		</nav>
	);
}

export default SideNavBar;
