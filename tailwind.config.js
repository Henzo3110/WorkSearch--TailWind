/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {

    },
    extend: {
      backgroundImage: {
        'FundoInicial': "url('/fundoInicial.jpg')",
        'FundoLogin' : "url('/FundoW.svg')",
      }
    },
  },
  plugins: [],
  
}
