import ImageSlider from '../imageSlider/ImageSlider';
import './banner.css';
import welcomeBanner from '../../assets/concreteBannerImg.gif';
import cascadeSupply from '../../assets/cascadesupplylogo.jpg';
import actOneLogo from '../../assets/actonelogo.jpg';
import './banner.css';

function Banner() {
	const slides = [
		{ url: welcomeBanner },
		{ url: actOneLogo },
		{ url: cascadeSupply },
	];

	const containerStyles = {
		width: '100%',
		height: '16rem',
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
