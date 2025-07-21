import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
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
	</StrictMode>
);
