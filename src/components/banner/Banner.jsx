import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
// import myImage from '../../assets/concreteBannerImg.gif';
import ImageSlider from '../imageSlider/ImageSlider';
import './banner.css';
import welcomeBanner from '../../assets/concreteBannerImg.gif';
import actOneLogo from '../../assets/actonelogo.jpg';
import banner from '../../assets/banner.jpg';
import './banner.css';

function Banner() {
	const slides = [
		{ url: welcomeBanner },
		{ url: actOneLogo },
		{ url: actOneLogo },
		{ url: banner },
	];

	const containerStyles = {
		width: '100%',
		height: '20rem',
		margin: '0 auto',
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
