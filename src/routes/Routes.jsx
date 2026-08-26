import { lazy, Suspense } from 'react';

import App from '../App.jsx';
import Layout from '../layout/Layout.jsx';
import '../index.css';

// Only the home page and the shared layout are bundled up front, since those
// are what a first visit needs to paint. Every other route is fetched on
// demand, so landing on "/" no longer downloads the wrestling schedule, the
// booster form and the sponsor page.
//
// Each import points at its own file rather than the schedulePage barrel — a
// barrel import would pull all eight schedules into a single chunk.
const Sponsors = lazy(() => import('../components/homePage/Sponsors.jsx'));
const SchoolDistrict = lazy(
	() => import('../components/homePage/SchoolDistrict.jsx'),
);
const Contact = lazy(() => import('../components/homePage/Contact.jsx'));
const Updates = lazy(() => import('../components/homePage/Updates.jsx'));
const Boosters = lazy(() => import('../components/homePage/Boosters.jsx'));
const Schedule = lazy(() => import('../components/homePage/Schedule.jsx'));
const PlayersOfTheMonth = lazy(
	() => import('../components/homePage/PlayersOfTheMonth.jsx'),
);
const NotFound = lazy(() => import('../components/homePage/NotFound.jsx'));

const BoysBasketballSchedule = lazy(
	() => import('../components/schedulePage/BoysBasketballSchedule.jsx'),
);
const GirlsBballSchedule = lazy(
	() => import('../components/schedulePage/GirlsBballSchedule.jsx'),
);
const FootballSchedule = lazy(
	() => import('../components/schedulePage/FootballSchedule.jsx'),
);
const BaseballSchedule = lazy(
	() => import('../components/schedulePage/BaseballSchedule.jsx'),
);
const SoftballSchedule = lazy(
	() => import('../components/schedulePage/SoftballSchedule.jsx'),
);
const TrackSchedule = lazy(
	() => import('../components/schedulePage/TrackSchedule.jsx'),
);
const WrestlingSchedule = lazy(
	() => import('../components/schedulePage/WrestlingSchedule.jsx'),
);
const VolleyballSchedule = lazy(
	() => import('../components/schedulePage/VolleyballSchedule.jsx'),
);

function PageFallback() {
	return (
		<div
			role="status"
			aria-live="polite"
			style={{ padding: '3rem 1rem', textAlign: 'center' }}
		>
			Loading…
		</div>
	);
}

// Every route renders inside Layout; lazy ones also need a Suspense boundary.
const page = (Component, { eager = false } = {}) => (
	<Layout>
		{eager ? (
			<Component />
		) : (
			<Suspense fallback={<PageFallback />}>
				<Component />
			</Suspense>
		)}
	</Layout>
);

const Routes = [
	{ path: '/', element: page(App, { eager: true }) },
	{ path: '/sponsors', element: page(Sponsors) },
	{ path: '/schoolDistrict', element: page(SchoolDistrict) },
	{ path: '/contact', element: page(Contact) },
	{ path: '/playersOfTheMonth', element: page(PlayersOfTheMonth) },
	{ path: '/updates', element: page(Updates) },
	{ path: '/boosters', element: page(Boosters) },
	{ path: '/schedules', element: page(Schedule) },

	{ path: '/BOYS-BASKETBALLSchedule', element: page(BoysBasketballSchedule) },
	{ path: '/GIRLS-BASKETBALLSchedule', element: page(GirlsBballSchedule) },
	{ path: '/footballSchedule', element: page(FootballSchedule) },
	{ path: '/baseballSchedule', element: page(BaseballSchedule) },
	{ path: '/softballSchedule', element: page(SoftballSchedule) },
	{ path: '/trackSchedule', element: page(TrackSchedule) },
	{ path: '/wrestlingSchedule', element: page(WrestlingSchedule) },
	{ path: '/volleyballSchedule', element: page(VolleyballSchedule) },

	{ path: '*', element: page(NotFound) },
];

export default Routes;
