const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const ESLintPlugin = require('eslint-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    TerserMinimizePlugin: function() {
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
    },
    plugins: [
        new DefinePlugin({
            'process.env': JSON.stringify({ ...process.env }),
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: true,
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: 'index.html',
            filename: './index.html',
            favicon: './favicon.ico',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: require('path').resolve(__dirname, '../frontend/assets/images'),
                    to: 'images',
                },
            ],
        }),
        new SpriteLoaderPlugin(),
        new VueLoaderPlugin(),
        new ESLintPlugin(),
    ], 
};
