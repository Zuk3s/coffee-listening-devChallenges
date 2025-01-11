/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cafe: "url('/src/assets/bg-cafe.jpg')",
      },
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"], // Adiciona DM Sans como padrão
      },
      fontSize: {
        heading: ["2rem"],
        body: ["1rem"],
        label: ["0.875rem"],
        small: ["0.625rem"],
        price: ["0.75rem"],
      },
      colors: {
        zinc: {
          100: "#302522",
          200: "#1B1D1F",
          300: "#111315",
        },
        gray: {
          100: "#6F757C",
          200: "#4D5562",
        },
        primary: "#FEF7EE",
        orange: "#F6C768",
        red: "#ED735D",
        green: "#BEE3CC",
      },
    },
  },
  plugins: [],
};
