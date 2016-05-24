"use strict";

var path = require("path");
var webpack = require("webpack");
var defaultConfig = require("./default.js");
module.exports = {
    entry:[
        "webpack-dev-server/client?" + defaultConfig.host + ":" + defaultConfig.port,
        'webpack/hot/only-dev-server',
        "./src/index.js"
    ],
    output: {
        path: "dist",
        filename: "built.js"
    },
    cache: true,
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: "react-hot!babel-loader",
            include: path.join(__dirname,"/../"),
            exclude: "node_modules"
        }]
    }
}
