import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import games from '../webScraper/games.json';
import logo from '../../assets/Concrete-Logo.png';
import { ListGroupItem } from 'react-bootstrap';
import Header from '../header/Header';
import SideNavBar from '../sideNavBar/SideNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './schedulePage.css';

function Schedule() {
	const [showNav, setShowNav] = useState(false);
	const [showExitIcon, setShowExitIcon] = useState(false);
	return (
		<>
			<Header
				toggleNav={() => setShowNav(!showNav)}
				toggleIcon={() => setShowExitIcon(!showExitIcon)}
				logo={logo}
				display={showExitIcon}
			/>
			<SideNavBar show={showNav} logo={logo} />
			<ListGroup>
				{games.map((game, index) => (
					<ListGroupItem key={index} className="game">
						<div>{game.date}</div>
						<div>{game.opponent}</div>
						<div>{game.result}</div>
						{/* {game.location} */}
					</ListGroupItem>
				))}
			</ListGroup>
		</>
	);
}

export default Schedule;
