const {resolve } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const MinaWebpackPlugin = require('./plugin/MinaWebpackPlugin');
const MinaRuntimePlugin = require('./plugin/MinaRuntimePlugin');
const LodashWebpackPlugin = require('lodash-webpack-plugin');
const debuggable = process.env.BUILD_TYPE !== 'release';

module.exports = {
  context: resolve('src'),
  entry:'./app.js',
  output:{
    path:resolve('dist'),
    filename:'[name].js',
    globalObject:'wx'
  },
  optimization: {
    splitChunks:{
      chunks:'all',
      name:'common',
      minChunks:2,
      minSize:0,
    },
    runtimeChunk: {
      name: 'runtime'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins:[
    new webpack.EnvironmentPlugin({
      NODE_ENV:JSON.stringify(process.env.NODE_ENV) || 'development',
      BUILD_TYPE:JSON.stringify(process.env.BUILD_TYPE) || 'debug',
    }),
    new CopyWebpackPlugin([
      {
        from: '**/*',
        to: './',
        ignore:['**/*.js'],
      },
    ]),
    new MinaWebpackPlugin(),
    new MinaRuntimePlugin(),
    new LodashWebpackPlugin(),
    new webpack.LoaderOptionsPlugin({
      // minimize:true,
      // debug:true,
      options:{
        pluigns: [
          new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false,
          }),
        ],
      }
    })
  ],
  // mode:'none'
  mode:debuggable?'none':'production',
  devtool:debuggable?'inline-source-map':'source-map'
}