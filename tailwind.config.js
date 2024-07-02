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
        "sm-15": "15px",
        "3xxl": "32px",
        "4xxl": "40px",
      },
      lineHeight: {
        121: "121%",
        100: "100%",
        123: "123%",
        155: "155%",
        178: "178%",
        200: "200%",
      },
      backgroundImage: {
        "green-gradient":
          "linear-gradient(180deg, #00CA55 0%, rgba(0, 202, 85, 0) 100%)",
        "gradient-green":
          "linear-gradient(180deg, #00CA55 0%, rgba(0, 202, 85, 0) 100%)",
        "gradient-yellow":
          "linear-gradient(180deg, #98DD1F 0%, rgba(152, 221, 31, 0) 100%)",
        "font-gradient":
          "linear-gradient(90deg, #00CA55 20.69%, #C3FF5A 58.36%)",
        "border-gradient":
          "linear-gradient(334.48deg, rgba(0, 202, 85, 0) 18.34%, #00CA55 109.47%)",
      },
      colors: {
        "light-gray": "#e4e4e4",
        "dim-gray": "#6b6b6b",
        "light-white": "#f4f4f4",
        "dark-white": "#b1b1b1",
        "old-silver": "#838383",
        malachite: "#00ca55", // Corrected color name to lowercase
        pigment: "#18a353",
        pigment_green: "#18A352",
        "sonic-silver": "#787878",
        "bright-gray": "#efefef",
        blue: "#58b9ff",
        "yellow-green": "#98dd1f",
        green: "#032e16",
        darkgreen: "#49dd87",
        "silver-sand": "#c3c3c3",
        purple: "#de8eff", // Corrected color name to lowercase
        mustard: "#cab600",
        "black-olive": "#3b3c3d",
        gray: "#7f7f7f",
        "moss-green": "#35644a",
        "light-green": "#043F1D",
        "eerie-black": "#17191b",
        "vampire-black": "#0a0b0c",
        "light-gray1": "#6B6B6B",
        "dark-green": "#02421D",
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
