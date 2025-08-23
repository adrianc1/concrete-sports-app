import { useState } from 'react';
import Header from '../../layout/Header';
import logo from '../../assets/Concrete-Logo.png';
import SideNavBar from '../../layout/SideNavBar';
// import IFrame from '../iframe/IFrame';
import { Link } from 'react-router';

import kayak from '../../assets/kayak2.png';
import uptownAuto from '../../assets/uptown2.png';
import perks from '../../assets/perks5.png';
import annies from '../../assets/anniespizza.png';
import cascade1 from '../../assets/cascade1.png';
import concreteLogo from '../../assets/Concrete-Logo.png';

import '../homePage/homePageStyles/sponsors.css';
function Sponsors() {
	const [showNav, setShowNav] = useState(false);
	const [showExitIcon, setShowExitIcon] = useState(false);

	const sponsorList = [
		{
			name: 'CHS BOOSTER CLUB',
			url: '/Boosters',
			contact: '360-941-0403',
			address: '7830 S Superior Ave, Concrete, WA 98237',
			logo: concreteLogo,
		},
		{
			name: 'North Cascade Kayaks',
			url: 'https://northcascadekayaks.com/',
			contact: ' info@northcascadekayaks.com',
			address: '52925 Railroad Ave. Rockport,WA 98283',
			logo: kayak,
		},
		{
			name: "Annie's Pizza Station",
			url: 'https://www.anniespizzastation.net/',
			contact: '360-853-7227',
			address: '44568 State Route 20 Concrete, WA',
			logo: annies,
		},
		{
			name: 'Cascade Burgers',
			url: 'https://www.cascadeburgers.net/',
			contact: '360-853-7580',
			address: '45292 State Route 20 Concrete, Washington 98237',
			logo: cascade1,
		},
		{
			name: 'Uptown Auto Repair',
			url: 'https://share.google/7L2z921YemrBkgsgo',
			contact: '(360) 436-1445',
			address: '1090 Darrington St, Darrington, WA 98241',
			logo: uptownAuto,
		},
		{
			name: "North Cascade's Perks",
			url: 'https://www.facebook.com/NorthCascadesPerks/',
			contact: 'northcascadeperks@gmail.com',
			address: '44586 State Rte 20, Concrete, WA 98237',
			logo: perks,
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
								<div className="sponsor-header">
									{sponsor.logo && (
										<img
											src={sponsor.logo}
											alt={sponsor.name + ' logo'}
											className="sponsor-logo"
										/>
									)}
									{sponsor.isExternal ? (
										<span
											className="sponsor-name"
											onClick={() => handleSponsorClick(sponsor.url)}
											style={{ cursor: 'pointer' }}
										>
											{sponsor.name}
										</span>
									) : (
										<Link className="sponsor-name" to={sponsor.url}>
											{sponsor.name}
										</Link>
									)}
								</div>
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
						growth and success thanks to your belief in them. We are deeply
						grateful for your partnership.
						<br />
						<br />
						To be a sponsor please contact{' '}
						<strong>
							<a href="mailto:adrian@dreauxdigital.com">
								adrian@dreauxdigital.com
							</a>
						</strong>
						.
					</p>
				</ul>
			</div>
		</div>
	);
}

export default Sponsors;
