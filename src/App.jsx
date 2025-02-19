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
					<FontAwesomeIcon icon={faBook} className="icon" />
				</a>
				<p className="icon-title">Home</p>
			</div>
			<div className="icon-container">
				<a href="https://www.maxpreps.com/news/YP0yn3hwCUKLuv3qXPmbzg/basketball-recap-concrete-comes-up-short.htm">
					<FontAwesomeIcon icon={faBullhorn} className="icon" />
					<p className="icon-title">Announcements</p>
				</a>
			</div>

			<div className="icon-container">
				<a
					href="https://www.maxpreps.com/print/schedule.aspx?schoolid=749e9af8-8e9f-44e6-aca1-cd16a602ccfc&ssid=20ea215d-54ce-4502-8305-748bdc872d49&print=1"
					target="blank"
				>
					<FontAwesomeIcon icon={faClipboardList} className="icon" />
				</a>
				<p className="icon-title">Schedule</p>
			</div>

			<div className="icon-container">
				<a href="https://www.concrete.k12.wa.us/hs-calendar-grid/">
					<FontAwesomeIcon icon={faCalendar} className="icon" />
				</a>
				<p className="icon-title">Calendar</p>
			</div>

			<div className="icon-container">
				<a
					href="https://www.maxpreps.com/wa/concrete/concrete-lions/basketball/standings/"
					className="container"
				>
					<FontAwesomeIcon icon={faShareNodes} className="icon" />
				</a>
				<p className="icon-title">Standings</p>
			</div>
			<div className="icon-container">
				<a href="" className="container">
					<FontAwesomeIcon icon={faLocationDot} className="icon" />
				</a>
				<p className="icon-title">Map</p>
			</div>
		</div>
	);
}

function SideNavBar({ show }) {
	return (
		<div className={show ? 'side-nav active' : 'side-nav'}>
			<img src="Concrete-Logo.png" alt="" className="logo" />
			<ul>
				<li>
					<a href="https://www.concrete.k12.wa.us/sports/">Home</a>
				</li>
				<li>
					<a href="https://www.maxpreps.com/print/schedule.aspx?schoolid=749e9af8-8e9f-44e6-aca1-cd16a602ccfc&ssid=20ea215d-54ce-4502-8305-748bdc872d49&print=1">
						Schedule
					</a>
				</li>
				<li>
					<a href="https://www.concrete.k12.wa.us/hs-calendar-grid/">
						Calendar
					</a>
				</li>
				<li>
					<a href="https://www.maxpreps.com/wa/concrete/concrete-lions/basketball/standings/">
						Standings
					</a>
				</li>
			</ul>
		</div>
	);
}

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
	const [showNav, setShowNav] = useState(false);

	return (
		<>
			<header className="topNavBar">
				<img src="Concrete-Logo.png" alt="" className="nav-logo" />
				<h1 className="school-name">CHS Lions Basketball</h1>
				<FontAwesomeIcon
					icon={faBars}
					className="menu-bars nav-icons"
					onClick={() => setShowNav(!showNav)}
				/>
			</header>
			<SideNavBar show={showNav} />
			<Banner />
			<MainPage />
			<Footer />
		</>
	);
}

export default App;
