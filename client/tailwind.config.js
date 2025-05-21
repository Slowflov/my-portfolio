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
      spacing: { 
        22: '5.5rem',
        26: '6.5rem',
      },
      screens: {
        'xxl': {'max': '900px'},
        'xsm': {'max': '400px'},
        'xss': {'max': '500px'},
        'xxs': {'max': '640px'},
        'lg-min': '1340px',
      },
      animation: {
        'slow-pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll-up': 'scrollUp 7s linear infinite',
        'float': 'float 4s ease-in-out infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
};








