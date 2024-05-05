/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		minHeight: {
			0: "0",
			"1/4": "25%",
			"1/2": "50%",
			"3/4": "75%",
			full: "100%",
		},
		minWidth: {
			0: "0",
			"1/4": "25%",
			"1/2": "50%",
			"3/4": "75%",
			full: "100%",
		},
		backgroundSize: {
			auto: "auto",
			cover: "cover",
			contain: "contain",
			"50%": "50%",
			16: "4rem",
			25: "25px 25px",
		},
		backgroundImage: {
			"gradient-radial": "radial-gradient(#bfc0c1 7.2%, transparent 0)",
		},
	},
	plugins: [],
};
