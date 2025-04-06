/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			color1: '#646cff',
			colorHover: '#535bf2',
			colorFilter: '#61dafbaa',
		},
		extend: {
			gridTemplateColumns: {
				layoutField: 'repeat(3, minmax(0, 100px))',
			},
		},
		fontFamily: {
			sans: [
				'Inter',
				'system-ui',
				'Avenir',
				'Helvetica',
				'Arial',
				'sans-serif',
			],
		},
	},
	plugins: [],
}
