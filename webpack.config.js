var webpack = require('webpack');
module.exports = {
  entry: [
    './src/scripts/common.js',
    './src/scripts/control.js',
    './src/scripts/defense.js',
    './src/scripts/dream.js',
    './src/scripts/earth.js',
    './src/scripts/hunting.js',
    './src/scripts/nature.js',
    './src/scripts/rogue.js',
    './src/scripts/spirit.js',
    './src/scripts/storm.js',
    './src/scripts/warfare.js',
    './src/css/main.css'
  ],
  output: {
    path: `${__dirname}/public/dist`,
    publicPath: '/',
    filename: 'titancalc.js',
    clean: true,
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    static: {
      directory: __dirname + "/public"
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};

