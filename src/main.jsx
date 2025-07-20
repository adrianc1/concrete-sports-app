import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Router, RouterProvider } from 'react-router';
import { registerSW } from 'virtual:pwa-register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/Routes.jsx';

const updateSW = registerSW({
	onNeedRefresh() {
		const shouldUpdate = confirm(
			'A new version of the app is available. Reload to update?'
		);
		if (shouldUpdate) {
			updateSW(true);
		}
	},
	onOfflineReady() {
		console.log('App is ready to use offline!');
	},
});

const router = createBrowserRouter(Routes);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
		{/* <BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />

				<Route path="/Sponsors" element={<Sponsors />}></Route>

				<Route path="/SchoolDistrict" element={<SchoolDistrict />}></Route>
				<Route path="/IFrame" element={<IFrame />} />
				<Route path="/SchedulePage" element={<SchedulePage />}></Route>
				<Route path="/Contact" element={<Contact />}></Route>
				<Route
					path="/PlayersOfTheMonth"
					element={<PlayersOfTheMonth />}
				></Route>
				<Route path="/Updates" element={<Updates />}></Route>
				<Route path="/Boosters" element={<Boosters />}></Route>
				<Route
					path="/GirlsBballSchedule"
					element={<GirlsBballSchedule />}
				></Route>
				<Route path="/FootballSchedule" element={<FootballSchedule />}></Route>
				<Route path="/BaseballSchedule" element={<BaseballSchedule />}></Route>
				<Route path="/SoftballSchedule" element={<SoftballSchedule />}></Route>
				<Route path="/TrackSchedule" element={<TrackSchedule />}></Route>
				<Route
					path="/WrestlingSchedule"
					element={<WrestlingSchedule />}
				></Route>
				<Route
					path="/VolleyballSchedule"
					element={<VolleyballSchedule />}
				></Route>
			</Routes>
		</BrowserRouter> */}
	</StrictMode>
);
