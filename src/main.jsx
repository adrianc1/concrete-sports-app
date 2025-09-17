import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { registerSW } from 'virtual:pwa-register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/Routes.jsx';

const updateSW = registerSW({
	immediate: true,
	onOfflineReady() {
		console.log('App is ready to use offline!');
	},
	onRegisteredSW(swUrl, r) {
		console.log('SW registered:', swUrl);
		// Force check for updates on registration
		r && r.update();
	},
	onRegisterError(error) {
		console.log('SW registration error', error);
	},
});

const router = createBrowserRouter(Routes);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
