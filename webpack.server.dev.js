var webpack = require("webpack");

module.exports = {
    entry: {
        app: ["./app/app.js"],
    },
    devtool:"eval", 
    output: {
        path: __dirname + "/build-server",
        filename: "build[hash:8].js",
        chunkFilename:"[id][hash].js"
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015',"stage-0", "react"],
               plugins: ["add-module-exports", "transform-runtime"],
            }
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('develop')
            }
            
        }),
    ]

};
//develop