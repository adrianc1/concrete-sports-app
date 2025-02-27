import { faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ImageSlider = ({ slides }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const sliderStyles = {
		height: '100%',
		position: 'relative',
	};
	const slideStyles = {
		width: '100%',
		height: '100%',
		borderRadius: '10px',
		backgroundPosition: 'center',
		backgroundColor: 'blue',
		backgroundImage: `url(${slides[currentIndex].url})`,
	};

	const leftArrowStyles = {
		position: 'absolute',
		top: '50%',
		transform: 'translate(0, -50%)',
		left: '32px',
		fontSize: '45px',
		color: 'red',
		zIndex: '1',
		cursor: 'pointer',
	};

	const rightArrowStyles = {
		position: 'absolute',
		top: '50%',
		transform: 'translate(0, -50%)',
		right: '32px',
		fontSize: '45px',
		color: 'red',
	};

	const dotsContainerStyles = {
		display: 'flex',
		justifyContent: 'center',
	};

	const dotStyles = {
		margin: '0 3px',
		cursor: 'pointer',
		fontSize: '60px',
		color: 'red',
		zIndex: '999999999',
	};

	function goToPrevious() {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	}

	function goToNext() {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	}

	return (
		<div style={sliderStyles}>
			<div style={leftArrowStyles} onClick={goToPrevious}>
				←
			</div>
			<div style={rightArrowStyles} onClick={goToNext}>
				→
			</div>
			<div style={slideStyles}></div>
			<div style={dotsContainerStyles}>
				{slides.map((slide, slideIndex) => (
					<div key={slideIndex} style={dotStyles}>
						•{' '}
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageSlider;
