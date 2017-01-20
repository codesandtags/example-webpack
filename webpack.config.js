module.exports = {
    entry: ["./app/scripts/app.js", "./app/scripts/utils.es6"],
    output: {
        filename: "./app/scripts/bundle.js"
    },
    watch: true,

    module: {
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