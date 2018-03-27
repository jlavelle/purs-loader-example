module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|output/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.purs$/,
        exclude: /node_modules/,
        use: {
          loader: 'purs-loader',
          query: {
            psc: 'psa',
            src: ['bower_components/purescript-*/src/**/*.purs', 'src/**/*.purs']
          }
        }
      }
    ]
  }
}