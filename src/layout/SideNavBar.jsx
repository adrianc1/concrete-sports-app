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
					<Link to="/Schedules">Schedules</Link>
				</li>
				<li>
					<Link to="/Updates">Updates</Link>
				</li>
				<li>
					<Link to="/PlayersOfTheMonth">Players Of The Month</Link>
				</li>
				<li>
					<Link to="/Sponsors">Sponsors</Link>
				</li>
				<li>
					<Link to="/Boosters">Booster Club</Link>
				</li>
				<li>
					<Link to="/Contact">Coach Connect</Link>
				</li>
			</ul>
			<ul className="nav-schedule">
				<h4>Team Schedules</h4>
				<li>
					<Link to="/SchedulePage">Boys Basketball</Link>
				</li>
				<li>
					<Link to="/GirlsBballSchedule">Girls Basketball</Link>
				</li>
				<li>
					<Link to="/FootballSchedule">Football</Link>
				</li>
				<li>
					<Link to="/BaseballSchedule">Baseball</Link>
				</li>
				<li>
					<Link to="/SoftballSchedule">Softball</Link>
				</li>
				<li>
					<Link to="/VolleyballSchedule">Volleyball</Link>
				</li>
				<li>
					<Link to="/TrackSchedule">Track</Link>
				</li>
				<li>
					<Link to="/WrestlingSchedule">Wrestling</Link>
				</li>
			</ul>
			<p className="copyright">
				<a href="https://dreauxdigital.com">Dreaux Digital </a> 2025&copy;
			</p>
		</nav>
	);
}

export default SideNavBar;
