module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@Screens': './app/screens',
          '@Components': './app/components',
          '@I18n': './app/i18n',
          '@Models': './app/models',
          '@Navigators': './app/navigators',
          '@Api': './app/services/api',
          '@Native': './app/services/native',
          '@NativeModule': './app/native-module',
          '@Source': './app/source',
          '@Theme': './app/theme',
          '@Utils': './app/utils',
          '@Assets': './app/assets',
          '@Assets/*': './app/assets/*',
          '@Libs': './app/libs',
          '@Hooks': './app/hooks',
          '@Types': './app/types',
          '@Constants': './app/constants',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
