import { useState, useEffect } from 'react';
import './imageSlider.css';
const ImageSlider = ({ slides }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const leftArrowStyles = {
		position: 'absolute',
		top: '60%',
		transform: 'translate(0, -50%)',
		transition: 'all 2s',

		left: '32px',
		fontSize: '2rem',
		color: 'rgb(255, 255, 255)',
		cursor: 'pointer',
		zIndex: 2,
	};

	const rightArrowStyles = {
		position: 'absolute',
		top: '60%',
		transform: 'translate(0, -50%)',
		right: '32px',
		fontSize: '2rem',
		color: 'rgb(255, 255, 255)',
		borderRadius: '10px',
		padding: '0',
		cursor: 'pointer',
		zIndex: 2,
	};

	const dotsContainerStyles = {
		display: 'flex',
		justifyContent: 'center',
		position: 'absolute',
		bottom: '10px',
		width: '100%',
	};

	const dotStyles = {
		margin: '0 5px',
		cursor: 'pointer',
		fontSize: '20px',
		color: 'rgb(255, 255, 255)',
	};

	function goToPrevious() {
		setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
	}

	function goToNext() {
		setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1)); // Correct way to update state
		}, 3000);

		return () => clearInterval(interval); // Cleanup function
	}, []); // Empty dependency array ensures it runs only once

	return (
		<div className="slider-container">
			<div style={leftArrowStyles} onClick={goToPrevious}>
				←
			</div>

			<img src={slides[currentIndex].url} alt="Slide" className="img-slide" />

			<div style={rightArrowStyles} onClick={goToNext}>
				→
			</div>

			<div style={dotsContainerStyles}>
				{slides.map((_, index) => (
					<span
						key={index}
						style={dotStyles}
						onClick={() => setCurrentIndex(index)}
					>
						•
					</span>
				))}
			</div>
		</div>
	);
};

export default ImageSlider;
