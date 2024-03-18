/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'fuzzy-bubbles': ['Fuzzy Bubbles', 'cursive'],
        'mali': ['Mali', 'cursive'],
        'press-start-2p': ['Press Start 2P', 'cursive'],
        'bungee-shade': ['Bungee Shade', 'cursive'],
        'rampart-one': ['Rampart One', 'cursive'],
        'rubik-moonrocks': ['Rubik Moonrocks', 'cursive'],
      },
      scrollBehavior: ['smooth'],
    },
  },
  plugins: [],
};
