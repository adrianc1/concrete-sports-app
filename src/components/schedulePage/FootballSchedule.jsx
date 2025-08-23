import { useState } from 'react';
import BackToMainScheduleBtn from './BackToMainScheduleBtn';
import ListGroup from 'react-bootstrap/ListGroup';
import games from '../../utils/webScraper/footballGames.json';
import logo from '../../assets/Concrete-Logo.png';
import { ListGroupItem } from 'react-bootstrap';
import Header from '../../layout/Header';
import SideNavBar from '../../layout/SideNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './schedulePage.css';

function FootballSchedule() {
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
				<BackToMainScheduleBtn />
				<h2 className="sport-title">Football</h2>
				{games.map((game, index) => (
					<ListGroupItem key={index} className="game">
						<div>{game.date}</div>
						<div>
							{game.location.includes('Away') ? '@' : ''} {'  '}
							{game.opponent}
						</div>
						<div>{game.result}</div>
					</ListGroupItem>
				))}
			</ListGroup>
		</>
	);
}

export default FootballSchedule;
