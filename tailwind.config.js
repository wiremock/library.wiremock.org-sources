module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  safelist: ["lg:col-span-2", "lg:col-span-3", "lg:col-span-4", "xl:grid-cols-4", "xl:col-span-4"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          // 50: '#F8F5FF',
          100: '#e0e7ff',
          // 200: '#c7d2fe',
          // 400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          // 700: '#4f46e5',
          // 900: '#150042',
          // 800: '#2F225F',
          // 940: '#1A094A',
          // 960: '#170545',
          // 900: '#150042',

        },
        sky: {
          500: '#0EB2EF',
          900: '#312e81',
        },
        accent: {
          400: '#F59121',
          500: '#ee850f',
        },
      },
      fontFamily: {
        sans: "'DM Sans',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
        // serif: ["PT Serif", "serif"],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.875rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.875rem', { lineHeight: '1.2' }],
        '7xl': ['4.5rem', { lineHeight: '1.1872' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      letterSpacing: {
        'widest': '0.2em',
      },
      lineHeight: {
        loose: '1.875',
      },
      // maxWidth: ({ theme, breakpoints }) => ({
      //   '8xl': '84rem',
      //   ...breakpoints(theme('screens')),
      // }),


    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
  ],
};
