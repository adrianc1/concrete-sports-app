import { Link } from 'react-router';
import { RiContactsLine } from 'react-icons/ri';
import { RiMegaphoneLine } from 'react-icons/ri';
import { PiUsers } from 'react-icons/pi';
import { MdOutlineAddBusiness } from 'react-icons/md';
import { GiLion } from 'react-icons/gi';
import { Calendar } from 'lucide-react';
import '../homePage/homePageStyles/bottomNav.css';

const BottomNav = () => {
	return (
		<div className="bottom-nav-container">
			<ul className="bottom-nav-list">
				<li className="bottom-nav-list-item">
					<Link to="/schedules" className="nav-link">
						<Calendar />
						<span>Schedules</span>
					</Link>
				</li>
				<li className="bottom-nav-list-item">
					<Link to="/sponsors" className="nav-link">
						<MdOutlineAddBusiness />
						<span>Sponsors</span>
					</Link>
				</li>
				<li className="bottom-nav-list-item">
					<Link to="/contact" className="nav-link">
						<RiContactsLine />
						<span>Coaches</span>
					</Link>
				</li>
				<li className="bottom-nav-list-item">
					<Link to="/playersOfTheMonth" className="nav-link">
						<PiUsers />
						<span>Spotlight</span>
					</Link>
				</li>
				<li className="bottom-nav-list-item">
					<Link to="/boosters" className="nav-link">
						<GiLion />
						<span>Booster</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default BottomNav;
