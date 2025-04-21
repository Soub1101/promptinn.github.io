import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				heading: ["Poppins", "sans-serif"],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#2A9D8F',
					50: '#E3F4F2',
					100: '#C7E9E5',
					200: '#8FD3CB',
					300: '#57BCB0',
					400: '#2A9D8F',
					500: '#1F756B',
					600: '#196059',
					700: '#124A46',
					800: '#0A3430',
					900: '#051E1B',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#E9C46A',
					50: '#FCF8EF',
					100: '#F9F1DE',
					200: '#F3E3BE',
					300: '#EED59D',
					400: '#E9C46A',
					500: '#E3B23B',
					600: '#CD9A1B',
					700: '#9B7315',
					800: '#6A4F0F',
					900: '#382A08',
					foreground: '#264653'
				},
				accent: {
					DEFAULT: '#F4A261',
					50: '#FEEFE6',
					100: '#FCDFCE',
					200: '#FABE9D',
					300: '#F7A06B',
					400: '#F4A261',
					500: '#F1862F',
					600: '#D86B0F',
					700: '#A3510B',
					800: '#6F3707',
					900: '#3A1C04',
					foreground: '#264653'
				},
				destructive: {
					DEFAULT: '#E76F51',
					foreground: '#FFFFFF'
				},
				muted: {
					DEFAULT: '#F8F9FA',
					foreground: '#6C757D'
				},
				popover: {
					DEFAULT: '#FFFFFF',
					foreground: '#264653'
				},
				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#264653'
				},
				sidebar: {
					DEFAULT: '#F8F9FA',
					foreground: '#264653',
					primary: '#2A9D8F',
					'primary-foreground': '#FFFFFF',
					accent: '#F8F9FA',
					'accent-foreground': '#264653',
					border: '#E9ECEF',
					ring: '#2A9D8F'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'slide': 'slide 15s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
