const webpackMerge = require('webpack-merge')
const DefinePlugin = require('webpack/lib/DefinePlugin')
const commonConfig = require('./common.config.js')
const helpers = require('./helpers')

const ENV = 'development'
process.env.ENV = ENV

module.exports = webpackMerge(commonConfig({ env: ENV }), {
  mode: 'development',
  devServer: {
    contentBase: helpers.root('examples', 'developing'),
    watchContentBase: true,
    publicPath: 'http://localhost:8080/dist/',
  },
  plugins: [
    new DefinePlugin({
      ENV: `'${ENV}'`,
    }),
  ],
})
