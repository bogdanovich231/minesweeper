const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true,
    },
    mode: 'development',
    devServer: {
        compress: true,
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/mp3', to: 'audio' } // Замените 'src/audio' на путь к вашей папке с аудиофайлами
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(mp3|wav|ogg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/audio',
                        },
                    },
                ],
            },
        ],
    },
};
