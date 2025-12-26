import { useState } from 'react';
import BackToMainScheduleBtn from './BackToMainScheduleBtn';
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem } from 'react-bootstrap';
import Header from '../../layout/Header';
import SideNavBar from '../../layout/SideNavBar';
import ComingSoon from '../../layout/ComingSoon';
import 'bootstrap/dist/css/bootstrap.min.css';
import './schedulePage.css';

function SchedulePage({ sportName, games, logo }) {
	const [showNav, setShowNav] = useState(false);
	const [showExitIcon, setShowExitIcon] = useState(false);

	return (
		<>
			{/* <Header
				toggleNav={() => setShowNav(!showNav)}
				toggleIcon={() => setShowExitIcon(!showExitIcon)}
				logo={logo}
				display={showExitIcon}
			/> */}
			<SideNavBar show={showNav} logo={logo} />
			<ListGroup>
				<BackToMainScheduleBtn />
				<h2 className="sport-title">{sportName}</h2>

				{/* If no games, show ComingSoon */}
				{!games || games.length === 0 ? (
					<ComingSoon />
				) : (
					games
						.sort((a, b) => {
							const dateA = new Date(a.date);
							const dateB = new Date(b.date);
							return dateA.getTime() - dateB.getTime();
						})
						.map((game, index) => (
							<ListGroupItem key={index} className="game">
								<div className="game-info">
									<div>
										<div>{game.date}</div>
										<div>{game.time}</div>
									</div>
									<div>
										{game.location?.includes('Away') ? '@' : ''} {game.opponent}
									</div>
									<div
										style={{
											color: game.result?.includes('W')
												? 'green'
												: game.result?.includes('L')
												? 'red'
												: 'black',
										}}
									>
										{game.result}
									</div>
								</div>
								{/* {game.watchLink !== 'n/a' && (
									<a
										href={game.watchLink}
										target="_blank"
										rel="noopener noreferrer"
										className="watch-button"
									>
										🎥 Watch Live
									</a>
								)} */}
							</ListGroupItem>
						))
				)}
			</ListGroup>
		</>
	);
}

export default SchedulePage;
