module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@app/assets': './src/assets',
          '@app/components': './src/components',
          '@app/constants': './src/constants',
          '@app/navigations': './src/navigations',
          '@app/screens': './src/screens',
          '@app/store': './src/store',
          '@app/services': './src/services'
        },
      },
    ]
  ]
};
