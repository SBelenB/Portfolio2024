/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'main-grey': '#1E1E1E',
				'main-purple': '#986F93',
				'main-pink': '#c97b97',
				'cta-purple': '#924BB4',
				'light-pink': '#F1C1F1',
				'cta-purple-dk': '#522f61',
			},
		},
	},
	plugins: [],
}
