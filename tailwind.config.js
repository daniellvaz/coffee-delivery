/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        base: {
          white: "#ffffff",
          background: "#fafafa",
          card: "#f3f2f2",
          input: "#ededed",
          button: "#e6e5e5",
          hover: "#d7d5d5",
          label: "#8d8686",
          text: "#574f4d",
          subtitle: "#403937",
          title: "#272221",
        },
        brand: {
          "purple-dark": "#4b2995",
          purple: "#8047f8",
          "Purple-light": "#ebe5f9",
          "yellow-light": "#f1e9c9",
          "yellow-dark": "#c47f17",
          yellow: "#dbac2c",
        },
      },
      fontSize: {
        "2xs": "0.625rem",
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "3rem",
      },
      fontFamily: {
        "baloo-2": "Baloo 2",
        roboto: "Roboto",
      },
      borderRadius: {
        none: "0",
        xs: "0.25rem",
        sm: "0.3125rem",
        default: "0.375rem",
        lg: "0.5rem",
        xl: "0.625rem",
        "2xl": "0.75rem",
        "3xl": "1.25rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
