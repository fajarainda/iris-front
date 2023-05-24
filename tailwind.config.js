/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary' : '#1ABC9C',
        'soft-primary' : '#A028ED',
        'secondary' : '#5CD111',
        'soft-secondary' : '#75ED28',
        'error' : '#E6194D',
        'soft-error' : '#EB4770',
        'success' : '#62D862',
        'soft-succes' : '#8BE28B',
        'white' : '#FFFFFF',
        'dark-white' : '#F5F5F5',
        'soft-gray' : '#E8E9EB',
        'dark-gray' : '#AAAAAA',
        'soft-black' : '#212A3F',
        'light-black': '#263455',
        'black' : '#20263C'
        
      },

      fontFamily: {
        sans : ['Pitagon']
      }
    },
  },
  plugins: [],
}

