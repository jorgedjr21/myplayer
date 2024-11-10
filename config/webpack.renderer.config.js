// webpack.renderer.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/renderer/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'renderer.js',
    globalObject: 'this', // Set global object for compatibility
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, '../config/postcss.config.js'),
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@components': path.resolve(__dirname, '../src/renderer/components'),
      '@api': path.resolve(__dirname, '../src/api'),
      '@types': path.resolve(__dirname, '../src/types'),
      '@styles': path.resolve(__dirname, '../src/styles')
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
    hot: false, // Disable HMR to prevent Node.js dependencies in renderer
    liveReload: true, // Use full-page reloads instead of HMR
    devMiddleware: {
      writeToDisk: true,
    },
  },
};
