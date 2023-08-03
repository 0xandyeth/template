/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
  
    extend: {
      bgGradientDeg:{
          75:'75deg'
      },
      colors:{
        "dark-purple":'#24262B',
        "light-white":'rgba(255,255,0.18)',
        vuejs:{
          100:'#3ec964',
          900:'#3ac834'
        },
        spacing:{
          '1':'20px',
          '2':'28px'
        },
       },
    },
  },
  plugins: [
     plugin(function({matchUtilities,theme}){
        matchUtilities(
          {
            'bg-gradient':(angle)=>({
              'background-image':`linear-gradient(${angle}, var(--tw-gradient-stops))`,
            })
          },{

            values:Object.assign(
              theme('bgGradientDeg',{}),
              {
                10:'10deg',
                15:'15deg',
                26:'26.79deg',
                19:'19.92deg'
              }
            )
          }
        )
     })
  ],
}

