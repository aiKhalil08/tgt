/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'manrope-bold': "Manrope-Bold",
        'manrope-extrabold': "Manrope-ExtraBold",
        'manrope-extralight': "Manrope-ExtraLight",
        'manrope-light': "Manrope-Light",
        'manrope-medium': "Manrope-Medium",
        'manrope-regular': "Manrope-Regular",
        'manrope-semibold': "Manrope-SemiBold",
        'nunito-sans-bold': "NunitoSans-Bold",
        'nunito-sans-extrabold': "NunitoSans-ExtraBold",
        'nunito-sans-extralight': "NunitoSans-ExtraLight",
        'nunito-sans-light': "NunitoSans-Light",
        'nunito-sans-black': "NunitoSans-Black",
        'nunito-sans-regular': "NunitoSans-Regular",
        'nunito-sans-semibold': "NunitoSans-SemiBold",
        'nunito-sans-bold-italic': "NunitoSans-BoldItalic",
        'nunito-sans-extrabold-italic': "NunitoSans-ExtraBoldItalic",
        'nunito-sans-extralight-italic': "NunitoSans-ExtraLightItalic",
        'nunito-sans-light-italic': "NunitoSans-LightItalic",
        'nunito-sans-black-italic': "NunitoSans-BlackItalic",
        'nunito-sans-italic': "NunitoSans-Italic",
        'nunito-sans-semibold-italic': "NunitoSans-SemiBoldItalic",
      },
      colors: {
        primary: "#D3862A",
        grey: {
          100: "#111111",
          80: "#50555C",
          60: "#ADB3BC",
          40: "#D1D5DB",
          20: "#F0F3F6"
        }
      }
    },
  },
  plugins: [],
}

