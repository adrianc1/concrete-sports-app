import { useState } from 'react';
import logo from '../../assets/Concrete-Logo.png';
import SideNavBar from '../../layout/SideNavBar';
import { Link } from 'react-router';
import kayak from '../../assets/kayak2.webp';
import uptownAuto from '../../assets/uptown2.webp';
import perks from '../../assets/perks5.webp';
import annies from '../../assets/annies.webp';
import cascade1 from '../../assets/cascade1.webp';
import concreteLogo from '../../assets/boosterbanner.webp';
import dreaux from '../../assets/dreauxdigital.webp';
import cascadeMountainLodge from '../../assets/cascademountainlodgeBanner.webp';
import ScrollToTop from '../../layout/ScrollToTop';
import cascadebar from '../../assets/indiancuisine.webp';
function Sponsors() {
	const [showNav, setShowNav] = useState(false);

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
			logo: cascadeMountainLodge,
			isExternal: true,
		},
		{
			name: 'North Cascade Kayaks',
			url: 'https://northcascadekayaks.com/',
			contact: 'info@northcascadekayaks.com',
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
			name: 'Cascade Mountain Restaurant & Bar',
			url: 'https://share.google/twDLgvym8siHwIyt2',
			contact: 'cascademountainlodge@gmail.com',
			address: '44618 State Rte 20, Concrete, WA 98237',
			logo: cascadebar,
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

	return (
		<div className="w-full flex flex-col items-center px-4 pb-32 md:pb-24">
			<ScrollToTop />
			<SideNavBar show={showNav} logo={logo} />

			<h2
				className="font-black"
				style={{ fontSize: '2.25rem', fontWeight: 900, letterSpacing: '-0.5px', color: '#420a72', textAlign: 'center', marginTop: '2rem', marginBottom: '2rem' }}
			>
				Sponsors
				<span
					className="block rounded-full"
					style={{ width: 80, height: 3, background: '#f2bc40', margin: '0.75rem auto 0' }}
				/>
			</h2>

			<div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
				{sponsorList.map((sponsor, index) => {
					const inner = (
						<div className="group flex flex-col gap-2 cursor-pointer">
							<div className="relative overflow-hidden rounded-xl">
								<img
									src={sponsor.logo}
									alt={`${sponsor.name} logo`}
									className="w-full h-36 md:h-44 object-cover"
								/>
								<div className="absolute inset-0 bg-[#420a72]/0 group-hover:bg-[#420a72]/20 transition-colors duration-200 rounded-xl" />
							</div>
							<span className="font-bold leading-tight" style={{ fontSize: '0.875rem', color: '#420a72' }}>
								{sponsor.name}
							</span>
						</div>
					);

					return sponsor.isExternal ? (
						<a
							key={index}
							href={sponsor.url}
							target="_blank"
							rel="noreferrer"
							style={{ textDecoration: 'none' }}
						>
							{inner}
						</a>
					) : (
						<Link key={index} to={sponsor.url} style={{ textDecoration: 'none' }}>
							{inner}
						</Link>
					);
				})}
			</div>

			<div className="w-full max-w-4xl mt-12 text-sm text-gray-500 leading-relaxed">
				A heartfelt thank you to our sponsors! Your generous support has directly
				empowered our Concrete athletes, providing them with invaluable resources and
				opportunities. We&apos;ve witnessed their growth and success thanks to your
				belief in them. We are deeply grateful for your partnership.
				<br />
				<br />
				To be a sponsor please contact{' '}
				<a href="mailto:adrian@dreauxdigital.com" className="font-bold" style={{ color: '#420a72', textDecoration: 'none' }}>
					adrian@dreauxdigital.com
				</a>
				.
			</div>
		</div>
	);
}

export default Sponsors;
