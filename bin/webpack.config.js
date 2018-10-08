const path = require('path')

const mode = process.env.NODE_ENV

const isProduction = mode === 'production'

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../client/index.tsx')
  },
  devtool: isProduction ? '' : 'source-map',
  output: {
    // publicPath: ''
    filename: 'app.js',
    path: path.resolve(__dirname, '../public/static/js')
  },
  mode,
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '../css/[name].[ext]'
            }
          },
          {
            loader: 'extract-loader',
            options: {
              publicPath: './'
            }
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'json']
  }
}
