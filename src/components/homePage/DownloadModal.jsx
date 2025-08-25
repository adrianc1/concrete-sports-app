import '../homePage/homePageStyles/modal.css';
export default function DownloadModal({ setShowModal }) {
	function closeModal() {
		setShowModal(false);
	}
	return (
		<div className="modal-container">
			<span onClick={closeModal}>X</span>
			<h2>Concrete Sports App</h2>
			<p>Get the app in 5 seconds. No download required.</p>
			<ul>
				<li>1. Tap the share button on the bottom of the screen.</li>
				<li>2. Tap "Add To Home Screen" button.</li>
				<li>3. Tap the "Add" button in top right corner.</li>
			</ul>
		</div>
	);
}
