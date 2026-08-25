import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './imageSlider.css';
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';

const ImageSlider = ({ slides }) => {
	const [currentIndex, setCurrentIndex] = useState(1);
	const [isTransitioning, setIsTransitioning] = useState(true);
	const trackRef = useRef(null);

	const totalSlides = slides.length;

	const extendedSlides = [slides[totalSlides - 1], ...slides, slides[0]];

	// This used to eagerly `new Image()` every slide on mount, pulling ~224KB and
	// starving the one slide actually on screen. The browser fetches the rest as
	// the track scrolls them in.

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
				<button
					type="button"
					className="arrow left"
					aria-label="Previous sponsor"
					onClick={(e) => {
						e.preventDefault();
						goToPrevious();
					}}
				>
					<ChevronLeft size={20} aria-hidden="true" />
				</button>

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
						{extendedSlides.map((slide, index) => {
							// extendedSlides is [last, ...slides, first], so index 1 is the
							// slide painted first and the LCP candidate.
							const isFirstPainted = index === 1;
							return (
								<img
									key={index}
									src={slide.url}
									alt=""
									width={1200}
									height={600}
									className="slide"
									loading={isFirstPainted ? 'eager' : 'lazy'}
									fetchPriority={isFirstPainted ? 'high' : 'low'}
									decoding={isFirstPainted ? 'sync' : 'async'}
								/>
							);
						})}
					</div>
				</div>

				<button
					type="button"
					className="arrow right"
					aria-label="Next sponsor"
					onClick={(e) => {
						e.preventDefault();
						goToNext();
					}}
				>
					<ChevronRight size={20} aria-hidden="true" />
				</button>

				{/* Position indicators only. Not interactive, so they are hidden from
				    assistive tech and are not measured as tap targets. */}
				<div className="dots" aria-hidden="true">
					{slides.map((_, index) => (
						<span
							key={index}
							className={index + 1 === currentIndex ? 'dot active' : 'dot'}
						>
							<Circle size={8} fill={index + 1 === currentIndex ? 'currentColor' : 'none'} />
						</span>
					))}
				</div>
			</div>
		</Link>
	);
};

export default ImageSlider;
