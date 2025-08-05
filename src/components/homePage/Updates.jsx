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
						<span className="start-date">09/11/25</span>
					</span>
				</li>

				<li>
					<span className="event-info">
						Girls Volleyball Season Begins
						<span className="start-date">09/18/25</span>
					</span>
				</li>

				<li>
					<span className="event-info">
						Boys Basketball Season Begins
						<span className="start-date">11/10/25</span>
					</span>
				</li>

				<li>
					<span className="event-info">
						Girls Basketball Season Begins
						<span className="start-date">11/10/25</span>
					</span>
				</li>

				<li>
					<span className="event-info">
						Wrestling Season Begins
						<span className="start-date">11/22/25</span>
					</span>
				</li>

				<li>
					<span className="event-info">
						Baseball Season Begins
						<span className="start-date">03/25/26</span>
					</span>
				</li>

				<li>
					<span className="event-info">
						Softball Season Begins
						<span className="start-date">03/24/26</span>
					</span>
				</li>

				<li>
					<span className="event-info">
						Track Season Begins
						<span className="start-date">02/22/26</span>
					</span>
				</li>
			</ul>
		</div>
	);
}

export default Updates;
