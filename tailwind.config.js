/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		fontFamily: {
			body: "GeneralSans",
		},
		extend: {
			borderRadius: {
				'2lg': '0.625rem',
			},
			colors: {
				blue: {
					DEFAULT: "#1376f8",
					dark: "#011632",
					sky: "#25b4f8",
					light: "#e6f6fe",
				},
				white: "#fff",
				text: "#3c4959",
				success: "#17bf28",
				warnint: "#ec942c",
				error: "#e52323",
				border: "#d0d5dd",
				placeholder: "#667085",
				gray: {
					DEFAULT: "#aeaeae",
					50: "#cfcfcf",
					100: "#cecece",
				},
			},
			fontSize: {
				h1: [
					"3.875rem",
					{
						lineHeight: '1.2',
						fontWeight: '600',
						letterSpacing: '-2%',
					},
				],
				h2: [
					"2.625rem",
					{
						lineHeight: '1.25',
						fontWeight: '500',
						letterSpacing: '0',
					},
				],
				h3: [
					"2.25rem",
					{
						lineHeight: '1.55',
						fontWeight: '400',
						letterSpacing: '0',
					},
				],
				h4: [
					"1.5rem",
					{
						lineHeight: '1.5',
						fontWeight: '400',
						letterSpacing: '0',
					},
				],
				b1: [
					"1.125rem",
					{
						lineHeight: '1.55',
						fontWeight: '400',
						letterSpacing: '1.5%',
					},
				],
				b2: [
					"1rem",
					{
						lineHeight: '1.55',
						fontWeight: '400',
						letterSpacing: '1.5',
					},
				],
				b3: [
					"0.875rem",
					{
						lineHeight: '1.55',
						fontWeight: '400',
						letterSpacing: '2%',
					},
				],
				b4: [
					"0.75rem",
					{
						lineHeight: '1.55',
						fontWeight: '400',
						letterSpacing: '1.5%',
					},
				],
			},
			maxWidth: {
				max: "1440px",
				contant: "1280px",
			},
			width: {
				'12.5': '3.125rem',
				'94': '23.5rem'
			},
			boxShadow: {
				userMessageCard: '0 8px 40px 0 rgba(0, 0, 0, 0.1) ',
				firstScreenCircle: '0 4px 4px 0 rgba(0, 0, 0, 10%)'
			},
			animation: {
				'spin-slow': 'spin 100s linear infinite',
				'spin-slow-reverse': 'spin-reverse 100s linear infinite',
			},
			keyframes: {
				'spin-reverse': {
					'0%': {transform: 'rotate(360deg)'},
					'100%': {transform: 'rotate(0deg)'},
				}
			},
			aspectRatio: {
				'3/1.2': '3 / 1.2'
			}
		},
	},
	plugins: [],
};
