import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import games from '../webScraper/games.json';
import logo from '../../assets/Concrete-Logo.png';
import './schedulePage.css';
import { ListGroupItem } from 'react-bootstrap';
import Header from '../header/Header';
import SideNavBar from '../sideNavBar/SideNavBar';
import '../header/header.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

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
						{game.date}
						<br />
						{game.opponent}
						<br />
						{game.location}
						<br />
						{game.result}
					</ListGroupItem>
				))}
			</ListGroup>
		</>
	);
}

// const root = document.getElementById('root');
// createRoot(root).render(
// 	<StrictMode>
// 		<Schedule />
// 	</StrictMode>
// );

export default Schedule;
