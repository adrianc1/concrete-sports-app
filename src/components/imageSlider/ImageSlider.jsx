import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './imageSlider.css';

const ImageSlider = ({ slides }) => {
	const [currentIndex, setCurrentIndex] = useState(1);
	const [isTransitioning, setIsTransitioning] = useState(true);
	const trackRef = useRef(null);

	const totalSlides = slides.length;

	const extendedSlides = [slides[totalSlides - 1], ...slides, slides[0]];

	useEffect(() => {
		slides.forEach((slide) => {
			const img = new Image();
			img.src = slide.url;
		});
	}, [slides]);

	function goToNext() {
		setCurrentIndex((prev) => prev + 1);
	}

	function goToPrevious() {
		setCurrentIndex((prev) => prev - 1);
	}

	useEffect(() => {
		const interval = setInterval(() => {
			goToNext();
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (currentIndex === totalSlides + 1) {
			setTimeout(() => {
				setIsTransitioning(false);
				setCurrentIndex(1);
			}, 500);
		}
		if (currentIndex === 0) {
			setTimeout(() => {
				setIsTransitioning(false);
				setCurrentIndex(totalSlides);
			}, 500);
		}
	}, [currentIndex, totalSlides]);

	useEffect(() => {
		if (!isTransitioning) {
			requestAnimationFrame(() => {
				setIsTransitioning(true);
			});
		}
	}, [isTransitioning]);

	return (
		<Link to="/sponsors">
			<div className="slider-container">
				<div
					className="arrow left"
					onClick={(e) => {
						e.preventDefault();
						goToPrevious();
					}}
				>
					←
				</div>

				<div className="slider-wrapper">
					<div
						ref={trackRef}
						className="slider-track"
						style={{
							transform: `translateX(-${currentIndex * 100}%)`,
							transition: isTransitioning
								? 'transform 0.5s ease-in-out'
								: 'none',
						}}
					>
						{extendedSlides.map((slide, index) => (
							<img key={index} src={slide.url} alt="" className="slide" />
						))}
					</div>
				</div>

				<div
					className="arrow right"
					onClick={(e) => {
						e.preventDefault();
						goToNext();
					}}
				>
					→
				</div>

				<div className="dots">
					{slides.map((_, index) => (
						<span
							key={index}
							className={index + 1 === currentIndex ? 'dot active' : 'dot'}
							onClick={() => setCurrentIndex(index + 1)}
						>
							•
						</span>
					))}
				</div>
			</div>
		</Link>
	);
};

export default ImageSlider;
