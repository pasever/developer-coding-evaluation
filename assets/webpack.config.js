const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'build.js',
  },
  module: {
    loaders: [
      {
        test: /\.(css|sass|scss)$/,
        loader: ExtractTextPlugin.extract({
            use: ['css-loader', 'resolve-url-loader', 'sass-loader']
        })
     },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader',
        exclude: /fonts/,
        options: {
            limit: 15000,
            name: '[name].[ext]',
            outputPath: 'images/'
        }
      }, 
      {
        test: /\.(eot|svg|ttf|otf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: '[name].bundle.css',
      allChunks: true,
    }),
  ],
};