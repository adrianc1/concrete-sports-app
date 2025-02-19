import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faBullhorn,
	faGear,
	faBook,
	faShareNodes,
	faGlobe,
	faPhone,
	faEnvelope,
	faClipboardList,
	faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import './App.css';

function TopNavBar() {
	return (
		<div className="topNavBar">
			<FontAwesomeIcon icon={faGear} className="nav-icons" />
			<h1 className="school-name">Concrete High School</h1>
			<FontAwesomeIcon icon={faBars} className="menu-bars nav-icons" />
		</div>
	);
}

function Banner() {
	return (
		<div className="banner">
			<img src="concreteBannerImg.gif" alt="" />
		</div>
	);
}

function MainPage() {
	return (
		<div className="main-page">
			<div className="icon-container">
				<a href="https://www.concrete.k12.wa.us/sports/">
					<FontAwesomeIcon icon={faBook} />
				</a>
				<p className="icon-title">Sports Home</p>
			</div>
			<div className="icon-container">
				<a href="https://www.concrete.k12.wa.us/">
					<FontAwesomeIcon icon={faBullhorn} />
					<p className="icon-title">Announcements</p>
				</a>
			</div>

			<div className="icon-container">
				<a href="https://www.concrete.k12.wa.us/hs-calendar-grid/">
					<FontAwesomeIcon icon={faClipboardList} />
				</a>
				<p className="icon-title">Schedule</p>
			</div>

			<div className="icon-container">
				<a href="https://www.concrete.k12.wa.us/hs-calendar-grid/">
					<FontAwesomeIcon icon={faCalendar} />
				</a>
				<p className="icon-title">Calendar</p>
			</div>

			<div className="icon-container">
				<a href="" className="container">
					<FontAwesomeIcon icon={faShareNodes} />
				</a>
				<p className="icon-title">Standings</p>
			</div>
			<div className="icon-container">
				<a href="" className="container">
					<FontAwesomeIcon icon={faLocationDot} />
				</a>
				<p className="icon-title">Map</p>
			</div>
		</div>
	);
}

function SideNavBar() {}

function Footer() {
	return (
		<div className="footer">
			<a href="tel:+1234567890">
				<FontAwesomeIcon icon={faPhone} />
			</a>
			<a href="mailto:example@example.com">
				<FontAwesomeIcon icon={faEnvelope} />
			</a>
			<a href="https://www.concrete.k12.wa.us/">
				<FontAwesomeIcon icon={faGlobe} />
			</a>
		</div>
	);
}

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<TopNavBar />
			<Banner />
			<MainPage />
			<Footer />
		</>
	);
}

export default App;
