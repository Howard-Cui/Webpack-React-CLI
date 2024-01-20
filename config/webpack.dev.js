const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: path.resolve(__dirname, "../src", "index.tsx"),
  mode: "development",
  output: {
    path: path.resolve(__dirname, "../dist"),
    // clear: true,÷
    filename: "[name].js",
  },
  devServer: {
    host: "localhost",
    port: 3000,
    open: true,
    static: {
      directory: path.join(__dirname, "../public"),
    },
  },
  module: {
    rules: [
      {
        test: /\.{js|jsx|ts|tsx}$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
  resolve:{ 
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  }
};

module.exports = config;
