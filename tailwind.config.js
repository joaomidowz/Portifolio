/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        atkinson: ['"Atkinson Hyperlegible"', 'sans-serif'], // Adiciona a fonte Poppins
      },
      fontSize: {
        'Header' : ['156px'],
        'Header2' : ['120px'],
        'Header3' : ['90px'],
        'Header4' : ['6 0px'],
      },
      colors: {
        primary: '#E8E8F9',
        secondary: '#524BE0',
        terciary: 'E8E8F9',
      },
      screens: {
        'sms': '395px',
        'phone': '430px',
        'mobile': '770px',
        'tablet': '950px',
        'laptop': '1160px',
      },
      height: {
        '100': '500px',
      }
    },
    boxShadow: {
      phone: '0px -6px 10px rgba(0, 0, 0, 0.45)',
    },
    dropShadow: {
      text: '0px 4px 2px rgba(0, 0, 0, 0.25)'
    }
  },
  plugins: [],
};
