/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-vite": "#1E1E20",
      },
      fontFamily: {
        "vite-type": ["Inter"],
      },
    },
    plugins: [],
  },
};
