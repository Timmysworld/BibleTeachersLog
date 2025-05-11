/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      'header': ['"Roboto"'],
    },
    colors: {
      primary: '#38bdf8', // sky-400
      secondary: '#FBBF24', // amber-400
      tertiary: '#0f172a', // slate-900
      accent: '#4ADE80', // green-400
      neutral: '#374151', // gray-700
      base: '#F9FAFB', // gray-50
      info: '#3B82F6', // blue-500
      success: '#22C55E', // green-500
      warning: '#FBBF24', // amber-400
      error: '#EF4444', // red-500
      text: '#111827', // gray-900,
      hover: '#0369a1', // sky-700
      
    },

    
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

