const path = require('path');
const webpack = require('webpack');
const { DefinePlugin } = webpack;
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const ESLintPlugin = require('eslint-webpack-plugin');

const dotenv = require('dotenv');

console.log('🚀 ~ path', path.resolve(__dirname));

function root(dir) {
    return path.resolve(__dirname, 'src/', dir);
}

dotenv.config();

const TerserMinimizePlugin = () => {
    if (process.env.NODE_ENV === 'production') {
        return {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    test: /\.js$/,
                    exclude: /node_modules/,
                }),
            ],
        };
    }
};

module.exports = {
    context: root(''),
    entry: { app: './index.js' },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
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
        extensions: ['.js', '.jsx', '.vue', '.css', '.scss', '.svg', '.png', '.jpg', '.json'],
        alias: {
            utils: root('utils'),
            store: root('store'),
            router: root('router'),
            styles: root('styles/styles.scss'),
        },
    },
    externals: { paths: { images: root('assets/images') } },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: root(''),
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                include: root(''),
                use: ['vue-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true },
                    },
                    {
                        loader: 'sass-resources-loader',
                        options: { resources: [root('styles/_variables.scss')] },
                    },
                ],
            },
            {
                test: /\.(gif|png|jpe?g)$/,
                use: ['file-loader'],
            },
            {
                test: /\.svg$/,
                type: 'asset/resource',
                use: 'svgo-loader',
                generator: { filename: '[name][ext]' }
            },
        ],
    },
    plugins: [
        new DefinePlugin({
            'process.env': JSON.stringify({ ...process.env }),
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: true,
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            template: 'index.html',
            filename: './index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: root('assets/images'),
                    to: 'images',
                },
            ],
        }),
        new VueLoaderPlugin(),
        new ESLintPlugin(),
    ],
    optimization: { ...TerserMinimizePlugin() },
};
