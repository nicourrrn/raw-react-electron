const path = require("path");
const {ProgressPlugin} = require("webpack")
const HtmlWebpack = require("html-webpack-plugin");

module.exports = {
    entry: "./src/App.tsx",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: "development",
    module: {
        rules: [
            {
               test: /\.jsx?$/,
               use: "babel-loader"
            },
            {
                test: /\.sass$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.tsx?$/,
                use: [
                    'babel-loader',
                    'ts-loader'
                ],
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    plugins: [
        new ProgressPlugin(),
        new HtmlWebpack({template: path.join(__dirname, 'public/index.html')}),
    ]
}
