import ImageSlider from '../imageSlider/ImageSlider';
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

	return (
		<div className="banner">
			{/* <img src={myImage} alt="Banner" /> */}
			<div className="img-container">
				{/* {' '} */}
				<ImageSlider slides={slides} />
			</div>
		</div>
	);
}

export default Banner;
