const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    script: "./src/script.js",
    drawFunc: "./src/drawTree.js",
    classFuncs: "./src/classFuncs.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Binary Search Tree',
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },  
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {    
    
  },
  optimization: {
    runtimeChunk: "single",
  },
};