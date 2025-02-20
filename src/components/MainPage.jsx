import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../utils/icons';

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
			<div className="icon-container">
				<a
					href="https://concretehslions.com/teams/3446004/basketball/varsity/schedule"
					target="blank"
				>
					<FontAwesomeIcon icon={icons.schedule} className="icon" />
				</a>
				<p className="icon-title">Schedule</p>
			</div>

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
