import { useState } from 'react';
import Header from '../header/Header';
import logo from '../../assets/Concrete-Logo.png';
import SideNavBar from '../sideNavBar/SideNavBar';
import IFrame from '../iframe/IFrame';

import { Link } from 'react-router';

import './sponsors.css';
function Sponsors() {
	const [showNav, setShowNav] = useState(false);
	const [showExitIcon, setShowExitIcon] = useState(false);
	const [showIframe, setShowIframe] = useState(false);

	const sponsorList = [
		{
			name: 'CHS BOOSTER CLUB',
			url: '/Boosters',
			phone: '360-941-0403',
			address: '7830 S Superior Ave, Concrete, WA 98237',
			isExternal: false,
		},
		{
			name: 'Act One Ice Cream Parlor',
			url: 'https://concrete-theatre.com/',
			phone: '360-941-0403',
			address: '45924 Main Street, Concrete, Washington, United States 98237',
			linkText: 'aicee',
			isExternal: true,
		},
		{
			name: 'Your Business Here',
			url: 'https://concrete-theatre.com/',
			phone: '360-555-1234',
			address: '1 Main Street, Concrete, Washington, United States 98237',
			isExternal: true,
		},
		{
			name: 'Your Business Here',
			url: 'https://concrete-theatre.com/',
			phone: '360-555-1234',
			address: '1 Main Street, Concrete, Washington, United States 98237',
			isExternal: true,
		},

		{
			name: 'Dreaux Digital',
			url: 'https://adriancrosby.netlify.app/',
			phone: '714-340-5029',
			address: 'adriancrosby02@gmail.com',
			isExternal: true,
		},
	];
	function handleClick() {
		setShowIframe(true);
	}
	return (
		<div className="main-sponsors-div">
			<Header
				toggleNav={() => setShowNav(!showNav)}
				toggleIcon={() => setShowExitIcon(!showExitIcon)}
				logo={logo}
				display={showExitIcon}
			/>
			<SideNavBar show={showNav} logo={logo} />
			<ul className="sponsor-list">
				<h2 className="sponsors-title">Sponsors</h2>
				{sponsorList.map((sponsor, index) => {
					return (
						<li className="sponsor-item" key={index}>
							{sponsor.isExternal ? (
								// <div onClick={handleClick}>
								// 	<span className="sponsor-name">{sponsor.name}</span>
								// 	{showIframe && <IFrame url={sponsor.url} />}
								// </div>
								<Link
									className="sponsor-name"
									to="/IFrame"
									onClick={handleClick}
								>
									{sponsor.name}
								</Link>
							) : (
								<Link
									className="sponsor-name"
									to={sponsor.url}
									onClick={handleClick}
								>
									{sponsor.name}
								</Link>
							)}
							<span className="sponsor-address">
								Address: {sponsor.address}
							</span>
							<span className="sponsor-phone">Phone: {sponsor.phone}</span>
						</li>
					);
				})}
				<p className="sponsor-message">
					A heartfelt thank you to our sponsors! Your generous support has
					directly empowered our Concrete athletes, providing them with
					invaluable resources and opportunities. We've witnessed their growth
					and success thanks to your belief in them. We are deeply grateful for
					your partnership.
				</p>
			</ul>
		</div>
	);
}

export default Sponsors;
