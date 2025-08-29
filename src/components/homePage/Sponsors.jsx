import { useState } from 'react';
import Header from '../../layout/Header';
import logo from '../../assets/Concrete-Logo.png';
import SideNavBar from '../../layout/SideNavBar';
import { Link } from 'react-router';
import kayak from '../../assets/kayak2.png';
import uptownAuto from '../../assets/uptown2.png';
import perks from '../../assets/perks5.png';
import annies from '../../assets/anniespizza.png';
import cascade1 from '../../assets/cascade1.png';
import concreteLogo from '../../assets/boosterbanner.png';
import dreaux from '../../assets/dreauxdigital.png';
import ScrollToTop from '../../layout/ScrollToTop';

import '../homePage/homePageStyles/sponsors.css';
function Sponsors() {
	const [showNav, setShowNav] = useState(false);
	const [showExitIcon, setShowExitIcon] = useState(false);

	const sponsorList = [
		{
			name: 'CHS Booster Club',
			url: '/Boosters',
			contact: '360-941-0403',
			address: '7830 S Superior Ave, Concrete, WA 98237',
			logo: concreteLogo,
			isExternal: false,
		},
		{
			name: 'Cascade Mountain Lodge',
			url: 'https://cascademountainlodgewa.com/',
			contact: 'cascademountainlodge@gmail.com',
			address: '44618 State Rte 20 Concrete, WA 98237',
			logo: perks,
			isExternal: true,
		},
		{
			name: 'North Cascade Kayaks',
			url: 'https://northcascadekayaks.com/',
			contact: ' info@northcascadekayaks.com',
			address: '52925 Railroad Ave, Rockport, WA 98283',
			logo: kayak,
			isExternal: true,
		},
		{
			name: "Annie's Pizza Station",
			url: 'https://www.anniespizzastation.net/',
			contact: '360-853-7227',
			address: '44568 State Route 20 Concrete, WA 98237',
			logo: annies,
			isExternal: true,
		},
		{
			name: 'Cascade Burgers',
			url: 'https://www.cascadeburgers.net/',
			contact: '360-853-7580',
			address: '45292 State Route 20 Concrete, WA 98237',
			logo: cascade1,
			isExternal: true,
		},
		{
			name: 'Uptown Auto Repair',
			url: 'https://share.google/7L2z921YemrBkgsgo',
			contact: '(360) 436-1445',
			address: '1090 Darrington St, Darrington, WA 98241',
			logo: uptownAuto,
			isExternal: true,
		},
		{
			name: "North Cascade's Perks",
			url: 'https://www.facebook.com/NorthCascadesPerks/',
			contact: 'northcascadeperks@gmail.com',
			address: '44586 State Rte 20, Concrete, WA 98237',
			logo: perks,
			isExternal: true,
		},

		{
			name: 'Dreaux Digital',
			url: 'https://dreauxdigital.com',
			contact: 'adrian@dreauxdigital.com',
			address: '',
			logo: dreaux,
			isExternal: true,
		},
	];
	function handleSponsorClick(url) {
		window.open(url, '_blank');
	}

	return (
		<div className="sponsor-container">
			<ScrollToTop />

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
									{sponsor.logo &&
										(sponsor.isExternal ? (
											<img
												src={sponsor.logo}
												alt={`${sponsor.name} logo`}
												className="sponsor-logo"
												onClick={() => window.open(sponsor.url, '_blank')}
												style={{ cursor: 'pointer' }}
											/>
										) : (
											<Link to={sponsor.url}>
												<img
													src={sponsor.logo}
													alt={`${sponsor.name} logo`}
													className="sponsor-logo"
												/>
											</Link>
										))}
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
