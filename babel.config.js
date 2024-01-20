module.exports = {
  presets: [
    ["@babel/preset-env", {
      "targets": {
          "node":"current"
      }
     }],
    "@babel/preset-react",
    "@babel/preset-typescript",
    "@babel/preset-flow",
  ],
  plugins: [
    // "babel-polyfill"
  ]
};
