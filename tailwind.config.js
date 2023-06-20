/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      signInBg: "url('/images/goutham-binuraj-y9eTrJBsLeY-unsplash.jpg')",
      redmiTen: "url('/images/redmi-10.jpg')",
      wave: "url('/images/wave.svg')",
      waveNav: "url('/images/wave-nav.svg')",
      redmi: "url('/images/download-removebg-preview.png')",
      redmiOne: "url('/images/goutham-binuraj-RE_waXYFl9Q-unsplash.jpg')",
      redmiTwo: "url('/images/roman-spiridonov-FemeYrbdMWE-unsplash.jpg')",
      redmiThree: "url('/images/lisanto-Q01hPiKTAIQ-unsplash.jpg')",
    },
    colors: {
      primary: "#93DAF0",
      secondary: "#E8EFF5",
      onPrimary: "#5E7FA0",
      onSecondary: "#A5ABBB",
      footer: "#111827",
      white: "#FFFFFF",
      black: "#000000",
      orange: "#FF6700",
    },
    extend: {},
  },
  plugins: [],
};
