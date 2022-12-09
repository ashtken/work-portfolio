/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primaryText: "#ffffff",
				secondaryText: "#aab6da",
				cta: "#50e4b2",
			},
		},
	},
	plugins: [],
};
