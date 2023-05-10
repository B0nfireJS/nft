const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
let mode = 'development'

if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}

console.log(mode + ' mode')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
      assetModuleFilename: "assets/[name][ext][query]",
      clean: false,
      publicPath: '/'
    },
    devtool: 'source-map',
    mode: mode,
    plugins:[
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new HtmlWebpackPlugin({
      template: "./src/pug/pages/main.pug"
    })],
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader",
        ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          exclude: /(node_modules|bower_components)/,
        },
      ],
    },
    devServer: {
      open: true,
      hot: true,
      port: 'auto',
      static: {
          directory: './src',
          watch: true,
      },
  },
}