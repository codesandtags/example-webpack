const WebpackStrip = require('strip-loader');
const devConfig = require('./webpack.config');
const stripLoader = {
    test: [/\.js$/, /\.es6$/],
    exclude: /node_modules/,
    loader: WebpackStrip.loader('console.log', 'console.error')
};

devConfig.module.loaders.push(stripLoader);
module.exports = devConfig;