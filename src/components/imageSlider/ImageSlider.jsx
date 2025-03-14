import { faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const ImageSlider = ({ slides }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const sliderStyles = {
		width: '100%',
		height: '100%',
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden', // Prevents images from spilling out
	};

	const imgStyles = {
		width: '100%', // Makes sure the image never overflows horizontally
		minHeight: '100%', // Ensures it doesn't get taller than the container
		objectFit: 'cover', // Ensures the whole image is visible
		borderRadius: '1px',
	};

	const leftArrowStyles = {
		position: 'absolute',
		top: '50%',
		transform: 'translate(0, -50%)',
		left: '32px',
		fontSize: '2rem',
		color: 'rgb(255, 255, 255)',
		cursor: 'pointer',
		zIndex: 2,
	};

	const rightArrowStyles = {
		position: 'absolute',
		top: '50%',
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
		console.log('useEffect runs'); // Debugging to verify only runs once

		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1)); // Correct way to update state
		}, 3000);

		return () => clearInterval(interval); // Cleanup function
	}, []); // Empty dependency array ensures it runs only once

	return (
		<div style={sliderStyles}>
			<div style={leftArrowStyles} onClick={goToPrevious}>
				←
			</div>
			<img src={slides[currentIndex].url} alt="Slide" style={imgStyles} />
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
