import { Link } from 'react-router';
import { RiContactsLine } from 'react-icons/ri';
import { PiUsers } from 'react-icons/pi';
import { MdOutlineAddBusiness } from 'react-icons/md';
import { GiLion } from 'react-icons/gi';
import { Calendar } from 'lucide-react';
import '../homePage/homePageStyles/bottomNav.css';

const BottomNav = () => {
	return (
		<nav aria-label="Quick links" className="bottom-nav-container">
			<ul className="bottom-nav-list">
				<li className="bottom-nav-list-item">
					<Link to="/schedules" className="nav-link">
						<Calendar aria-hidden="true" />
						<span>Schedules</span>
					</Link>
				</li>
				<li className="bottom-nav-list-item">
					<Link to="/sponsors" className="nav-link">
						<MdOutlineAddBusiness aria-hidden="true" />
						<span>Sponsors</span>
					</Link>
				</li>
				<li className="bottom-nav-list-item">
					<Link to="/contact" className="nav-link">
						<RiContactsLine aria-hidden="true" />
						<span>Coaches</span>
					</Link>
				</li>
				<li className="bottom-nav-list-item">
					<Link to="/playersOfTheMonth" className="nav-link">
						<PiUsers aria-hidden="true" />
						<span>Spotlight</span>
					</Link>
				</li>
				<li className="bottom-nav-list-item">
					<Link to="/boosters" className="nav-link">
						<GiLion aria-hidden="true" />
						<span>Booster</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default BottomNav;
