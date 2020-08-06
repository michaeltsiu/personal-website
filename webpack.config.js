var path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

// module.exports = {
//   entry: './client/src/index.jsx',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//     publicPath: '/'
//   },
//   module: {
//     rules: [
//       { test: /\.js$|jsx/, use: 'babel-loader' },
//       { test: /\.css$/, use: ['style-loader', 'css-loader' ]}
//     ]
//   },
//   mode: 'development',
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: 'client/dist/index.html'
//     })
//   ],
//   devServer: {
//     historyApiFallback: true
//   }
// };


module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?/,
        include: SRC_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true
  }
};