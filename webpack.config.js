module.exports = {
  entry: "./app/src/js/root.js",
  output: {
    path: __dirname + "/app/assets",
    filename: "index.js"
  },
  module: {
    loaders: [
      {
        test:      /\.js$/,
        loaders:   ['babel'],
        excludes:  /node_modules/

      }
    ]
  }
};
