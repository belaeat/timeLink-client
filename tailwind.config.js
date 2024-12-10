/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '14': 'repeat(14, minmax(0, 1fr))',
      },
      keyframes: {
        'flicker-fadeout': {
          '0%, 100%': { opacity: '1' },
          '20%, 45%, 55%, 65%': { opacity: '0' },
          '40%, 50%, 60%, 70%': { opacity: '1' },
          '90%': { opacity: '0' },
          '100%': { opacity: '0' },
        },
        'move-up': {
          '0%': { bottom: '0' },
          '80%': { bottom: 'calc(100% - 10px)' },
          '100%': { bottom: 'calc(100%)' },
        },
        'slide-out': {
          '0%, 85%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateX(-90%) translateY(-90px)' }
        },
      },
      animation: {
        'flicker-fadeout': 'flicker-fadeout 2s steps(10, end) 19s forwards',
        'move-up': 'move-up 3s ease-in-out 21.3s forwards',
        'slide-out': 'slide-out 1s ease-out 21.5s forwards'
      },
    },  
    fontFamily: {
      'body': ["Righteous", "Gill Sans", "Gill Sans MT", "Calibri", "Trebuchet MS",
        "sans-serif"],
      'typewriter': ["VT323", "Gill Sans", "Gill Sans MT", "Calibri", "Trebuchet MS",
        "sans-serif"]
    },
  },  

  plugins: [require("daisyui")],

  // light theme
  daisyui: {
    themes: ["light"],
  },
};