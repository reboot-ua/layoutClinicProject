/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    fontFamily: {
      body: "GeneralSans",
    },
    extend: {
      colors: {
        blue: {
          DEFAULT: "#1376f8",
          dark: "#011632",
          sky: "#25b4f8",
          light: "#e6f6fe",
        },
        white: "#fff",
        text: "#3c4959",
        success: "#17bf28",
        warnint: "#ec942c",
        error: "#e52323",
        border: "#d0d5dd",
        placeholder: "#667085",
        gray: {
          DEFAULT: "#aeaeae",
          50: "#cfcfcf",
          100: "#cecece",
        },
      },
    },
  },
  plugins: [],
};
