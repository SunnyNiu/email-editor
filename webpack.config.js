const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const BUNDLE_NAME = 'bundle';

const ASSET_PATH = process.env.ASSET_PATH || '';

module.exports = () => ({
  mode: 'production',
  context: path.resolve(ROOT_PATH, 'src'),
  entry: ['./index.js'],
  output: {
    publicPath: ASSET_PATH,
    path: path.resolve(ROOT_PATH, 'build'),
    filename: `${BUNDLE_NAME}.js`,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [path.resolve('src'), path.resolve('node_modules')],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ],
  optimization: {
    minimize: true,
  },
});
