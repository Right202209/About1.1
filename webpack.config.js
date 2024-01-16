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
        // ��ϸplugins������

        // ��Ϊ��ֱ������,���� new �ͺ���
        // ����:Ĭ�ϻᴴ��һ���յ�HTML�ļ�,�Զ������������������Դ(JS/CSS)
        new HtmlWebpackPlugin({
            // ���� './src/index.html'�ļ�,���Զ������������������Դ(JS/CSS)
            template: './src/index.html'
        })
    ],

    mode: "development"
};