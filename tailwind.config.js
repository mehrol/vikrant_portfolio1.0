/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        slide: 'slide 2s ease-in-out infinite',
      },
      keyframes: {
        slide: {
            '0%,100%': {
                transform: 'translateX(-25px)'
            },
            '50%': {
                transform: 'translateX(25px)'
            }
        }
      }
    },
  },
  plugins: [],
}

