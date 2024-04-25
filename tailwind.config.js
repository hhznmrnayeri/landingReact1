
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary":"#4CAF4F",
        "secondary":"#263238",
        "info":"#2194F3",
        "warning":"#FBC02D",
        "error":"#E53835",
        "success":"#2E7D31",
        "shade":{
          100:"#43A046",
          200:"#388E3B",
          300:"#237D31",
          400:"#1B5E1F",
          500:"#103E13",
        },
        "tint":{
          100:"#66BB69",
          200:"#81C784",
          300:"#A5D6A7",
          400:"#C8E6C9",
          500:"#E8F5E9",
        },
        "neutral":{
          "d-gray":"#4D4D4D",
          "gray":"#717171",
          "l-gray":"#89939E",
          "gray-blue":"#ABBED1",
          "silver":"#F5F7FA",
        },
      },
      backgroundImage:{
        "header":"url(../public/images/header.webp)",
        "section1":"url(../public/images/section1.webp)",
        "section2":"url(../public/images/section2.webp)",
        // "header-representation":"linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 100%), url(../images/representation/header.jpg)",
      },
      fontFamily:{
        "inter":"Inter",
        "interSemibold":"InterSemibold",
        "interMedium":"InterMedium",
        "interBold":"InterBold",
      },
      spacing:{
        "30":"7.5rem"
      },
      boxShadow: {
        "2":"0px 2px 4px 0px #ABBED199",
        "4":"0px 4px 8px 0px #ABBED166",
        "6":"0px 6px 12px 0px #ABBED14D",
        "8":"0px 8px 16px 0px #ABBED166",
        "16":"0px 16px 32px 0px #ABBED14D",
      },
      fontSize: {
        "2xs": ['10px', {
          lineHeight: '14px',
        }],
      },
      borderRadius: {
        "4xl":'2rem',
        "5xl":'4rem'
      },
      container: {
        center:true,
        padding: {
          DEFAULT: '1rem',
          lg: '0.625rem',
        },
      },
    },
    screens: {
      'xs':'480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [
    function({addVariant}){
      addVariant('child','&>*');
      addVariant('child-hover','&>*:hover');
    }
  ],
}
