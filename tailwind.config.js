/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '400px', 
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
     
    },
    extend: {
      colors :{
        coral: '#98FF98',
        customBlue :'#92C7CF',
        customBlue2 :'#B2A59B',
        customSecondBlue : '#AAD7D9',
        customWhile :'#FBF9F1',
        customFooter :'#E5E1DA',
      }
    },

  },
  plugins: [],
}