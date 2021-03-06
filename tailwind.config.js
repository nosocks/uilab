module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ebony: {
          50: '#f8fafa',
          100: '#edf1f8',
          200: '#d6ddef',
          300: '#aebbda',
          400: '#8292bd',
          500: '#666fa1',
          600: '#525383',
          700: '#3e3e63',
          800: '#2a2a44',
          900: '#191929',
        },
        periglacial: {
          50: '#f8f9f6',
          100: '#f0eeea',
          200: '#e0dbd2',
          300: '#bdb9a9',
          400: '#94927d',
          500: '#767259',
          600: '#605741',
          700: '#4b4233',
          800: '#342e25',
          900: '#211d19',
        },
        tuft: {
          50: '#fbfaf8',
          100: '#f8eee5',
          200: '#f1d5ca',
          300: '#dfad9e',
          400: '#cf8172',
          500: '#b8604f',
          600: '#9c4537',
          700: '#78342b',
          800: '#54241f',
          900: '#351713',
        },
        bay: {
          50: '#f7fafb',
          100: '#e5f1fd',
          200: '#c9d9fa',
          300: '#a1b6f3',
          400: '#7d8de9',
          500: '#6668e2',
          600: '#534cd3',
          700: '#3f38b2',
          800: '#2b2684',
          900: '#181852',
        },
      },
    },
  },
  plugins: [],
}
