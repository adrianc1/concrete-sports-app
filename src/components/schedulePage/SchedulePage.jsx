import { useState } from 'react';
import BackToMainScheduleBtn from './BackToMainScheduleBtn';
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem } from 'react-bootstrap';
import SideNavBar from '../../layout/SideNavBar';
import ComingSoon from '../../layout/ComingSoon';
import 'bootstrap/dist/css/bootstrap.min.css';
import './schedulePage.css';

function SchedulePage({ sportName, games, logo, record }) {
	const [showNav, setShowNav] = useState(false);

	return (
		<>
			<SideNavBar show={showNav} logo={logo} />
			<ListGroup>
				<BackToMainScheduleBtn />
				<h2 className="sport-title">{sportName}</h2>
				<h5 className="sport-record">Record: {record}</h5>

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
									<div className="opponent-venue-container">
										{game.home_away?.includes('Away') ? '@' : ''}{' '}
										{game.opponent}
										<div className="game-venue">Venue: {game.location}</div>
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
							</ListGroupItem>
						))
				)}
			</ListGroup>
		</>
	);
}

export default SchedulePage;
