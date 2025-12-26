import 'react-loading-skeleton/dist/skeleton.css';
import ImageSlider from '../imageSlider/ImageSlider';
import welcomeBanner from '../../assets/lionsbanner.webp';
import kayak from '../../assets/kayak2.webp';
import uptownAuto from '../../assets/uptown2.webp';
import perks from '../../assets/perks5.webp';
import annies from '../../assets/annies.webp';
import cascade1 from '../../assets/cascade1.webp';
import cascadelodge from '../../assets/cascademountainlodgeBanner.webp';
import cascadebar from '../../assets/indiancuisine.webp';
import './banner.css';

function Banner() {
	const slides = [
		{ url: welcomeBanner },
		{ url: cascade1 },
		{ url: cascadelodge },
		{ url: cascadebar },
		{ url: annies },
		{ url: perks },
		{ url: kayak },
		{ url: uptownAuto },
	];

	return (
		<div className="banner">
			<div className="img-container">
				{/* {' '} */}
				<ImageSlider slides={slides} />
			</div>
		</div>
	);
}

export default Banner;
