/**
 * 1. 声明入口和出口
 * 2. 配置资源加载器，比如css/image
 */
const path = require("path");
// es5
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./dist")
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
    }, {
      test: /\.less$/i,
      include: {
        and: [path.join(__dirname, "./src/")]
      },
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "less-loader"
        }
      ]
    }]
  }
}