/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        moderateBlue: "#5457b6",
        softRed: "#ed6468",
        lightGrayBlue: "#c3c4ef",
        paleRed: "#ffb8bb",
        darkBluee: "#324152",
        grayBluee: "#67727e",
        lightGrayy: "#eaecf1",
        verylightGray: "#f5f6fa",
        whitee: "#ffffff",
      },
      screens: {
        ssm: { max: "375px" },
        mmin: { min: "376px" },
      },
    },
  },
  plugins: [],
  wrapper: {
    path: "src/PreviewWrapper.jsx",
    componentName: "default",
  },
};
