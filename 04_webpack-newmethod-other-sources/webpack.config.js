const path = require("path")

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist")
  },

  module: {
    rules: [
      {
        test: /\.(s|l)?css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
      {
        test: /.(jpe?g|png)$/,
        // use: [
          // {
          //   loader: "file-loader",
          //   options: {
          //     name: "[name].[hash:6].[ext]",
          //     outputPath: "img"
          //   }
          // }
        // ]
        // type: "asset/resource",
        // generator: {
        //   filename: "img/[name].[hash:6][ext]"
        // }
        type: "asset",
        generator: {
          filename: "img/[name].[hash:6][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        }
      },
      {
        test: /.ttf|eot|woff?2$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name].[hash:6][ext]"
        }
      }
    ],
  },
}
