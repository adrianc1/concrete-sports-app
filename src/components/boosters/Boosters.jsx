import { useState } from 'react';
import Header from '../header/Header';
import SideNavBar from '../sideNavBar/SideNavBar';
import logo from '../../assets/Concrete-Logo.png';
import './boosters.css';

function Boosters() {
	const [showNav, setShowNav] = useState(false);
	const [showExitIcon, setShowExitIcon] = useState(false);
	return (
		<div>
			<div className="nav">
				<Header
					toggleNav={() => setShowNav(!showNav)}
					toggleIcon={() => setShowExitIcon(!showExitIcon)}
					logo={logo}
					display={showExitIcon}
				/>
				<SideNavBar show={showNav} logo={logo} />
			</div>

			<div className="boosters-main">
				<h1 className="boosters-title">Join the Booster Club Today!</h1>

				<h4 className="booster-sub-title">
					Concrete Lions Booster Club Membership is $10 per person
				</h4>

				<ul className="booster-club-perks">
					<li>
						You can attend meetings every second wednesday of each month at
						7:30PM in the high school cafeteria.
					</li>
					<li>HELP ON FUNDRAISING COMMITTEES.</li>
					<li>
						VOTE ON ATHLETE OF THE MONTH AND OTHER DECISIONS BEING MADE BY
						BOOSTER CLUB.
					</li>
					<li>NOMINATE STUDENT-ATHLETES FOR ATHLETE OF THE YEAR.</li>
					<li>VOTE ON STUDENT-ATHLETES FOR ATHLETE OF THE YEAR.</li>
					<li>HELP WITH PROJECTS. </li>
					<li>HELP RAISE MONEY FOR SCHOLARSHIPS!! </li>
					<li>
						HELP WITH CONSTRUCTION AND PLANNING OF NEW FIELDS AND FACILITIES
						(I.E. RECENTLY NEW TRACK).
					</li>
				</ul>
				<div className="button-container">
					<button>JOIN THE CLUB!</button>
					<button>DONATE TODAY</button>
				</div>
			</div>
		</div>
	);
}

export default Boosters;
