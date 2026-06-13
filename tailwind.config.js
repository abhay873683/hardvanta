/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette: deep navy, royal blue, silver, light grey, white
        navy: {
          DEFAULT: "#0a1f44",
          light: "#13315c",
          dark: "#06132b",
        },
        royal: {
          DEFAULT: "#1e4fd8",
          light: "#3b6ef5",
          dark: "#1740b0",
        },
        silver: {
          DEFAULT: "#c4cdd9",
          light: "#dde3ea",
          dark: "#9aa6b5",
        },
        cloud: "#f4f7fb", // light grey background
        ink: "#0a1f44",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 12px rgba(10, 31, 68, 0.08)",
        "card-hover": "0 8px 28px rgba(10, 31, 68, 0.16)",
      },
    },
  },
  plugins: [],
};
