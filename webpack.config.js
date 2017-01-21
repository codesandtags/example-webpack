const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // Plugin to extract content in bundles

module.exports = {
    context: path.resolve('./public/scripts'),
    entry: ["./main.js", "./utils.es6"],

    output: {
        path: path.resolve('./public/assets/'), /* This is the real output path */
        publicPath: '/assets/', /* This is the virtual path */
        filename: "bundle.js"
    },

    plugins: [
        new ExtractTextPlugin('styles.css')
    ],

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
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', '!css-loader!sass-loader')
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.es6']
    },

    watch: true,
};