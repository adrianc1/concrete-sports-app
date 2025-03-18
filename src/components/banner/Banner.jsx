import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
// import myImage from '../../assets/concreteBannerImg.gif';
import ImageSlider from '../imageSlider/ImageSlider';
import './banner.css';
import welcomeBanner from '../../assets/concreteBannerImg.gif';
import cascadeSupply from '../../assets/cascadesupplylogo.jpg';
import farmersMarket from '../../assets/farmersmarket.jpg';
import actOneLogo from '../../assets/actonelogo.jpg';
import loggersLandingLogo from '../../assets/loggerslandinglogo.jpg';
import birdsView from '../../assets/birdsviewdiner.jpg';
import edasc from '../../assets/edasc.jpg';
import valleysWest from '../../assets/valleyswest.jpg';

import './banner.css';

function Banner() {
	const slides = [
		{ url: welcomeBanner },
		{ url: actOneLogo },
		{ url: cascadeSupply },
		{ url: farmersMarket },
		{ url: loggersLandingLogo },
		{ url: birdsView },
		{ url: edasc },
		{ url: valleysWest },
	];

	const containerStyles = {
		width: '100%',
		height: '12rem',
		margin: '4rem auto 0 auto',
	};

	return (
		<div className="banner">
			{/* <img src={myImage} alt="Banner" /> */}
			<div style={containerStyles}>
				{' '}
				<ImageSlider slides={slides} />
			</div>
		</div>
	);
}

export default Banner;
