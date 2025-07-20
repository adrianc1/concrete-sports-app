import { useState } from 'react';
import Header from '../header/Header';
import logo from '../../assets/Concrete-Logo.png';
import SideNavBar from '../sideNavBar/SideNavBar';
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
					Football Season Begins ---{' '}
					<span className="start-date">09/11/25</span>
				</li>
				<li>
					Girls Volleyball Season Begins ---
					<span className="start-date">09/18/25</span>
				</li>
				<li>
					Boys Basketball Season Begins ---{' '}
					<span className="start-date">11/10/25</span>
				</li>
				<li>
					Girls Basketball Season Begins ---
					<span className="start-date">11/10/25</span>
				</li>
				<li>
					Wrestling Season Begins ---
					<span className="start-date">11/22/25</span>
				</li>
				<li>
					Baseball Season Begins ---{' '}
					<span className="start-date">03/25/26</span>
				</li>
				<li>
					Softball Season Begins ---
					<span className="start-date">03/24/26</span>
				</li>
				<li>
					Track Season Begins ---
					<span className="start-date">02/22/26</span>
				</li>
			</ul>
		</div>
	);
}

export default Updates;
