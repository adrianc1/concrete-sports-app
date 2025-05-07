import { useState } from 'react';
// import Header from '../header/Header';
// import SideNavBar from '../sideNavBar/SideNavBar';
import logo from '../../assets/Concrete-Logo.png';
import './iframe.css';

function IFrame({ url, onClose }) {
	return (
		<div className="iframe-overlay">
			<div className="iframe-header">
				<button onClick={onClose} className="iframe-close-btn">
					✕ Close
				</button>
			</div>
			<iframe
				src={url}
				title="Embedded Page"
				className="iframe-content"
			></iframe>
		</div>
	);
}

export default IFrame;
