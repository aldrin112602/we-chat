/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
export default {
  content: ["./src/**/*.{tsx,jsx,js,html}"],
  theme: {
    extend: {},
  },
  plugins: [
    forms,
  ],
}

