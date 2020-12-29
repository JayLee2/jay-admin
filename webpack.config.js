const { merge } = require("webpack-merge");
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CheckerPlugin } = require("awesome-typescript-loader");

const mode = process.env.NODE_ENV;

const mergeConfig = require(`./config/webpack.${mode}.js`);

const webpackConfig = {
  entry: {
    index: resolve(__dirname, "src/index"),
  },
  output: {
    filename: "[name].bundle.js",
    path: resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: resolve(__dirname, "index.html"),
    }),
  ],
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx", "jsx"],
  },
};

module.exports = merge(mergeConfig, webpackConfig);
