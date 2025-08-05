import { Link } from 'react-router';
import { useState } from 'react';
import Header from '../../layout/Header';
import SideNavBar from '../../layout/SideNavBar';
import logo from '../../assets/Concrete-Logo.png';

import '../homePage/homePageStyles/schedule.css';

export default function Schedule({ show }) {
	const [showNav, setShowNav] = useState(false);
	const [showExitIcon, setShowExitIcon] = useState(false);
	return (
		<div className="">
			<Header
				toggleNav={() => setShowNav(!showNav)}
				toggleIcon={() => setShowExitIcon(!showExitIcon)}
				logo={logo}
				display={showExitIcon}
			/>
			<SideNavBar show={showNav} logo={logo} />
			<ul className="schedule-card">
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
				<a href="https://dreauxdigital.com">Dreaux Digital</a> 2025&copy;
			</p>
		</div>
	);
}
