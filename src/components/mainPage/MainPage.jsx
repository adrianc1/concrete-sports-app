import './mainPage.css';
import { Link } from 'react-router';
import { RiContactsLine } from 'react-icons/ri';
import { RiMegaphoneLine } from 'react-icons/ri';
import { IoSchoolOutline } from 'react-icons/io5';
import { MdLiveTv } from 'react-icons/md';
import { TbPhotoSensor2 } from 'react-icons/tb';
import { MdOutlineAddBusiness } from 'react-icons/md';

function MainPage() {
	return (
		<div className="main-page">
			{/* BOOSTER */}
			<Link to="/Boosters" className="icon-container">
				<div className="icon">
					<RiMegaphoneLine />
				</div>
				<div className="icon-title">
					CHS <br /> Booster
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

			{/* SCHOOL DISTRICT */}

			<Link to="/SchoolDistrict" className="icon-container">
				<div className="icon">
					<IoSchoolOutline />
				</div>
				<div className="icon-title">
					School <br /> District
				</div>
			</Link>

			{/* PLAYER OF THE MONTH */}

			<Link to="/LiveStream" className="icon-container">
				<div className="icon">
					<MdLiveTv />
				</div>
				<div className="icon-title">
					Watch <br /> Live
				</div>
			</Link>

			{/* Photos */}

			<Link to="/Photos" className="icon-container">
				<div className="icon">
					<TbPhotoSensor2 />
				</div>
				<div className="icon-title">Photos</div>
			</Link>
		</div>
	);
}

export default MainPage;
