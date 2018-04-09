const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./app.js', './assets/scss/main.scss'],
  output: {
    filename: 'assets/dist/bundle.js'
  },
  module: {
    loaders: [
      /*
      your other rules for JavaScript transpiling go in here
      */
      { // css / sass / scss loader for webpack
        test: /\.(css|sass|scss)$/,
        /*use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
        })*/
        // loaders: ["css-loader", "sass-loader"]
        loader: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader',
        exclude: /fonts/,
        options: {
            limit: 15000,
            name: './assets/dist/images/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'assets/dist/[name].bundle.css',
      allChunks: true,
    }),
  ],
};