import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}","./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["var(--font-avenir)", ...defaultTheme.fontFamily.sans],
        cormorant: ["var(--font-cormorant)", "serif"],
      },
    },
  },
};
