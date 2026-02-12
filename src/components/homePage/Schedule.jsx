import { Link } from 'react-router';
import { useState } from 'react';
import SideNavBar from '../../layout/SideNavBar';
import logo from '../../assets/Concrete-Logo.png';
import ScrollToTop from '../../layout/ScrollToTop';
import '../homePage/homePageStyles/schedule.css';

export default function Schedule() {
	const [showNav, setShowNav] = useState(false);
	return (
		<div className="">
			<ScrollToTop />

			<SideNavBar show={showNav} logo={logo} />
			<ul className="schedule-card">
				<h4>Team Schedules</h4>
				<li>
					<Link to="/footballSchedule">🏈 Football</Link>
				</li>
				<li>
					<Link to="/volleyballSchedule">🏐 Volleyball</Link>
				</li>
				<li>
					<Link to="/BOYS-BASKETBALLSchedule">🏀 Boys Basketball</Link>
				</li>
				<li>
					<Link to="/GIRLS-BASKETBALLSchedule">🏀 Girls Basketball</Link>
				</li>

				<li>
					<Link to="/baseballSchedule">⚾ Baseball</Link>
				</li>
				<li>
					<Link to="/softballSchedule">🥎 Softball</Link>
				</li>

				<li>
					<Link to="/trackSchedule">🏃 Track</Link>
				</li>
				{/* <li>
					<Link to="/wrestlingSchedule">🤼 Wrestling</Link>
				</li> */}
			</ul>
		</div>
	);
}
