/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       fontFamily: {
        sans: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
  darkMode: 'class', // opsional kalau kamu ingin fitur dark mode
}
