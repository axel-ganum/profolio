/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Cambié 'inter' por 'roboto'
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

