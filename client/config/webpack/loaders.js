const loaders = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: ['babel-loader', 'eslint-loader']
  },
  {
    test: /\.scss/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          module: true
        }
      },
      'postcss-loader',
      'sass-loader'
    ]
  }
];

module.exports = loaders;
