import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { registerSW } from 'virtual:pwa-register';
import 'bootstrap/dist/css/bootstrap.min.css';
import SchedulePage from './components/schedulePage/SchedulePage.jsx';
import SchoolDistrict from './components/mainPage/SchoolDistrict.jsx';
import Boosters from './components/boosters/Boosters.jsx';
import './index.css';
import App from './App.jsx';
import Sponsors from './components/mainPage/Sponsors.jsx';
import Contact from './components/mainPage/Contact.jsx';
import PlayersOfTheMonth from './components/mainPage/playersOfTheMonth.jsx';
import Photos from './components/mainPage/Photos.jsx';
import IFrame from './components/iframe/IFrame.jsx';

if ('serviceWorker' in navigator) {
	// && !/localhost/.test(window.location)) {
	registerSW();
}

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
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
				<Route path="/Photos" element={<Photos />}></Route>
				<Route path="/Boosters" element={<Boosters />}></Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
