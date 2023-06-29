/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
