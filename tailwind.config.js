/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  safelist: [
    "to-top-button__mobile",
    "to-top-button__tablet",
    "to-top-button__desktop"
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

