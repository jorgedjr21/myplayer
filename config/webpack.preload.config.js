// webpack.preload.config.js
const path = require('path');

module.exports = {
  mode: 'development',
  target: 'electron-preload',
  entry: './src/preload.ts', // Path to your preload entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'preload.js', // Ensure this matches the preload path in main.ts
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: /src/,
        use: 'ts-loader',
      },
    ],
  },
};
