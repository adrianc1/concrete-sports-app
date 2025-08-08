import '../homePage/homePageStyles/mainPage.css';
import { Link } from 'react-router';
import { RiContactsLine } from 'react-icons/ri';
import { RiMegaphoneLine } from 'react-icons/ri';
import { IoSchoolOutline } from 'react-icons/io5';
import { PiUsers } from 'react-icons/pi';
import { MdOutlineAddBusiness } from 'react-icons/md';
import { GiLion } from 'react-icons/gi';
import { Calendar } from 'lucide-react';

function MainPage() {
	return (
		<div className="main-page">
			{/* BOOSTER */}
			<Link to="/Boosters" className="icon-container">
				<div className="icon">
					<GiLion />
				</div>
				<div className="icon-title">
					Booster <br /> Club
				</div>
			</Link>

			{/* SPONSERS */}

			<Link to="/Sponsors" className="icon-container">
				<div className="icon">
					<MdOutlineAddBusiness />
				</div>
				<div className="icon-title">
					Sponsors
					<br />
					List
				</div>
			</Link>

			{/* COACH CONTACT */}

			<Link to="/Contact" className="icon-container">
				<div className="icon">
					<RiContactsLine />
				</div>
				<div className="icon-title">
					Coach <br /> Connect
				</div>
			</Link>
			{/* TEAM SCHEDULES */}

			<Link to="/Schedules" className="icon-container">
				<div className="icon">
					<Calendar size={40} />
				</div>
				<div className="icon-title">
					Team <br /> Schedules
				</div>
			</Link>

			{/* PLAYER OF THE MONTH */}

			<Link to="/PlayersOfTheMonth" className="icon-container">
				<div className="icon">
					<PiUsers />
				</div>
				<div className="icon-title">
					Players Of <br /> The Month
				</div>
			</Link>

			{/* Announcements */}

			<Link to="/Updates" className="icon-container">
				<div className="icon">
					<RiMegaphoneLine />
				</div>
				<div className="icon-title">
					Team <br />
					Updates
				</div>
			</Link>
		</div>
	);
}

export default MainPage;
