import { useState } from 'react';
import Header from '../../layout/Header';
import logo from '../../assets/Concrete-Logo.png';
import SideNavBar from '../../layout/SideNavBar';
// import IFrame from '../iframe/IFrame';
import { Link } from 'react-router';

import '../homePage/homePageStyles/sponsors.css';
function Sponsors() {
	const [showNav, setShowNav] = useState(false);
	const [showExitIcon, setShowExitIcon] = useState(false);
	// const [iframeUrl, setIframeUrl] = useState('');

	const sponsorList = [
		{
			name: 'CHS BOOSTER CLUB',
			url: '/Boosters',
			contact: '360-941-0403',
			address: '7830 S Superior Ave, Concrete, WA 98237',
			isExternal: false,
		},
		{
			name: 'Act One Ice Cream Parlor',
			url: 'https://concrete-theatre.com/',
			contact: '360-941-0403',
			address: '45924 Main Street, Concrete, Washington, United States 98237',
			linkText: 'aicee',
			isExternal: true,
		},
		{
			name: 'North Cascade Kayaks',
			url: 'https://northcascadekayaks.com/',
			contact: ' info@northcascadekayaks.com',
			address: '52925 Railroad Ave. Rockport,WA 98283',
			isExternal: true,
		},
		{
			name: "Annie's Pizza Station",
			url: 'https://www.anniespizzastation.net/',
			contact: '360-853-7227',
			address: '44568 State Route 20 Concrete, WA',
			isExternal: true,
		},
		{
			name: 'Uptown Auto Repair',
			url: 'https://share.google/7L2z921YemrBkgsgo',
			contact: '(360) 436-1445',
			address: '1090 Darrington St, Darrington, WA 98241',
			isExternal: true,
		},
		{
			name: "North Cascade's Perks",
			url: 'https://www.facebook.com/NorthCascadesPerks/',
			contact: 'northcascadeperks@gmail.com',
			address: '44586 State Rte 20, Concrete, WA 98237',
			isExternal: true,
		},

		{
			name: 'Dreaux Digital',
			url: 'https://dreauxdigital.com',
			contact: 'adrian@dreauxdigital.com',
			address: '',
			isExternal: true,
		},
	];
	function handleSponsorClick(url) {
		window.open(url, '_blank');
	}

	return (
		<div className="sponsor-container">
			<Header
				toggleNav={() => setShowNav(!showNav)}
				toggleIcon={() => setShowExitIcon(!showExitIcon)}
				logo={logo}
				display={showExitIcon}
			/>
			<SideNavBar show={showNav} logo={logo} />
			<div className="sponsors-content">
				<h2 className="sponsors-title">Sponsors</h2>
				<ul className="sponsor-list">
					{sponsorList.map((sponsor, index) => {
						return (
							<li className="sponsor-item" key={index}>
								{sponsor.isExternal ? (
									<span
										className="sponsor-name"
										onClick={() => handleSponsorClick(sponsor.url)}
										style={{ cursor: 'pointer' }} // Add cursor pointer to indicate it's clickable
									>
										{sponsor.name}
									</span>
								) : (
									<Link className="sponsor-name" to={sponsor.url}>
										{sponsor.name}
									</Link>
								)}

								<span className="sponsor-address">
									Address: {sponsor.address}
								</span>
								<span className="sponsor-phone">
									Contact: {sponsor.contact}
								</span>
							</li>
						);
					})}
					<p className="sponsor-message">
						A heartfelt thank you to our sponsors! Your generous support has
						directly empowered our Concrete athletes, providing them with
						invaluable resources and opportunities. We&apos;ve witnessed their
						growth and success t hanks to your belief in them. We are deeply
						grateful for your partnership.
						<br />
						<br />
						To be a sponsor please contact adrian@dreauxdigital.com
					</p>
				</ul>

				{/* {iframeUrl && (
					<IFrame url={iframeUrl} onClose={() => setIframeUrl('')} />
				)} */}
			</div>
		</div>
	);
}

export default Sponsors;
