/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#EE7922",
        blackish: "#121212",
        grayish: "#707070",
      },
      screens: {
        'xs': '475px', 
        'sm': '640px', 
        'md': '768px', 
        'xmd': '900px', 
        'lg': '1024px', 
        'xl': '1280px', 
        '2xl': '1520px', 
      },
      fontFamily: { 
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
