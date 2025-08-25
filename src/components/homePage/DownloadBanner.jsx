import { useState } from 'react';
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
			<div className="close-banner" onClick={closeBanner}>
				X
			</div>
			<div className="banner-title">Concrete Sports App</div>
			<button className="use-app-btn" onClick={displayModal}>
				Use App
			</button>
		</div>
	);
}
