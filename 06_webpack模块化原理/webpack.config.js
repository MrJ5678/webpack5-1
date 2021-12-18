const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",

  devtool: "source-map",

  entry: "./src/index.js",

  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "jld",
      template: "./public/index.html",
    }),
  ],
}
