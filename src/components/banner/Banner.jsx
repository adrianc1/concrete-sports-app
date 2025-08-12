import ImageSlider from '../imageSlider/ImageSlider';
import welcomeBanner from '../../assets/concreteBannerImg.gif';
import kayak from '../../assets/kayak2.png';
import uptownAuto from '../../assets/uptown2.png';
import perks from '../../assets/perks5.png';
import annies from '../../assets/anniespizza.png';
import cascadeBurgers from '../../assets/cascadeburgerbanner.png';
import cascade1 from '../../assets/cascade1.png';
import cascade2 from '../../assets/cascade2.png';
import cascade3 from '../../assets/cascade3.png';

import './banner.css';
function Banner() {
	const slides = [
		{ url: welcomeBanner },
		{ url: cascade1 },
		{ url: cascade2 },
		{ url: cascade3 },
		{ url: cascadeBurgers },
		{ url: annies },
		{ url: kayak },
		{ url: perks },
		{ url: uptownAuto },
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
