
function root(dir) {
    return require('path').resolve(__dirname, '../frontend/', dir);
}

module.exports = [
    {
        test: /\.js$/,
        include: root(''),
        loader: 'babel-loader',
        exclude: /node_modules/,
    },
    {
        test: /\.vue$/,
        include: root(''),
        use: [{
            loader: 'vue-loader',
            options: { transformToRequire: { image: 'xlink:href' } }
        }],
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
        type: 'asset/resource'
    },
    {
        
        test: /\.svg$/,
        include: [root('')],
        use: [
            'svg-sprite-loader',
            { loader: 'svgo-loader' }
        ]
    },
];