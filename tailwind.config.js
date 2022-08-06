/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-gray": "#737BAE",
        "text-gray-light": "#5A5F7D",
        "text-white": "#ECF0FF",
        "text-red": "#FF4D4D",
        "text-green": "#00FFA3",
        "background-black": "#14172c",
        "valueCard": "rgba(20, 23, 43, 1)"
      },

      backgroundImage: {
        card: "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(46, 49, 73, 0.1) 107.43%)",
        bitcoin: "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(234, 179, 0, 0.06) 100%)",
        solona: "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(220, 31, 255, 0.1) 100%)",
        ethereum: "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(237, 240, 244, 0.1) 100%)",
        binance: "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(234, 179, 0, 0.06) 100%)",
        shiba: "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(228, 45, 4, 0.1) 100%)"
      },
      backdropBlur: {
        card: "100px",
      },
      fontSize: {
        base: "16px",
        small: "12px"
      },
      fontWeight: {
        normal: 600
      }
    },
  },
  plugins: [],
}
