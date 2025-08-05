import { useState } from 'react';
import Header from '../../layout/Header';
import logo from '../../assets/Concrete-Logo.png';
import SideNavBar from '../../layout/SideNavBar';
import '../homePage/homePageStyles/updates.css';

function Updates() {
	const [showNav, setShowNav] = useState(false);
	const [showExitIcon, setShowExitIcon] = useState(false);
	return (
		<div>
			<Header
				toggleNav={() => setShowNav(!showNav)}
				toggleIcon={() => setShowExitIcon(!showExitIcon)}
				logo={logo}
				display={showExitIcon}
			/>
			<SideNavBar show={showNav} logo={logo} />
			<div className="announcements-container">
				<h2 className="annoucenment-title">Team Updates</h2>
			</div>
			<ul className="team-updates-list">
				<li>
					<span className="event-info">
						Back to School Night
						<span className="start-date">August 28, 2025</span>
					</span>
					<span className="start-time">4:30pm - 6:00pm</span>
				</li>

				<li>
					<span className="event-info">
						Football Season Begins
						<span className="start-date">September 5, 2025</span>
					</span>
					<span className="start-time">7:00pm</span>
				</li>

				<li>
					<span className="event-info">
						Girls Volleyball Season Begins
						<span className="start-date">September 8, 2025</span>
					</span>
					<span className="start-time">4:00pm</span>
				</li>
			</ul>
		</div>
	);
}

export default Updates;
