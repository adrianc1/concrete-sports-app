import { useState } from 'react';
import SideNavBar from '../../layout/SideNavBar';
import logo from '../../assets/Concrete-Logo.png';
import ScrollToTop from '../../layout/ScrollToTop';
import { Check } from 'lucide-react';

const perks = [
	'Attend meetings every second Wednesday of each month at 7:30pm in the high school cafeteria.',
	'Help on fundraising committees.',
	'Vote on Athlete of the Month and other decisions made by the Booster Club.',
	'Nominate student-athletes for Athlete of the Year.',
	'Vote on student-athletes for Athlete of the Year.',
	'Help with projects.',
	'Help raise money for scholarships.',
	'Help with construction and planning of new fields and facilities (e.g. recently new track).',
];

function Boosters() {
	const [showNav, setShowNav] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const modalToggle = () => {
		setShowModal(!showModal);
	};

	return (
		<div
			className="w-full flex flex-col items-center px-4"
			style={{ minHeight: '100vh', paddingBottom: '6rem' }}
		>
			<ScrollToTop />
			<SideNavBar show={showNav} logo={logo} />

			<div className="w-full max-w-2xl mt-8 flex flex-col flex-1">
				{/* Title */}
				<h2
					className="font-black mb-3"
					style={{
						fontSize: '2.25rem',
						letterSpacing: '-0.5px',
						color: '#420a72',
						textAlign: 'center',
					}}
				>
					Booster Club
					<span
						className="block rounded-full mt-3"
						style={{
							width: 80,
							height: 3,
							background: '#f2bc40',
							margin: '0.75rem auto 0',
						}}
					/>
				</h2>

				{/* Membership price badge */}
				<div
					className="inline-flex items-center gap-2 rounded-full font-black uppercase tracking-widest mb-8"
					style={{
						background: '#f5f0fa',
						border: '1px solid #e2d4f0',
						padding: '0.35rem 1rem',
						fontSize: '0.72rem',
						color: '#420a72',
						margin: '0.8rem auto',
					}}
				>
					<span
						style={{
							color: '#9ca3af',
							fontWeight: 700,
						}}
					>
						Membership
					</span>
					$10 per person
				</div>

				{/* Perks */}
				<div className="flex flex-col flex-1 justify-between">
					{perks.map((perk, i) => (
						<div
							key={i}
							className="flex items-start gap-3 px-4 py-3.5 rounded-xl"
							style={{ borderLeft: '4px solid #420a72', background: '#faf8fd' }}
						>
							<Check
								size={15}
								strokeWidth={3}
								style={{ color: '#f2bc40', marginTop: 2, flexShrink: 0 }}
							/>
							<span
								style={{
									fontSize: '0.9rem',
									color: '#1a0033',
									lineHeight: 1.5,
								}}
							>
								{perk}
							</span>
						</div>
					))}
				</div>
			</div>

			{showModal && (
				<div className="modal-page">
					<div className="overlay"></div>
					<div className="modal-container">
						<div className="modal-content">
							<form>
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
								<button type="submit" className="submit-form-btn">
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
