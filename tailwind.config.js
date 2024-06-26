// tailwind.config.js

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './component/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        onboarding: '#0870FF',
        primary: '#098CE31A',
        buttons:"#098CE3"
      },
      fontFamily: {
        Black: 'Poppins-Black',
        BlackItalic: 'Poppins-BlackItalic',
        Bold: 'Poppins-Bold',
        BoldItalic: 'Poppins-BoldItalic',
        Italic: 'Poppins-Italic',
        Light: 'Poppins-Light',
        LightItalic: 'Poppins-LightItalic',
        Regular: 'Poppins-Regular',
        MediumItalic: 'Poppins-MediumItalic',
        Medium: 'Poppins-Medium',
        ThinItalic: 'Poppins-ThinItalic',
        Thin: 'Poppins-Thin',
      },
    },
  },
  plugins: [],
};
