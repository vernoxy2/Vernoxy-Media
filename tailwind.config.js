/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(40px)' },
        },
        Efloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(20px)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        Efloat: 'Efloat 4s ease-in-out infinite',
        floatReverse: 'floatReverse 4s ease-in-out infinite',
      },
      colors: {
        vernoxy: "#000000",
        primary: "#4ED5E2",
        secondary: "#1168B5",
        textcolor: "#D1D5DB"
      },
      fontFamily: {
        Bai_Jamjuree: ["Bai_Jamjuree", "sans-serif"],
        Mulish: ["Mulish", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '0.4px #4ED5E2',
          color: 'transparent',
        },
        '.text-stroke-md': {
          '-webkit-text-stroke': '1px #4ED5E2',
          color: 'transparent',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
