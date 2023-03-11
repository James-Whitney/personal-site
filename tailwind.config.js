const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // fontFamily: {
    //   mono: ["Space Mono", "monospace"],
    // },
    // height: (theme) => ({
    //   auto: "auto",
    //   ...theme("spacing"),
    //   full: "100%",
    //   screen: "calc(var(--vh) * 100)",
    // }),
    extend: {
      fontSize: {
        "dynamic-small": "clamp(1rem, 5vw, 10rem)",
        "dynamic-xl": "clamp(3rem, 10vw, 10rem)",
      },
      animation: {
        "scroll-text-5": "scrollText5 10s ease-in-out infinite",
        "scroll-text-3": "scrollText3 10s ease-in-out infinite",
      },
      keyframes: {
        scrollText3: {
          "5%, 33.3%": { transform: "translateY(-25%)" },
          "38.3%, 66.6%": { transform: "translateY(-50%)" },
          "71.6%, 100%": { transform: "translateY(-75%)" },
        },
        scrollText5: {
          "5%, 25%": { transform: "translateY(-20%)" },
          "30%, 50%": { transform: "translateY(-40%)" },
          "55%, 75%": { transform: "translateY(-60%)" },
          "80%, 100%": { transform: "translateY(-80%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
