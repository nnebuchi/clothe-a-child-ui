/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
    "donate.html",
    "projects.html",
    "events.html",
  ],
  theme: {
    extend: {
      screens: {
        mobilexxs: "320px",
        mobilexs: "345px",
        mobilesm: "375px",
        mobilemd: "480px",
        mobilelg: "567px",
        tabletsm: "767px",
        tabletmd: "800px",
        tabletlg: "992px",
        laptopmd: "1200px",
        xl: "1280px",
        xxl: "1536px",
      },
      colors: {
        blue: "#123B97",
        purple: "#B10990",
        purplelight: "#9A0A7D1A",
        text: "#0D000BB2",
      },
      fontFamily: {
        primary: ["Cormorant Garamond", "sans-serif"],
        secondary: ["Roboto", "serif"],
        tertiary: ["Fredoka", "serif"],
      },
      fontSize: {
        sm: "0.8125rem",
        base: "0.93",
        xl: "1.0625rem",
        "2xl": "1.25rem",
        "3xl": "1.375rem",
      },
      borderRadius: {
        sm: "0.6257rem",
        lg: "1.5rem",
      },
    },
  },
  plugins: [],
};
