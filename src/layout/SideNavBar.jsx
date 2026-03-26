import { NavLink } from 'react-router';
import './sideNavBar.css';

function SideNavBar({ show, logo }) {
	return (
		<nav className={`side-nav ${show ? 'active' : ''}`}>
			<ul className="nav-list">
				<img src={logo} alt="Logo" className="logo" />
				<li>
					<NavLink to="/" end>Home</NavLink>
				</li>
				<li>
					<NavLink to="/schedules">Schedules</NavLink>
				</li>
				{/* <li>
					<NavLink to="/updates">Updates</NavLink>
				</li> */}
				<li>
					<NavLink to="/playersOfTheMonth">Players Of The Month</NavLink>
				</li>
				<li>
					<NavLink to="/sponsors">Sponsors</NavLink>
				</li>
				<li>
					<NavLink to="/boosters">Booster Club</NavLink>
				</li>
				<li>
					<NavLink to="/contact">Coach Connect</NavLink>
				</li>
			</ul>
			<ul className="nav-schedule">
				<h4>Team Schedules</h4>
				<li>
					<NavLink to="/BOYS-BASKETBALLSchedule">Boys Basketball</NavLink>
				</li>
				<li>
					<NavLink to="/GIRLS-BASKETBALLSchedule">Girls Basketball</NavLink>
				</li>
				<li>
					<NavLink to="/footballSchedule">Football</NavLink>
				</li>
				<li>
					<NavLink to="/baseballSchedule">Baseball</NavLink>
				</li>
				<li>
					<NavLink to="/softballSchedule">Softball</NavLink>
				</li>
				<li>
					<NavLink to="/volleyballSchedule">Volleyball</NavLink>
				</li>
				<li>
					<NavLink to="/trackSchedule">Track</NavLink>
				</li>
				{/* <li>
					<NavLink to="/wrestlingSchedule">Wrestling</NavLink>
				</li> */}
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
