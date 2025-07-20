import App from '../App.jsx';
import {
	SchedulePage,
	GirlsBballSchedule,
	BaseballSchedule,
	FootballSchedule,
	SoftballSchedule,
	TrackSchedule,
	VolleyballSchedule,
	WrestlingSchedule,
} from '../components/schedulePage';
import SchoolDistrict from '../components/homePage/SchoolDistrict.jsx';
import Boosters from '../components/boosters/Boosters.jsx';

import Sponsors from '../components/homePage/Sponsors.jsx';
import Contact from '../components/homePage/Contact.jsx';
import PlayersOfTheMonth from '../components/homePage/PlayersOfTheMonth.jsx';
import Updates from '../components/homePage/Updates.jsx';
import IFrame from '../components/iframe/IFrame.jsx';
import '../index.css';

const Routes = [
	{
		path: '/',
		element: <App />,
	},
	{ path: '/Sponsors', element: <Sponsors /> },
	{ path: '/SchoolDistrict', element: <SchoolDistrict /> },
	{ path: '/IFrame', element: <IFrame /> },
	{ path: '/SchedulePage', element: <SchedulePage /> },
	{ path: '/Contact', element: <Contact /> },
	{ path: '/PlayersOfTheMonth', element: <PlayersOfTheMonth /> },
	{ path: '/Updates', element: <Updates /> },
	{ path: '/Boosters', element: <Boosters /> },
	{ path: '/GirlsBballSchedule', element: <GirlsBballSchedule /> },
	{ path: '/FootballSchedule', element: <FootballSchedule /> },
	{ path: '/BaseballSchedule', element: <BaseballSchedule /> },
	{ path: '/SoftballSchedule', element: <SoftballSchedule /> },
	{ path: '/TrackSchedule', element: <TrackSchedule /> },
	{ path: '/WrestlingSchedule', element: <WrestlingSchedule /> },
	{ path: '/VolleyballSchedule', element: <VolleyballSchedule /> },
];

export default Routes;
