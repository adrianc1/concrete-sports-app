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

			<SideNavBar show={showNav} logo={logo} />
			<div className="announcements-container">
				<h2 className="annoucenment-title">Team Updates</h2>
			</div>
			<ul className="team-updates-list">
				<li>
					<span className="event-info">
						🏀 Boys and Girls Basketball Season Begins
						<span className="start-date">December 5, 2025</span>
					</span>
					<span className="start-time">4:30 PM</span>
				</li>
			</ul>
		</div>
	);
}

export default Updates;
