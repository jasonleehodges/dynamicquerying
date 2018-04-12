const path = require('path');

module.exports = {
    entry: "./private/app.js",
    output: {
        path: path.join(__dirname, "static/js"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.s?css$/,
            use: ['style-loader','css-loader','sass-loader']
        }]
    },
    devtool: 'cheap-module-eval-source-map'
};