import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import games from '../../utils/webScraper/girlsBballGames.json';
import logo from '../../assets/Concrete-Logo.png';
import { ListGroupItem } from 'react-bootstrap';
import Header from '../../layout/Header';
import SideNavBar from '../../layout/SideNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './schedulePage.css';
import { Trophy } from 'lucide-react';

function GirlsBballSchedule() {
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
				<h2>Girls Basketball</h2>
				<h3 className="coming-soon">Schedule Coming Soon!</h3>
				<div className="coming-soon-icon">
					<Trophy size={100} />
				</div>
				{/* {games.map((game, index) => (
					<ListGroupItem key={index} className="game">
						<div>{game.date}</div>
						<div>
							{game.location.includes('Away') ? '@' : ''} {'  '}
							{game.opponent}
						</div>
						<div>{game.result}</div>
					</ListGroupItem>
				))} */}
			</ListGroup>
		</>
	);
}

export default GirlsBballSchedule;
