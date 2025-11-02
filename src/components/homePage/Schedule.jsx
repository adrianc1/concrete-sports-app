import { Link } from 'react-router';
import { useState } from 'react';
import Header from '../../layout/Header';
import SideNavBar from '../../layout/SideNavBar';
import logo from '../../assets/Concrete-Logo.png';
import ScrollToTop from '../../layout/ScrollToTop';
import '../homePage/homePageStyles/schedule.css';

export default function Schedule() {
	const [showNav, setShowNav] = useState(false);
	const [showExitIcon, setShowExitIcon] = useState(false);
	const sportEmojis = {
		VOLLEYBALL: '🏐',
		FOOTBALL: '🏈',
		BASKETBALL: '🏀',
		SOCCER: '⚽',
		BASEBALL: '⚾',
		SOFTBALL: '🥎',
		TRACK: '🏃',
		WRESTLING: '🤼',
	};
	return (
		<div className="">
			<ScrollToTop />

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
					<Link to="/footballSchedule">🏈 Football</Link>
				</li>
				<li>
					<Link to="/volleyballSchedule">🏐 Volleyball</Link>
				</li>
				<li>
					<Link to="/schedulePage">🏀 Boys Basketball</Link>
				</li>
				<li>
					<Link to="/girlsBballSchedule">🏀 Girls Basketball</Link>
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
				<li>
					<Link to="/wrestlingSchedule">🤼 Wrestling</Link>
				</li>
			</ul>
			<p className="copyright">
				<a href="https://dreauxdigital.com">Dreaux Digital</a> 2025&copy;
			</p>
		</div>
	);
}
