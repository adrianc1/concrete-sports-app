import { Trophy } from 'lucide-react';
import './comingsoon.css';

export default function ComingSoon() {
	return (
		<div className="coming-soon-container">
			<h3 className="coming-soon-title">Schedule Coming Soon!</h3>
			<div className="coming-soon-icon">
				<Trophy size={80} />
			</div>
		</div>
	);
}
