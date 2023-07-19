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
        black: '#111112',
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
        yellow: {
          DEFAULT: '#FFCC4D'
        },
        grey: '#6B7280',
        white: '#FFFFFF',
      },
      fontFamily: {
        'sans': ['Lato', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '2sm': '1.25rem',
        'h1-sm': ['36px',{
          lineHeight: '43.2px',
          letterSpacing: '2.5%',
          fontWeight: '700',
        }],
        'h1-lg': ['50px',{
          lineHeight: '60px',
          letterSpacing: '2.5%',
          fontWeight: '700',
        }],
        'h2-sm': ['32px',{
          lineHeight: '38.4px',
          letterSpacing: '0.8px',
          fontWeight: '700',
        }],
        'h2-lg': ['46px',{
          lineHeight: '60px',
          letterSpacing: '1.15px',
          fontWeight: '700',
        }],
        'h3-sm': ['26px',{
          lineHeight: '60px',
          letterSpacing: '0.65px',
          fontWeight: '700',
        }],
        'h3-lg': ['34px',{
          lineHeight: '60px',
          letterSpacing: '0.85px',
          fontWeight: '700',
        }],
        'h4-sm': ['22px',{
          lineHeight: '120%',
          letterSpacing: '0.55px',
          fontWeight: '700',
        }],
        'h4-lg': ['30px',{
          lineHeight: '60px',
          letterSpacing: '0.75px',
          fontWeight: '700',
        }],
        'h5-sm': ['18px',{
          lineHeight: '60px',
          letterSpacing: '0.45px',
          fontWeight: '700',
        }],
        'h5-lg': ['26px',{
          lineHeight: '60px',
          letterSpacing: '0.65px',
          fontWeight: '700',
        }],
        'h6-sm': ['16px',{
          lineHeight: '60px',
          letterSpacing: '0.4px',
          fontWeight: '700',
        }],
        'h6-lg': ['22px',{
          lineHeight: '60px',
          letterSpacing: '0.55px',
          fontWeight: '700',
        }],
      },
      boxShadow: {
        'navbar':'1px 1px 20px 1px #000'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
