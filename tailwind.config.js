/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			dropShadow: {
				cmd: '0px 0px 10px 5px rgba(255,0,0,0.5)',
			},
		},
	},
	plugins: [require('tailwind-scrollbar-hide')],
};
