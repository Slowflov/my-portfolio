module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        customWhiteblue: '#264653',
        customDarkblue: '#04192e',
      },
      screens: {
        'xxl': {'max': '900px'},
        'xsm': {'max': '400px'},
        'xxs': {'max': '640px'},
      },
      animation: {
        'slow-pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll-up': 'scrollUp 7s linear infinite',
      },
      keyframes: {
        scrollUp: {
          '0%': {
            backgroundPosition: '0px -260px',
          },
          '100%': {
            backgroundPosition: '0px -860px',
          },
        },
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
};







