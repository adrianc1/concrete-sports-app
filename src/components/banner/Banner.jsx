import ImageSlider from '../imageSlider/ImageSlider';
import welcomeBanner from '../../assets/concreteBannerImg.gif';
import actOneLogo from '../../assets/actonelogo.jpg';
import kayak from '../../assets/kayak2.png';
import uptownAuto from '../../assets/uptown2.png';
import perks from '../../assets/perks2.png';
import annies from '../../assets/anniespizza.png';
import './banner.css';
function Banner() {
	const slides = [
		{ url: welcomeBanner },
		{ url: kayak },
		{ url: uptownAuto },
		{ url: perks },
		{ url: annies },
		{ url: actOneLogo },
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
