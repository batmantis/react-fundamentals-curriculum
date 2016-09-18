var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
        template: __dirname + '/app/index.html',
        filename: 'index.html',
        inject: 'body',
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
        }
    })

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.(svg|png|jpe?g|gif)$/, exclude: /node_modules/, loader: "file-loader"},
      { test: /\.css$/, loader: "style-loader!css-loader" },
    ]
  },
  plugins: [HTMLWebpackPluginConfig,
      new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
          compressor: {
              screw_ie8: true,
              warnings: false
          },
          minimize: true,
          compress: {
              screw_ie8: true,
              warnings: false
          },
          mangle: {
              screw_ie8: true
          },
          output: {
              comments: false,
              screw_ie8: true
          }
      })]
};
