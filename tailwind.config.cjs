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
          mainbg : '#141414',
          maintexto: '#FF6B00',
          maintextb: '#152e58',
          startor: 'rgb(255, 107, 0,1)',
          endbl : 'rgb(0, 102, 255,0.25)',
          desc : '#818181',
          features : '#1e293b',
          featstitle : '#CBD5E1',
          featsdesc : '#A5AFBD'
        },
    },
},
darkMode: 'class',
  plugins: [],
}
