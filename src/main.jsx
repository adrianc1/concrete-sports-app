import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import SchedulePage from './components/schedulePage/SchedulePage.jsx';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/SchedulePage" element={<SchedulePage />}></Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
