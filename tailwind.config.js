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
        green: "#c9fa75",
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
        border: {
          DEFAULT: '#111111'
        },
        yellow: {
          DEFAULT: '#FFCC4D'
        },
        grey: '#6B7280'
      },
      fontFamily: {
        'sans': ['Eudoxus Sans', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '2sm': '1.25rem',
      },
      boxShadow: {
        'navbar':'1px 1px 20px 1px #000'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
