import { Link } from 'react-router';
import { useState } from 'react';
import SideNavBar from '../../layout/SideNavBar';
import logo from '../../assets/Concrete-Logo.png';
import ScrollToTop from '../../layout/ScrollToTop';
import '../homePage/homePageStyles/schedule.css';
import { FaFootballBall, FaVolleyballBall, FaBasketballBall, FaBaseballBall, FaRunning } from 'react-icons/fa';

export default function Schedule() {
	const [showNav, setShowNav] = useState(false);
	return (
		<div className="">
			<ScrollToTop />

			<SideNavBar show={showNav} logo={logo} />
			<ul className="schedule-card">
				<h4>Team Schedules</h4>
				<li>
					<Link to="/footballSchedule"><FaFootballBall /> Football</Link>
				</li>
				<li>
					<Link to="/volleyballSchedule"><FaVolleyballBall /> Volleyball</Link>
				</li>
				<li>
					<Link to="/BOYS-BASKETBALLSchedule"><FaBasketballBall /> Boys Basketball</Link>
				</li>
				<li>
					<Link to="/GIRLS-BASKETBALLSchedule"><FaBasketballBall /> Girls Basketball</Link>
				</li>

				<li>
					<Link to="/baseballSchedule"><FaBaseballBall /> Baseball</Link>
				</li>
				<li>
					<Link to="/softballSchedule"><FaBaseballBall /> Softball</Link>
				</li>

				<li>
					<Link to="/trackSchedule"><FaRunning /> Track</Link>
				</li>
				{/* <li>
					<Link to="/wrestlingSchedule"><FaHandRock /> Wrestling</Link>
				</li> */}
			</ul>
		</div>
	);
}
