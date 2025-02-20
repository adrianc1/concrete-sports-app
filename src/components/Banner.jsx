import myImage from '../assets/concreteBannerImg.gif';

function Banner() {
	return (
		<div className="banner">
			<img src={myImage} alt="Banner" />
		</div>
	);
}

export default Banner;
