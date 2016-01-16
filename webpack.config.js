module.exports = {
  entry: "./app/src/js/react/components/root.jsx",
  output: {
    path: __dirname + "/app/assets",
    filename: "index.js"
  },
  module: {
    loaders: [
      {
        test:      /\.jsx$/,
        loaders:   ['babel', 'jsx'],
        excludes:  /node_modules/
      }
    ]
  }
};
