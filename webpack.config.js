const path = require("path");
module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, "public"),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.m?js$/,
                exclude: [/node_modules/],
                use:{
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer:{
        static: {
            directory: path.join(__dirname, "public")
        },
        port: 4000
    }
}