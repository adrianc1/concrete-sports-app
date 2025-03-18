import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import SchedulePage from './components/schedulePage/SchedulePage.jsx';
import Boosters from './components/boosters/Boosters.jsx';
import './index.css';
import App from './App.jsx';
import SportsHome from './components/mainPage/SportsHome.jsx';
import Announcements from './components/mainPage/Announcements.jsx';
import Calendar from './components/mainPage/Calendar.jsx';
import Standings from './components/mainPage/Standings.jsx';
import Photos from './components/mainPage/Photos.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/SportsHome" element={<SportsHome />}></Route>
				<Route path="/Announcements" element={<Announcements />}></Route>
				<Route path="/SchedulePage" element={<SchedulePage />}></Route>
				<Route path="/Calendar" element={<Calendar />}></Route>
				<Route path="/Standings" element={<Standings />}></Route>
				<Route path="/Photos" element={<Photos />}></Route>
				<Route path="/Boosters" element={<Boosters />}></Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
