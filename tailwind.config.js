/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInBlur: {
          "0%": { opacity: 0, backdropFilter: "blur(0px)" },
          "100%": { opacity: 1, backdropFilter: "blur(4px)" },
        },
      },
      animation: {
        fadeInBlur: "fadeInBlur 0.8s ease-out forwards",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
