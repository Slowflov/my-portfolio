/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Указываем пути для всех файлов в папке src
    "./public/index.html",        // Итак же включаем HTML в public (если используете его)
  ],
  theme: {
    extend: {
      screens: {
        'xxl': {'max': '900px'},
        'xsm': {'max': '400px'},
        'xxs': {'max': '640px'},
      },
      animation: {
        'slow-pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'), // Добавляем плагин для clip-path
  ],
};


