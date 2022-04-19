module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/dist',
  },
};
