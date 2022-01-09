const { merge } = require('webpack-merge');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const mode = process.env.NODE_ENV;

const mergeConfig = require(`./config/webpack.${mode}.js`);

const webpackConfig = {
  entry: {
    index: resolve(__dirname, 'src/index'),
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
        },
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, 'index.html'),
    }),

    new MiniCssExtractPlugin({
      filename: 'common.css',
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx', 'jsx'],
    alias: {
      '@': resolve(__dirname, 'src'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@components': resolve(__dirname, 'src/components'),
    },
  },
};

module.exports = merge(mergeConfig, webpackConfig);
