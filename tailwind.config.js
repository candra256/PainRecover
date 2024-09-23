/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      spacing : {
        '29' : '6.1rem',
      },

      height : {
        '128' : '40rem',
        '120' : '35rem',
        '110' : '30rem'
      }


    },
  },
  plugins: [
  ],
}

