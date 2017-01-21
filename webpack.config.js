const path = require('path');

module.exports = {
    context: path.resolve('./public/scripts'),
    entry: ["./main.js", "./utils.es6"],

    output: {
        publicPath: '/scripts/', /* This is the virtual path */
        path: path.resolve('./public/scripts/'), /* This is the real output path */
        filename: "bundle.js"
    },

    devServer: {
        contentBase: 'public'
    },

    module: {
        preLoaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            }
        ],
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader!sass-loader"
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.es6']
    },

    watch: true,
};