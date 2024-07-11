/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        footerBackground: '#F3EAE3', 
        outlineColor: '#864733',
        textColor: '#F3EAE3',
        btnColor: '#6C5A53',
        btnActive: '#3F2C20',
        textColor2: "#E8D2BA",
        textColor3: "#C5725B",
        sideColor: "#4A3527",
      },
      height: {
        'ch': '36rem', 
      },

    },
  },
  plugins: [],
}