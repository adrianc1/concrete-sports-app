import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			manifest: {
				icons: [
					{
						src: 'https://sportshub2-uploads.vnn-prod.zone/files/sites/2894/2020/12/09061207/Concrete-Logo.png',
						sizes: '36x36, 96x96, 512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
				],
			},
		}),
	],
});
