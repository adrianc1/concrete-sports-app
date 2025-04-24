import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			workbox: {
				cleanupOutdatedCaches: true,
				clientsClaim: true,
				skipWaiting: true,
			},
			manifest: {
				name: 'Concrete Sports App',
				short_name: 'Concrete Sports App',
				start_url: '/',
				display: 'standalone',
				background_color: '#ffffff',
				theme_color: '#420a72',
				lang: 'en',
				scope: '/',
				icons: [
					{
						src: '/icons/manifest-icon-512.maskable.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
					{
						src: '/icons/manifest-icon-192.maskable.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any maskable',
					},
				],
			},
		}),
	],
});
