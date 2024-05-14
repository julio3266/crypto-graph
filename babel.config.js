module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: '.',
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
          alias: {
            '@components': './src/components',
            '@Pages': './src/Pages',
            '@Global': './src/Global',
            '@Src': './src',
            '@Utils': './src/utils',
          },
        },
      ],
      '@babel/plugin-transform-export-namespace-from',
      'react-native-reanimated/plugin',
    ],
  }
}
