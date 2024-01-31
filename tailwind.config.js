/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      padding:{
        DEFAULT : '15px'
      }
    },
    extend: {
      colors: {
        'regal-blue': 'rgba(93, 112, 139)',
        'regal-blue2' : 'rgba(240, 248, 255)',
        'regal-blue3' : 'rgba(255, 255, 255)'
      },
      backgroundImage: {
        'hero': "url('/bg-flower.png')",
      },
      fontFamily:{
        'primary': ['Dancing Script'],
        'secondary': ['Noto Sans']
      }
    },
  },
  plugins: [],
}

