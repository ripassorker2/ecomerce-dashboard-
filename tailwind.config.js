/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#3C79F5",
            secondary: "#222231",
            black: "#333649",
            gray1: "#C7D6E8",
            gray2: "#EDF2F7",
         },
      },
   },
   plugins: [],
};
