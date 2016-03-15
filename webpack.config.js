/**
 * Created by zhaofeng on 16/3/15.
 */
var webpack = require('webpack');
var path = require('path');

var config = {
    entry: {
        app: [
            path.resolve(__dirname, 'example/index.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, 'example/static'),
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};

module.exports = config;