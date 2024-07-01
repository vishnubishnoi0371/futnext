/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "sm-13": "13px",
        "3xxl": "32px",
        "4xxl": "40px",
      },
    
      backgroundImage: {
     "font-gradient": 'linear-gradient(90deg, #00CA55 20.69%, #C3FF5A 58.36%)',
      },
      colors: {
        "light-gray": "#e4e4e4",
        "light-white": "#f4f4f4",
        "old-silver": "#838383",
        malachite: "#00ca55",
        pigment: "#18a353",
        "sonic-silver": "#787878",
        "bright-gray": "#efefef",
        "blue": "#58b9ff",
        "yellow-green": "#98dd1f",
        "silver-sand": "#c3c3c3",
        Purple: "#de8eff",
        mustard: "#cab600",
        "black-olive": "#3b3c3d",
        gray: "#7f7f7f",
        "moss-green": "#35644a",
        "eerie-black": "#17191b",
        "vampire-black": "#0a0b0c",

      },
      boxShadow: {
        cardShadow: "0 5px 5px 0 #DEDEDE",
        xs: "0 0 11px rgba(33,33,33,.2)",
      },
    },
  },
  plugins: [],
};
