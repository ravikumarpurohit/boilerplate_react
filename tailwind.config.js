/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "inner-custom": "inset -3px 3px 4px 0 rgba(0, 0, 0, 0.1)",
        "inner-dropdown": "inset -3px 3px 4px 0 rgba(0, 0, 0, 0.2)",
        // "inner-profile": "inset -10px 10px 6px 10px rgba(0, 0, 0, 0.1)",
        "inner-checkbox": "inset -4px 4px 3px 1px rgba(0, 0, 0, 0.1)",
        // 'inner-custom': 'inset 4px 4px 10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
