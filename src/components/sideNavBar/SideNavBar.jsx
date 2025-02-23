import ListGroup from 'react-bootstrap/ListGroup';
import './sideNavBar.css';
import { Link } from 'react-router';

function SideNavBar({ show, logo }) {
	return (
		<ListGroup className={show ? 'side-nav active' : 'side-nav'}>
			<img src={logo} alt="Logo" className="logo" />

			<ListGroup.Item>
				<Link to="/">Home</Link>
			</ListGroup.Item>

			<ListGroup.Item>
				<Link to="/SchedulePage">Schedule</Link>
			</ListGroup.Item>

			<ListGroup.Item
				action
				href="https://www.concrete.k12.wa.us/hs-calendar-grid/"
			>
				Calendar
			</ListGroup.Item>

			<ListGroup.Item
				action
				href="https://www.maxpreps.com/wa/concrete/concrete-lions/basketball/standings/"
			>
				Standings
			</ListGroup.Item>

			<ListGroup.Item action href="#">
				Contact Us
			</ListGroup.Item>
		</ListGroup>
	);
}

export default SideNavBar;
