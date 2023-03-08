
require('dotenv').config();

const path = require('path');

const rules = require('./rules');
const { TerserMinimizePlugin, plugins } = require('./plugins');

module.exports = {
    context: path.resolve(__dirname, '../frontend/'),
    entry: { app: './main.js' },
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: '[name].[fullhash].js',
        assetModuleFilename: '[name].[fullhash].[ext][query]',
        clean: true
    },

    watchOptions: { aggregateTimeout: 300 },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        port: process.env.PORT,
        host: 'localhost',
        compress: true,
        hot: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.css', '.js', '.jsx', '.jpg', '.json', '.png', '.vue',  '.scss', '.svg', ],
        modules: [
            path.resolve(__dirname, '../frontend/'),
            'node_modules'
        ],
    },
    module: { rules },
    plugins,
    optimization: { ...TerserMinimizePlugin() },
};
