const webpack = require('webpack');
const production = process.env.NODE_ENV === 'production';

module.exports = {
    // entry: {
    //     rest_api: './build/rest_api.js',
    // },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
    },
    // plugins: [
    //     new webpack.DefinePlugin({
    //         'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    //     }),
    // ].concat(production ? [
    //     new webpack.optimize.UglifyJsPlugin(),
    //     new webpack.optimize.DedupePlugin(),
    // ] : []),
    output: {
        filename: '[name].js',
        library: 'rest_api',
        libraryTarget: 'umd',
    },
};