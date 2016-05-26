"use strict";

var path = require("path");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./src/config/dev.js");
var defaultConfig = require("./src/config/default.js");


console.log(webpackConfig);

console.log(defaultConfig)

new WebpackDevServer(webpack(webpackConfig), {
    contentBase: path.join(__dirname, "/dist"),
    cache: true,
    hot: true,
    historyApiFallback: true,
    compress: true
}).listen(defaultConfig.port);


