/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primario": "#0A192F",
        "secundario": "#172A45",
        "acento": "#7EA6D9",
        "detalles": "#A8C5E6"
      },
      
    },
  },
  plugins: [],
}

