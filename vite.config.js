import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: 'auto',
			manifest: {
				name: 'Concrete Sports App', // Required
				short_name: 'Concrete Sports App', // Required
				start_url: '/', // Required
				display: 'standalone', // Recommended
				background_color: '#ffffff', // Recommended
				theme_color: '#420a72', // Recommended
				lang: 'en', // Recommended
				scope: '/', // Recommended
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
			// includeAssets: [
			// 	'./public/icons/concretelogo.png',
			// 	'./src/assets/actonelogo.jpg',
			// 	'./src/assets/cascadesupplylogo.jpg',
			// ],

			workbox: {
				runtimeCaching: [
					{
						urlPattern: /\.(png|jpe?g|svg|gif|webp)$/i,
						handler: 'CacheFirst',
						options: {
							cacheName: 'image-cache',
							expiration: {
								maxEntries: 150,
								maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
							},
							cacheableResponse: {
								statuses: [0, 200],
							},
						},
					},
					{
						urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i, // Google Fonts API
						handler: 'CacheFirst',
						options: {
							cacheName: 'google-fonts-cache',
							cacheableResponse: {
								statuses: [0, 200],
							},
						},
					},
					{
						urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i, // Google Fonts files
						handler: 'CacheFirst',
						options: {
							cacheName: 'gstatic-fonts-cache',
							cacheableResponse: {
								statuses: [0, 200],
							},
						},
					},
				],
			},
		}),
	],
});
