import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/app/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				orbitron: ['var(--font-orbitron)', 'sans-serif'],
			},
		},
	},

	plugins: [require('@tailwindcss/typography')],
};
export default config;
