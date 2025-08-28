import App from '../App.jsx';
import {
	BoysBasketballSchedule,
	GirlsBballSchedule,
	BaseballSchedule,
	FootballSchedule,
	SoftballSchedule,
	TrackSchedule,
	VolleyballSchedule,
	WrestlingSchedule,
} from '../components/schedulePage';
import SchoolDistrict from '../components/homePage/SchoolDistrict.jsx';
import Boosters from '../components/homePage/Boosters.jsx';

import Sponsors from '../components/homePage/Sponsors.jsx';
import Contact from '../components/homePage/Contact.jsx';
import Updates from '../components/homePage/Updates.jsx';
import IFrame from '../components/iframe/IFrame.jsx';
import '../index.css';
import Schedule from '../components/homePage/Schedule.jsx';
import PlayersOfTheMonth from '../components/homePage/PlayersOfTheMonth.jsx';

const Routes = [
	{
		path: '/',
		element: <App />,
	},
	{ path: '/sponsors', element: <Sponsors /> },
	{ path: '/schoolDistrict', element: <SchoolDistrict /> },
	{ path: '/schedulePage', element: <BoysBasketballSchedule /> },
	{ path: '/contact', element: <Contact /> },
	{ path: '/playersOfTheMonth', element: <PlayersOfTheMonth /> },
	{ path: '/updates', element: <Updates /> },
	{ path: '/boosters', element: <Boosters /> },
	{ path: '/schedules', element: <Schedule /> },
	{ path: '/girlsBballSchedule', element: <GirlsBballSchedule /> },
	{ path: '/footballSchedule', element: <FootballSchedule /> },
	{ path: '/baseballSchedule', element: <BaseballSchedule /> },
	{ path: '/softballSchedule', element: <SoftballSchedule /> },
	{ path: '/trackSchedule', element: <TrackSchedule /> },
	{ path: '/wrestlingSchedule', element: <WrestlingSchedule /> },
	{ path: '/volleyballSchedule', element: <VolleyballSchedule /> },
];

export default Routes;
