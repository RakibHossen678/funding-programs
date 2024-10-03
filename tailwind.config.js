/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', 'sans-serif'",
        inter: '"Inter", sans-serif',
        vietnam: '"Be Vietnam Pro", sans-serif',
        pt: '"PT Serif", serif',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
