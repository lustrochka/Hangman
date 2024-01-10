const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
          {
            test: /\.html$/i,
            use: {
              loader: 'html-loader',
              options: { minimize: true },
            },
          },
          {
            test: /\.(scss|css)$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset/resource',
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, 'src', 'index.html'),
          filename: 'index.html',
        }),
        new MiniCssExtractPlugin(),
        new EslintPlugin({ extensions: 'ts' }),
        new CleanWebpackPlugin(),
      ],
}