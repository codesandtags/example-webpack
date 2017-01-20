module.exports = {
    entry: ["./app/scripts/main.js", "./app/scripts/utils.es6"],
    output: {
        filename: "./app/scripts/bundle.js"
    },
    watch: true,

    module: {
        preLoaders: [
            {
                test: /\.es6|.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            }
        ],
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"

            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.es6']
    }
};