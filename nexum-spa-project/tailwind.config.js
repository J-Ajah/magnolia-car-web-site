module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "200px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
  },
  plugins: [require("daisyui")],
};
