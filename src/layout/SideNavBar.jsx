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
					<Link to="/schedules">Schedules</Link>
				</li>
				<li>
					<Link to="/updates">Updates</Link>
				</li>
				<li>
					<Link to="/playersOfTheMonth">Players Of The Month</Link>
				</li>
				<li>
					<Link to="/sponsors">Sponsors</Link>
				</li>
				<li>
					<Link to="/boosters">Booster Club</Link>
				</li>
				<li>
					<Link to="/contact">Coach Connect</Link>
				</li>
			</ul>
			<ul className="nav-schedule">
				<h4>Team Schedules</h4>
				<li>
					<Link to="/BOYS-BASKETBALLSchedule">Boys Basketball</Link>
				</li>
				<li>
					<Link to="/GIRLS-BASKETBALLSchedule">Girls Basketball</Link>
				</li>
				<li>
					<Link to="/footballSchedule">Football</Link>
				</li>
				<li>
					<Link to="/baseballSchedule">Baseball</Link>
				</li>
				<li>
					<Link to="/softballSchedule">Softball</Link>
				</li>
				<li>
					<Link to="/volleyballSchedule">Volleyball</Link>
				</li>
				<li>
					<Link to="/trackSchedule">Track</Link>
				</li>
				<li>
					<Link to="/wrestlingSchedule">Wrestling</Link>
				</li>
			</ul>
			<div className="copyright">
				<div className="top">
					<span>
						© 2025 <a href="https://dreauxdigital.com/">Dreaux Digital</a>.
					</span>
				</div>
			</div>
		</nav>
	);
}

export default SideNavBar;
