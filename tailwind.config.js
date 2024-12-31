/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "var(--primary-color)",
        secondaryColor: "var(--secondary-color)",
        whiteColor: "var(--white-color)",
        blackColor: "var(--black-color)",
        grayColor: "var(--gray-color)",
        lightGrayColor: "var(--light-gray-color)",
        goldColor: "var(--gold-color)",
        darkGoldColor: "var(--dark-gold-color)",
        modalOverlayColor: "var(--modal-overlay-color)",
      },
      fontSize: {
        "fs--1": ".75019rem",
        "fs-0": "1rem",
        "fs-1": "1.333rem",
        "fs-2": "1.77689rem",
        "fs-3": "2.36859rem",
        "fs-4": "3.15733rem",
        "fs-5": "4.20873rem",
        "fs-6": "5.61023rem",
        "fs-7": "7.47844rem",
        "fs-8": "9.96876rem",
      },
    },
  },
  plugins: [],
};
