import './mainPage.css';
import { Link } from 'react-router';
import { RiContactsLine } from 'react-icons/ri';
import { PiMegaphoneLight } from 'react-icons/pi';
import { IoSchoolOutline } from 'react-icons/io5';
import { MdLiveTv } from 'react-icons/md';
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
					<Link to="/Sponsors">Sponsors</Link>
				</div>
			</div>

			{/* COACH CONTACT */}
			<div className="icon-container">
				<div>
					<RiContactsLine />
					<div className="icon-title">
						<Link to="/Contact">Coach Contact</Link>
					</div>
				</div>
			</div>

			{/* SCHOOL DISTRICT */}
			<div className="icon-container">
				<IoSchoolOutline />
				<div className="icon-title">
					<Link to="/SchoolDistrict">School District</Link>
				</div>
			</div>

			{/* LIVE STREAM */}
			<div className="icon-container">
				<div>
					<MdLiveTv />
					<div className="icon-title">
						<Link to="/LiveStream">Watch Live</Link>
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
