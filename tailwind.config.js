/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			keyframes: {
				blink: {
					'0%': {
						opacity: 1,
					},
					'50%': {
						opacity: 0,
					},
					'100%': {
						opacity: 1,
					},
				},
			},
			animations: {
				blink: 'blink 1s infinite',
			},
			dropShadow: {
				cmd: '0 0 5px #ff0000',
			},
		},
	},
	plugins: [require('tailwind-scrollbar-hide')],
};
