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
            loader: 'babel-loader?presets[]=es2015',
            /*query: {
              presets: ['es2015?presets[]=react,presets[]=es2015',],
              plugins: ["transform-async-to-generator"]
            }*/
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