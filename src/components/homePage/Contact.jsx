import { useState } from 'react';
import Header from '../../layout/Header';
import logo from '../../assets/Concrete-Logo.png';
import SideNavBar from '../../layout/SideNavBar';
import ScrollToTop from '../../layout/ScrollToTop';
import '../homePage/homePageStyles/contact.css';
function Contact() {
	const [showNav, setShowNav] = useState(false);
	const [showExitIcon, setShowExitIcon] = useState(false);

	const coachList = [
		{
			team: 'Boys Basketball',
			coachName: 'Danny Crosby',
			coachEmail: 'dcrosby@concrete.k12.wa.us',
		},
		{
			team: 'Girls Basketball',
			coachName: 'Kevik  Rensink',
			coachEmail: 'Kevik.Rensink@pse.com',
		},
		{
			team: 'Football',
			coachName: 'Patrick  Silmane',
			coachEmail: 'psilmane@concrete.k12.wa.us',
		},
		{
			team: 'Volleyball',
			coachName: 'Kevik  Rensink',
			coachEmail: 'Kevik.Rensink@pse.com',
		},
		{
			team: 'Softball',
			coachName: 'Iris Nevin',
			coachEmail: 'inevin@concrete.k12.wa.us',
		},
		{
			team: 'Baseball',
			coachName: 'Elliott Weyand',
			coachEmail: 'eweyand@concrete.k12.wa.us',
		},
		{
			team: 'Wrestling',
			coachName: 'Riley Fichter',
			coachEmail: 'rileyf2410@hotmail.com',
		},
		{
			team: 'Track',
			coachName: 'Jason  Miller',
			coachEmail: 'jason@concrete-herald.com',
		},
		{
			team: 'Cheer',
			coachName: 'Tracie  Meacham',
			coachEmail: 'tmeacham@concrete.k12.wa.us',
		},
		{
			team: 'Athletic Director/Assistant Principal',
			coachName: 'David Rodriguez',
			coachEmail: 'drodriguez@concrete.k12.wa.us',
		},
	];
	return (
		<div className="contact-container">
			<ScrollToTop />

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
						return (
							<li className="coach-item" key={index}>
								<span className="coach-title"> {coach.team}</span>
								<span className="coach-name">
									<span>Contact:</span> {coach.coachName}
								</span>
								<span className="coach-email">
									Email:{' '}
									<a href={'mailto:' + coach.coachEmail}>{coach.coachEmail}</a>{' '}
								</span>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default Contact;
