const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    script: "./src/script.js",
    classFuncs: "./src/classFuncs.js",
  },
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