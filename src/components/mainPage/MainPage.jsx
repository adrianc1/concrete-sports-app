import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../../utils/icons';
import './mainPage.css';
import { Link } from 'react-router';

function MainPage() {
	return (
		<div className="main-page">
			{/* HOME BUTTON */}
			<div className="icon-container">
				<FontAwesomeIcon icon={icons.home} className="icon" />
				<div className="icon-title">
					<Link to="/SportsHome">Sports Home</Link>
				</div>
			</div>

			{/* ANNOUNCEMENTS */}
			<div className="icon-container">
				<div className="icon-container">
					<FontAwesomeIcon icon={icons.announcements} className="icon" />
					<div className="icon-title">
						<Link to="/Announcements">Announcements</Link>
					</div>
				</div>
			</div>

			{/* SCHEDULE */}
			<div className="icon-container">
				<FontAwesomeIcon icon={icons.schedule} className="icon" />
				<div className="icon-title">
					<Link to="/SchedulePage">Schedule</Link>
				</div>
			</div>

			{/* CALENDAR */}
			<div className="icon-container">
				<div>
					<FontAwesomeIcon icon={icons.calendar} className="icon" />
					<div className="icon-title">
						<Link to="/Calendar">Calendar</Link>
					</div>
				</div>
			</div>

			{/* STANDINGS */}
			<div className="icon-container">
				<div>
					<FontAwesomeIcon icon={icons.standings} className="icon" />
					<div className="icon-title">
						<Link to="/Standings">Standings</Link>
					</div>
				</div>
			</div>

			{/* MAP */}
			<div className="icon-container">
				<div>
					<FontAwesomeIcon icon={icons.image} className="icon" />
					<div className="icon-title">
						<Link to="/Photos">Photos</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainPage;
