import { Link } from 'react-router';
import './ScheduleBtn.css';
export default function BackToMainScheduleBtn() {
	return (
		<Link to="/Schedules">
			<button className="schedule-btn">← Schedules</button>
		</Link>
	);
}
