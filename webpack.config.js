var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const commonPaths = require('./webpack/commonPaths');

module.exports = {
    entry: {
        app: `${commonPaths.appEntry}/index.jsx`
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    },
    plugins: [
        // new CleanWebpackPlugin('dist', {}),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [
                    {
                      loader: "style-loader" // creates style nodes from JS strings
                    }, {
                      loader: "css-loader" // translates CSS into CommonJS
                    }, {
                      loader: "sass-loader"
                    }
                ]
            }, {
                test: /\.(svg|png|jpeg|jpg|gif|json)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        hot: true,
        inline: true,
        host: "localhost",
        historyApiFallback: true,
        port: 8080,
        watchOptions: {
            poll: true
        }
    }
};
