const webpackMerge = require('webpack-merge')
const path = require('path')
const commonConfig = require('./common.config.js')
const TypedocWebpackPlugin = require('typedoc-webpack-plugin')
const DefinePlugin = require('webpack/lib/DefinePlugin')
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin')

const ENV = process.env.ENV || 'production'
process.env.ENV = ENV

module.exports = webpackMerge(commonConfig({ env: ENV }), {
  plugins: [
    new TypedocWebpackPlugin(
      {
        out: '../docs',
      },
      path.resolve(__dirname, '../src'),
    ),
    new DefinePlugin({
      ENV: `'${ENV}'`,
    }),
    new UglifyJsPlugin({
    }),
  ],
})
