import { useState } from 'react';
import Header from '../../layout/Header';
import logo from '../../assets/Concrete-Logo.png';
import SideNavBar from '../../layout/SideNavBar';
import ScrollToTop from '../../layout/ScrollToTop';
import '../homePage/homePageStyles/updates.css';

function Updates() {
	const [showNav, setShowNav] = useState(false);
	const [showExitIcon, setShowExitIcon] = useState(false);
	return (
		<div>
			<ScrollToTop />

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
				{/* <li>
					<span className="event-info">
						Back to School Night
						<span className="start-date">August 28, 2025</span>
					</span>
					<span className="start-time">4:30pm - 6:00pm</span>
				</li> */}

				{/* <li>
					<span className="event-info">
						Lions Win! 42 - 8
						<span className="start-date">September 13, 2025</span>
					</span>
					<span className="start-time">1:00 PM</span>
				</li> */}

				<li>
					<span className="event-info">
						Volleyball Game at Darrington
						<span className="start-date">September 18, 2025</span>
					</span>
					<span className="start-time">6:30pm</span>
				</li>
			</ul>
		</div>
	);
}

export default Updates;
