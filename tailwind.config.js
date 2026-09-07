/** @type {import('tailwindcss').Config} */
export default {
  // Tells Tailwind to scan all React files for CSS classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // You can add custom fonts or specific hex codes here if needed,
      // but Tailwind's default blue and green are already perfect for neon glows.
      colors: {
        // Deep black background to make the neon colors pop
        dark: "#050505", 
      },
      fontFamily: {
        // A clean, futuristic sans-serif look
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}