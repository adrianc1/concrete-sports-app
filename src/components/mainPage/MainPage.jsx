import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../../utils/icons';
import './mainPage.css';
import { Link } from 'react-router';
import { GoCalendar } from 'react-icons/go';
import { PiMegaphoneLight } from 'react-icons/pi';
import { TfiClipboard } from 'react-icons/tfi';
import { HiOutlineTrophy } from 'react-icons/hi2';
import { TbPhotoSensor2 } from 'react-icons/tb';
import { MdOutlineAddBusiness } from 'react-icons/md';

function MainPage() {
	return (
		<div className="main-page">
			{/* BOOSTER */}
			<div className="icon-container">
				<div className="icon-container">
					<PiMegaphoneLight />
					<div className="icon-title">
						<Link to="/Boosters">CHS Booster</Link>
					</div>
				</div>
			</div>

			{/* SPONSERS */}
			<div className="icon-container">
				<MdOutlineAddBusiness value={{ color: 'blue' }} />

				<div className="icon-title">
					<Link to="/SportsHome">Sponsers</Link>
				</div>
			</div>

			{/* SCHEDULE */}
			<div className="icon-container">
				<TfiClipboard />
				<div className="icon-title">
					<Link to="/SchedulePage">Schedule</Link>
				</div>
			</div>

			{/* CALENDAR */}
			<div className="icon-container">
				<div>
					<GoCalendar />
					<div className="icon-title">
						<Link to="/Calendar">Calendar</Link>
					</div>
				</div>
			</div>

			{/* STANDINGS */}
			<div className="icon-container">
				<div>
					<HiOutlineTrophy />
					<div className="icon-title">
						<Link to="/Standings">Standings</Link>
					</div>
				</div>
			</div>

			{/* MAP */}
			<div className="icon-container">
				<div>
					<TbPhotoSensor2 />
					<div className="icon-title">
						<Link to="/Photos">Photos</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainPage;
