import myImage from '../../assets/concreteBannerImg.gif';
import './banner.css';
function Banner() {
	return (
		<div className="banner">
			<img src={myImage} alt="Banner" />
		</div>
	);
}

export default Banner;
