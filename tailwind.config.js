module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'black': {
          '50': '#f4f4f4', 
          '100': '#e8e8e9', 
          '200': '#c6c6c8', 
          '300': '#a4a3a7', 
          '400': '#5f5f64', 
          '500': '#1b1a22', 
          '600': '#18171f', 
          '700': '#14141a', 
          '800': '#101014', 
          '900': '#0d0d11'
      },

      'fg': {
        '50': '#f5f4f5', 
        '100': '#eaeaeb', 
        '200': '#cbcace', 
        '300': '#ababb0', 
        '400': '#6d6b75', 
        '500': '#2e2c3a', 
        '600': '#292834', 
        '700': '#23212c', 
        '800': '#1c1a23', 
        '900': '#17161c'
    }
    
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
