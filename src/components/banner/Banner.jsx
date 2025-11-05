import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ImageSlider from '../imageSlider/ImageSlider';
import welcomeBanner from '../../assets/lionsbanner.png';
import kayak from '../../assets/kayak2.png';
import uptownAuto from '../../assets/uptown2.png';
import perks from '../../assets/perks5.png';
import annies from '../../assets/annies.png';
import cascade1 from '../../assets/cascade1.png';
import cascadelodge from '../../assets/cascademountainlodgeBanner.png';
import cascadebar from '../../assets/indiancuisine.png';
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
