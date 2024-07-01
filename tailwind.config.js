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
      lineHeight: {
        121: "121%",
        100: "100%",
        123: "123%", //EXTAND PLAYERS BRANCH
        155: "155%", //EXTAND PLAYERS BRANCH
        200: "200%", //EXTAND PLAYERS BRANCH
      },
      backgroundImage: {
        "font-gradient": 'linear-gradient(90deg, #00CA55 20.69%, #C3FF5A 58.36%)',
      },
      colors: {
        "light-gray": "#e4e4e4",
        "light-white": "#f4f4f4",
        "dark-white": "#b1b1b1", // EXTEND PLAYERS BRANCH
        "old-silver": "#838383",
        malachite: "#00ca55",
        pigment: "#18a353",
        pigment_green: "#18A352",
        "sonic-silver": "#787878",
        "bright-gray": "#efefef",
        "blue": "#58b9ff",
        "yellow-green": "#98dd1f",
        green: "#032e16",
        "silver-sand": "#c3c3c3",
        Purple: "#de8eff",
        mustard: "#cab600",
        "black-olive": "#3b3c3d",
        gray: "#7f7f7f",
        "moss-green": "#35644a",
        "eerie-black": "#17191b",
        "vampire-black": "#0a0b0c",
        "light-sky": "#61CF8F",

      },
      boxShadow: {
        cardShadow: "0 5px 5px 0 #DEDEDE",
        xs: "0 0 11px rgba(33,33,33,.2)",
      },
    },
  },
  plugins: [],
};
