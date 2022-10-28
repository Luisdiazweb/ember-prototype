/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.hbs'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        lightOriginal: {
          primary: '#9333ea',
          secondary: '#e7ebf4',
          light: '#FFFFFF',
          dark: '#000000',
          accent: '#FFFFFF',
          neutral: '#f3f4f6',
          'base-100': '#ffffff',
        },
        darkOriginal: {
          primary: '#9333ea',
          secondary: '#475569',
          light: '#000000',
          dark: '#FFFFFF',
          accent: '#0f172a',
          neutral: '#1e293b',
          'base-100': '#ffffff',
        },
      },
      'dark',
      'cupcake',
    ],
  },
};
