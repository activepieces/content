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
      spacing:
      {
        '37.5': '9.375rem',
        '25': "6.25rem",
        '2.5':'0.625rem',
        '15':'3.75rem',
        '30': '7.5rem',
      },
      colors: {
        black: '#111111',
        primary: { DEFAULT: '#6e41e2', medium:'#ab90ee', light: '#eee9fc', dark: '#6838e0','10':'rgba(110, 65, 226, 0.1)' },
        green: "#c9fa75",
        divider: "rgba(17, 17, 17, 0.30)",
        card: {
          DEFAULT: '#232429',
        },
        whiteCard: {
          100: '#F7F7F7',
        },
        danger:{
          DEFAULT: 'rgb(253, 155, 157)',
          dark: 'rgb(255, 89, 92)'
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
        grey: '#6B7280',
        white: '#FFFFFF',
      },
      fontFamily: {
        'sans': ['Lato', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'page-title-lg': [
          '5rem',
          {
            lineHeight: '5.625rem',
            fontWeight: '700',
          }
        ],
        'page-title-sm': [
          '3.125rem',
          {
            lineHeight: '3.75rem',
            fontWeight: '700',
          }
        ],
        '2sm': '1.25rem',
        'h1-sm': ['36px',{
          lineHeight: '43.2px',
          fontWeight: '700',
        }],
        'h1-lg': ['50px',{
          lineHeight: '60px',
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
          lineHeight: '31.2px',
          letterSpacing: '0.65px',
          fontWeight: '700',
        }],
        'h3-lg': ['34px',{
          lineHeight: '40.8px',
          letterSpacing: '0.85px',
          fontWeight: '700',
        }],
        'h4-sm': ['22px',{
          lineHeight: '26.4px',
          letterSpacing: '0.55px',
          fontWeight: '700',
        }],
        'h4-lg': ['30px',{
          lineHeight: '60px',
          letterSpacing: '0.75px',
          fontWeight: '700',
        }],
        'h5-sm': ['18px',{
          lineHeight: '28px',
          letterSpacing: '0.45px',
          fontWeight: '700',
        }],
        'h5-lg': ['26px',{
          lineHeight: '60px',
          letterSpacing: '0.65px',
          fontWeight: '700',
        }],
        'h6-sm': ['16px',{
          lineHeight: '26.4px',
          letterSpacing: '0.4px',
          fontWeight: '400',
        }],
        'h6-lg': ['22px',{
          lineHeight: '26.4px',
          letterSpacing: '0.55px',
          fontWeight: '400',
        }],
      },
    container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1320px',
          '2xl': '1320px',
        },
        width:{
          sm: '85%',
          md: '85%',
          lg: '85%',
          xl: '85%',
          '2xl': '90%',
        }
      },
      boxShadow: {
        'navbar':'1px 1px 20px 1px #000'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')
],
}
