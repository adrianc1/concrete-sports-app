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
import '../index.css';
import Schedule from '../components/homePage/Schedule.jsx';
import PlayersOfTheMonth from '../components/homePage/PlayersOfTheMonth.jsx';
import Layout from '../layout/Layout.jsx';

const Routes = [
	{
		path: '/',
		element: (
			<Layout>
				<App />
			</Layout>
		),
	},
	{
		path: '/sponsors',
		element: (
			<Layout>
				<Sponsors />
			</Layout>
		),
	},
	{
		path: '/schoolDistrict',
		element: (
			<Layout>
				<SchoolDistrict />
			</Layout>
		),
	},
	{
		path: '/BOYS-BASKETBALLSchedule',
		element: (
			<Layout>
				<BoysBasketballSchedule />
			</Layout>
		),
	},
	{
		path: '/contact',
		element: (
			<Layout>
				<Contact />
			</Layout>
		),
	},
	{
		path: '/playersOfTheMonth',
		element: (
			<Layout>
				<PlayersOfTheMonth />
			</Layout>
		),
	},
	{
		path: '/updates',
		element: (
			<Layout>
				<Updates />
			</Layout>
		),
	},
	{
		path: '/boosters',
		element: (
			<Layout>
				<Boosters />
			</Layout>
		),
	},
	{
		path: '/schedules',
		element: (
			<Layout>
				<Schedule />
			</Layout>
		),
	},
	{
		path: '/GIRLS-BASKETBALLSchedule',
		element: (
			<Layout>
				<GirlsBballSchedule />
			</Layout>
		),
	},
	{
		path: '/footballSchedule',
		element: (
			<Layout>
				<FootballSchedule />
			</Layout>
		),
	},
	{
		path: '/baseballSchedule',
		element: (
			<Layout>
				<BaseballSchedule />
			</Layout>
		),
	},
	{
		path: '/softballSchedule',
		element: (
			<Layout>
				<SoftballSchedule />
			</Layout>
		),
	},
	{
		path: '/trackSchedule',
		element: (
			<Layout>
				<TrackSchedule />
			</Layout>
		),
	},
	{
		path: '/wrestlingSchedule',
		element: (
			<Layout>
				<WrestlingSchedule />
			</Layout>
		),
	},
	{
		path: '/volleyballSchedule',
		element: (
			<Layout>
				<VolleyballSchedule />
			</Layout>
		),
	},
];

export default Routes;
