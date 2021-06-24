var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/public/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.js$|jsx/,
                use: 'babel-loader' 
            },
            { 
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'] 
            },
            {
                test: /\.html$/i,
                use: 'html-loader',
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            }
        ]
    },
    mode: 'development',
    plugins: [

        new HtmlWebpackPlugin({
            template: './client/public/index.html'
        })
    ]
}