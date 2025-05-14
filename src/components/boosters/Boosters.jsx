import { useState } from 'react';
import Header from '../header/Header';
import SideNavBar from '../sideNavBar/SideNavBar';
import logo from '../../assets/Concrete-Logo.png';
import emailjs from '@emailjs/browser';

import './boosters.css';

function Boosters() {
	const [showNav, setShowNav] = useState(false);
	const [showExitIcon, setShowExitIcon] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const modalToggle = () => {
		setShowModal(!showModal);
		console.log(showModal);
	};

	// EmailClient.init('_LFinvdPQE4j4ldKB');

	const sendEmail = (e) => {
		emailjs.sendForm(
			'service_o41p86x',
			'template_ajau399',
			e.target,
			'_LFinvdPQE4j4ldKB'
		);
	};

	return (
		<div>
			<div className="nav">
				<Header
					toggleNav={() => setShowNav(!showNav)}
					toggleIcon={() => setShowExitIcon(!showExitIcon)}
					logo={logo}
					display={showExitIcon}
				/>
				<SideNavBar show={showNav} logo={logo} />
			</div>

			<div className="boosters-main">
				<h1 className="boosters-title">Join the Booster Club Today!</h1>

				<h4 className="booster-sub-title">
					Concrete Lions Booster Club Membership is $10 per person
				</h4>

				<ul className="booster-club-perks">
					<li>
						ATTEND MEETINGS EVERY SECOND WEDNESDAY OF EACH MONTH AT 7:30PM IN
						THE HIGH SCHOOL CAFETERIA.
					</li>
					<li>HELP ON FUNDRAISING COMMITTEES.</li>
					<li>
						VOTE ON ATHLETE OF THE MONTH AND OTHER DECISIONS BEING MADE BY
						BOOSTER CLUB.
					</li>
					<li>NOMINATE STUDENT-ATHLETES FOR ATHLETE OF THE YEAR.</li>
					<li>VOTE ON STUDENT-ATHLETES FOR ATHLETE OF THE YEAR.</li>
					<li>HELP WITH PROJECTS. </li>
					<li>HELP RAISE MONEY FOR SCHOLARSHIPS!! </li>
					<li>
						HELP WITH CONSTRUCTION AND PLANNING OF NEW FIELDS AND FACILITIES
						(I.E. RECENTLY NEW TRACK).
					</li>
				</ul>
				<div className="button-container">
					<button onClick={modalToggle}>JOIN THE CLUB!</button>
				</div>
			</div>

			{showModal && (
				<div className="modal-page">
					<div className="overlay"></div>
					<div className="modal-container">
						<div className="modal-content">
							<form onSubmit={sendEmail}>
								<span className="close-modal-button" onClick={modalToggle}>
									X
								</span>
								<div>
									<label>First Name</label>
									<input type="text" name="firstName" />
								</div>

								<div>
									<label>Last Name</label>
									<input type="text" name="lastName" />
								</div>

								<div>
									<label>Phone Number</label>
									<input type="tel" name="phone" />
								</div>

								<div>
									<label>Email</label>
									<input type="email" name="email" />
								</div>

								<button
									type="submit"
									className="submit-form-btn"
									// onClick={modalToggle}
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Boosters;
