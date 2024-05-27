/** @type {import('tailwindcss').Config} */
const { nextui, colors } = require("@nextui-org/react");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    
    extend: {},
  },
  darkmode : "class",
  plugins: [nextui(
    {themes: {
      light: {
        colors : {},
      },
      dark: {
        colors : {},
      },
    }
  }
  )],
  }
