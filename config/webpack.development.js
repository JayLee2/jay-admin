const { resolve } = require('path');

module.exports = {
  devServer: {
    contentBase: resolve(__dirname, '../dist'),
    port: 9999,
    hot: true,
  },
};
