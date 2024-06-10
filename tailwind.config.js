/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lightPurple: "#D2B7FF",
        lightYellow: "#FFDAB7",
        lightPurple: "#B8B7FF",
        bgColor: "#FBFAF4",
        green: "#0EAA5B",
        red: "#F12C2B",
      },
      boxShadow: {
        stats: "0px 8px 13px -3px rgba(0, 0, 0, 0.07)",
      },

      fontFamily: {
        Urbanist: ["Urbanist", "sans-serif"],
      },
    },
  },
  plugins: [],
};
