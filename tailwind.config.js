/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#005D7F",
        fuschia: "#2A333E",
        iris:"#4B4DED",
        peach:"#F3D9DA",
        onyx:"#0E0E2C",
        evergreen:"#ED4B9E",
        lightSlate:"#8C8CA1",
        dorain:"#ECF1F4",
        cloud:"#FAFCFE" 
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}