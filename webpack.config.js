const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",

  entry: {
    main: './src/index.js',
    main2: './src/index2.js',
  },

  devServer: {
    contentBase: './dist',
  },

  optimization: {
    splitChunks: {
      chunks: 'initial',
      minSize: 1,
      minChunks: 2,
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
    }),
  ],
};
