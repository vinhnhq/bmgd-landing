import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-montserrat)"],
			},
			boxShadow: {
				elevation: "0px 3px 6px rgba(0,0,0,0.16), 0px 3px 6px rgba(0,0,0,0.23)",
			},
			colors: {
				brand: {
					redPrimary: "#f24444",
					redSecondary: "#d71d22",
					gray: "#cccccc",
				},
				text: {
					primary: "#000000",
					secondary: "#58595d",
				},
				bg: {
					primary: "#ffffff",
					secondary: "#ededed",
					accent: "#ffeac8",
				},
				functional: {
					link: "#d71d22",
					border: "#000000",
				},
				neutral: {
					gray: {
						50: "#F2F4F7",
						100: "#D0D5DD",
						200: "#98A2B3",
						300: "#667085",
						400: "#344054",
					},
				},
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "#F24444",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
			keyframes: {
				"slide-down": {
					"0%": { transform: "translateY(-10px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
			},
			animation: {
				"slide-down": "slide-down 0.3s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
} satisfies Config;
