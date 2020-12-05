const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",

  entry: {
    main: './src/index.js',
    main2: './src/index2.js',
    main2: './src/index2.js',
    main3: './src/index2.js',
    main4: './src/index2.js',
    main5: './src/index2.js',
    main6: './src/index2.js',
    main7: './src/index2.js',
    main8: './src/index2.js',
    main9: './src/index2.js',
    main10: './src/index2.js',
    main11: './src/index2.js',
    main12: './src/index2.js',
    main13: './src/index2.js',
    main14: './src/index2.js',
    main15: './src/index2.js',
    main16: './src/index2.js',
    main17: './src/index2.js',
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
