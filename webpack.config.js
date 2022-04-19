module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: `${__dirname}'/dist'`,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
