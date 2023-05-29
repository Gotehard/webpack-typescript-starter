const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.ts',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts','.js']
    },
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 4000
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'head',
            template: "./src/index.html"
        })
    ]
}