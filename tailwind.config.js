/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
       keyframes: {
    wipe: {
      "0%": { clipPath: "inset(0 100% 0 0)" },
      "100%": { clipPath: "inset(0 0 0 0)" },
    },
  },
  animation: {
    wipe: "wipe 0.4s ease-out forwards",
  },
    fontFamily: {
    yorkten: ["YorktenConBoo", "sans-serif"],
  },
},
  },
  plugins: []
};

