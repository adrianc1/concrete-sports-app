import '../homePage/homePageStyles/modal.css';
import step1 from '../../assets/step1.png';
import step2 from '../../assets/step2.png';

export default function DownloadModal({ setShowModal }) {
	function closeModal() {
		setShowModal(false);
	}
	return (
		<div className="modal-container">
			<span onClick={closeModal}>X</span>
			<h2>Concrete Sports App</h2>
			<div>Get the app in 5 seconds.</div>
			<div>No download required.</div>
			<ul className="how-to">
				<li>
					<p>1. Tap the share button on the bottom of the screen.</p>
					<img src={step1} alt="" />
				</li>
				<li>
					<p>2. Tap "Add To Home Screen" button.</p>
					<img src={step2} alt="" />
				</li>
				<li>
					<p>3. Tap the "Add" button in top right corner.</p>
				</li>
			</ul>
		</div>
	);
}
