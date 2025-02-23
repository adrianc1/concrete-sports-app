import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../../utils/icons';
import './mainPage.css';
import { Link } from 'react-router';

function MainPage() {
	return (
		<div className="main-page">
			{/* HOME BUTTON */}
			<div className="icon-container">
				<a href="https://www.concrete.k12.wa.us/sports/">
					<FontAwesomeIcon icon={icons.home} className="icon" />
				</a>
				<p className="icon-title">Home</p>
			</div>

			{/* ANNOUNCEMENTS */}
			<div className="icon-container">
				<a href="https://www.maxpreps.com/news/YP0yn3hwCUKLuv3qXPmbzg/basketball-recap-concrete-comes-up-short.htm">
					<FontAwesomeIcon icon={icons.announcements} className="icon" />
					<p className="icon-title">Announcements</p>
				</a>
			</div>

			{/* SCHEDULE */}
			<ul className="icon-container">
				<FontAwesomeIcon icon={icons.schedule} className="icon" />

				<li className="icon-title">
					<Link to="/SchedulePage">Schedule</Link>
				</li>
			</ul>

			{/* CALENDAR */}
			<div className="icon-container">
				<a href="https://www.concrete.k12.wa.us/hs-calendar-grid/">
					<FontAwesomeIcon icon={icons.calendar} className="icon" />
				</a>
				<p className="icon-title">Calendar</p>
			</div>

			{/* STANDINGS */}
			<div className="icon-container">
				<a
					href="https://www.maxpreps.com/wa/concrete/concrete-lions/basketball/standings/"
					className="container"
				>
					<FontAwesomeIcon icon={icons.standings} className="icon" />
				</a>
				<p className="icon-title">Standings</p>
			</div>

			{/* MAP */}
			<div className="icon-container">
				<a href="" className="container">
					<FontAwesomeIcon icon={icons.map} className="icon" />
				</a>
				<p className="icon-title">Map</p>
			</div>
		</div>
	);
}

export default MainPage;
