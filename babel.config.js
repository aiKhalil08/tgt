module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@assets': './src/assets',
          '@utils': './src/lib/utils',
          '@components': './src/components',
          '@screens': './src/screens',
          '@onboarding': './src/onboarding',
          '@app': './src/app',
          '@api': './src/api',
          '@navigation': './src/navigation'
        },
      },
    ],
  ],
};
