const webpackMerge = require('webpack-merge')
const path = require('path')
const commonConfig = require('./common.config.js')
const TypedocWebpackPlugin = require('typedoc-webpack-plugin')

const ENV = process.env.ENV || 'production'
process.env.ENV = ENV

module.exports = webpackMerge(commonConfig({ env: ENV }), {
  mode: 'production',
  plugins: [
    new TypedocWebpackPlugin(
      {
        out: '../docs',
      },
      path.resolve(__dirname, '../src'),
    ),
  ],
})
