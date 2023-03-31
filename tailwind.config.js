module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  theme: {
    extend: {
      colors: {
        sky: {
          500: '#0EB2EF',
          600: '#08a2db',
          900: '#312e81',
          990: '#18253d',
        },
      },
      fontFamily: {
        sans: "'DM Sans',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
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
      lineHeight: {
        loose: '1.875',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
