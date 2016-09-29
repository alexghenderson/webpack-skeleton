var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  context: __dirname + "/src",
  entry: ["./bootstrap.js", "./Styles/site.less"],
  output: {
    path: __dirname + "/dist/static",
    filename: "bundle-[hash].js"
  },
  resolve: {
    root: [
      __dirname + "/node_modules",
      __dirname + "/src"
    ],
    extensions: ["", "webpack.js", "web.js", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: "babel-loader",
        include: __dirname + "/src",
      },
      {
        test: /\.less$/,
        loader: "style!css!postcss!less-loader",
        include: __dirname + "/src"
      }
    ]
  },
  plugins: [
		new webpack.optimize.DedupePlugin(),
  	new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false,
        drop_console: true
      },
      mangle: {
        screw_ie8: true
      },
      test: /\.js[x]?$/
    }),
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  postcss: function () {
    return [precss, autoprefixer];
  }
}
