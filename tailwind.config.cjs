/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {
        fontFamily: {
            'sans' : ['Sora',defaultTheme.fontFamily.sans]
        },
        colors : {
          mainbg : '#111822',
          maintexto: '#FF6B00',
          maintextb: '#152e58',
          startor: 'rgb(255, 107, 0,1)',
          endbl : 'rgb(0, 102, 255,0.25)',
          desc : '#818181',
          features : '#1e293b',
          featstitle : 'hsl(217, 33%, 84%)',
          featsdesc : 'hsl(217, 33%, 64%)'
        },
    },
},
darkMode: 'class',
  plugins: [],
}
