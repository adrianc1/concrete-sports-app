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
					<a href="#" className="nav-link">
						<Calendar />
						<span>Schedules</span>
					</a>
				</li>
				<li className="bottom-nav-list-item">
					<a href="#" className="nav-link">
						<MdOutlineAddBusiness />
						<span>Sponsors</span>
					</a>
				</li>
				<li className="bottom-nav-list-item">
					<a href="#" className="nav-link">
						<RiContactsLine />
						<span>Coaches</span>
					</a>
				</li>
				<li className="bottom-nav-list-item">
					<a href="#" className="nav-link">
						<PiUsers />
						<span>Spotlight</span>
					</a>
				</li>
				<li className="bottom-nav-list-item">
					<a href="#" className="nav-link">
						<GiLion />
						<span>Booster</span>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default BottomNav;
