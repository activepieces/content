/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage :{
        'planets-bg': "url('/planets-bg.svg')",
      },
      backgroundPosition: {
      'center-top':'center top',
      },
      backgroundSize: {
        '100': '100%',
      },
      colors: {
        primary: { DEFAULT: '#6e41e2', medium:'#ab90ee', light: '#eee9fc', dark: '#6838e0','10':'rgba(110, 65, 226, 0.1)' },
        card: {
          DEFAULT: '#232429',
        },
        whiteCard: {
          100: '#F7F7F7',
        },
        muted: {
          DEFAULT: '#828282',
        },
        outline: {
          DEFAULT: '#0000001F'
        },
        separator: {
          DEFAULT: '#FFFFFF21',
        },
        yellow: {
          DEFAULT: '#FFCC4D'
        },
        green: {
          DEFAULT: '#06FFB4'
        }
      },
      fontFamily: {
        'sans': ['Eudoxus Sans', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '2sm': '1.25rem',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
