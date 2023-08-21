/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				bgblack: "#181818",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				anton: ["Anton", "sans-serif"],
			},
		},
	},
	plugins: [],
};
