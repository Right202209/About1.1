const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    }, module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'css-loader',
                    'style-loader'
                ],
            },
        ],
    }, optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },


    plugins: [
        // 详细plugins的配置

        // 因为是直接引的,所以 new 就好了
        // 功能:默认会创建一个空的HTML文件,自动引入打包输出的所有资源(JS/CSS)
        new HtmlWebpackPlugin({
            // 复制 './src/index.html'文件,并自动引入打包输出的所有资源(JS/CSS)
            template: './src/index.html'
        })
    ],

    mode: "development"
};