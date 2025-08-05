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
      fontSize: {
        h1: [
        "3.875rem",
          {
            lineHeight: '1.2',
            fontWeight: '600',
            letterSpacing: '-2%',
          },
        ],
        h2: [
          "2.625rem",
          {
            lineHeight: '1.25',
            fontWeight: '500',
            letterSpacing: '0',
          },
        ],
        h3: [
          "2.25rem",
          {
            lineHeight: '1.55',
            fontWeight: '400',
            letterSpacing: '0',
          },
        ],
        h4: [
          "1.5rem",
          {
            lineHeight: '1.5',
            fontWeight: '400',
            letterSpacing: '0',
          },
        ],
        b1: [
          "1.125rem",
          {
            lineHeight: '1.55',
            fontWeight: '400',
            letterSpacing: '1.5%',
          },
        ],
        b2: [
          "1rem",
          {
            lineHeight: '1.55',
            fontWeight: '400',
            letterSpacing: '1.5',
          },
        ],  
        b3: [
          "0.875rem",
          {
            lineHeight: '1.55',
            fontWeight: '400',
            letterSpacing: '2%',
          },
        ],
        b4: [
          "0.75rem",
          {
            lineHeight: '1.55',
            fontWeight: '400',
            letterSpacing: '1.5%',
          },
        ],
      },
      maxWidth: {
        max: "1440px",
        contant: "1280px",
      },
    },
  },
  plugins: [],
};
