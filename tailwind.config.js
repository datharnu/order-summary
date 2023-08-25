/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        paleblue: "hsl(225, 100%, 94%)",
        brightblue: "hsl(245, 75%, 52%)",
        verypaleblue: "hsl(225, 100%, 98%)",
        darkblue: "hsl(223, 47%, 23%)",
        desaturatedblue: "hsl(224, 23%, 55%)"
      }
    },
  },
  plugins: [],
}

