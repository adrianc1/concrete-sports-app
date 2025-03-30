import { useState } from 'react';
import Header from '../header/Header';
import logo from '../../assets/Concrete-Logo.png';
import SideNavBar from '../sideNavBar/SideNavBar';
import './contact.css';
function Contact() {
	const [showNav, setShowNav] = useState(false);
	const [showExitIcon, setShowExitIcon] = useState(false);

	const coachList = [
		{
			team: 'Boys Basketball',
			coachName: 'Danny Crosby',
			coachEmail: 'coachdanny@notrealemail.com',
			coachPhone: '360-555-1234',
		},
		{
			team: 'Girls Basketball',
			coachName: 'Head Coach',
			coachEmail: 'girlsbball@notrealemail.com',
			coachPhone: '360-555-0123',
		},
		{
			team: 'Softball',
			coachName: 'Head Coach',
			coachEmail: 'softball@notrealemail.com',
			coachPhone: '360-555-0125',
		},
		{
			team: 'Baseball',
			coachName: 'Head Coach',
			coachEmail: 'baseball@notrealemail.com',
			coachPhone: '360-555-0129',
		},
		{
			team: 'Wrestling',
			coachName: 'Head Coach',
			coachEmail: 'wrestling@notrealemail.com',
			coachPhone: '360-555-0127',
		},
	];
	return (
		<div>
			<Header
				toggleNav={() => setShowNav(!showNav)}
				toggleIcon={() => setShowExitIcon(!showExitIcon)}
				logo={logo}
				display={showExitIcon}
			/>
			<SideNavBar show={showNav} logo={logo} />

			<div className="contact-page">
				<div className="page-title">Coach Connect</div>

				<ul className="coach-list">
					{coachList.map((coach, index) => {
						console.log(coach);
						return (
							<li className="coach-item" key={index}>
								<span className="coach-title"> {coach.team}</span>
								<span className="coach-name">
									Head Coach: {coach.coachName}
								</span>
								<span className="coach-email">Email: {coach.coachEmail}</span>
								<span className="coach-phone">Phone: {coach.coachPhone}</span>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default Contact;
