/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {},
		colors: {
			'main-purple': '#986f93',
			'cta-purple': '#924bb4'
		},
	},
	plugins: [],
}
