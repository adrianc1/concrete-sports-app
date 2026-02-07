import '../homePage/homePageStyles/downloadbanner.css';
export default function DownloadBanner({ setBannerActive, setShowModal }) {
	function closeBanner() {
		setBannerActive(false);
	}

	function displayModal() {
		setShowModal(true);
	}

	return (
		<div className="banner-container">
			<div className="left-banner">
				<div className="close-banner" onClick={closeBanner}>
					X
				</div>
				<div className="banner-tagline">
					<h4 className="banner-tagline-title">Get the app</h4>
					<p className="banner-tagline-des">Stay connected with the teams</p>
				</div>
			</div>
			<button className="use-app-btn" onClick={displayModal}>
				Use App
			</button>
		</div>
	);
}
