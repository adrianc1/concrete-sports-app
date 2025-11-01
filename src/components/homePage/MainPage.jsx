import '../homePage/homePageStyles/mainPage.css';
import { Link } from 'react-router';
import { RiContactsLine } from 'react-icons/ri';
import { RiMegaphoneLine } from 'react-icons/ri';
import { PiUsers } from 'react-icons/pi';
import { MdOutlineAddBusiness } from 'react-icons/md';
import { GiLion } from 'react-icons/gi';
import { Calendar } from 'lucide-react';
import ScrollToTop from '../../layout/ScrollToTop';
import RecentGames from '../../layout/RecentGames.jsx';

function MainPage() {
	return (
		<>
			<RecentGames />

			<div className="main-page">
				<ScrollToTop />

				{/* TEAM SCHEDULES */}

				<Link to="/schedules" className="icon-container">
					<div className="icon">
						<Calendar size={40} />
					</div>
					<div className="icon-title">
						Team <br /> Schedules
					</div>
				</Link>

				{/* SPONSERS */}

				<Link to="/sponsors" className="icon-container">
					<div className="icon">
						<MdOutlineAddBusiness />
					</div>
					<div className="icon-title">
						Sponsors
						<br />
						List
					</div>
				</Link>

				{/* Announcements */}

				<Link to="/updates" className="icon-container">
					<div className="icon">
						<RiMegaphoneLine />
					</div>
					<div className="icon-title">
						Team <br />
						Updates
					</div>
				</Link>

				{/* COACH CONTACT */}
				<Link to="/contact" className="icon-container">
					<div className="icon">
						<RiContactsLine />
					</div>
					<div className="icon-title">
						Coach <br /> Connect
					</div>
				</Link>

				{/* PLAYER OF THE MONTH */}

				<Link to="/playersOfTheMonth" className="icon-container">
					<div className="icon">
						<PiUsers />
					</div>
					<div className="icon-title">
						Players Of <br /> The Month
					</div>
				</Link>

				{/* BOOSTER */}
				<Link to="/boosters" className="icon-container">
					<div className="icon">
						<GiLion />
					</div>
					<div className="icon-title">
						Booster <br /> Club
					</div>
				</Link>
			</div>
		</>
	);
}

export default MainPage;
