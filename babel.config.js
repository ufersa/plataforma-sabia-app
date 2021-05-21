module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      'module:metro-react-native-babel-preset',
    ],
    plugins: [
      [
        'module:react-native-dotenv', {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: false,
        },
      ], [
        require.resolve('babel-plugin-module-resolver'),
        {
          // cwd: 'babelrc',
          extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
          alias: {
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@services': './src/services',
            '@utils': './src/utils',
            '@assets': './assets',
          },
        },
      ],
    ],
  };
};
