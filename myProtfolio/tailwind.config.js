/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "text-orange-500",
    "text-blue-500",
    "text-yellow-400",
    "text-blue-600",
    "text-cyan-400",
    "text-sky-400",
    "text-green-600",
    "text-gray-400",
    "text-green-500",
    "text-purple-600",
    "text-sky-500",
    "text-slate-200",
    "text-blue-700",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
