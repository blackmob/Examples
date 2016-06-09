var path = require('path');
var webpack = require("webpack");
module.exports = {
    debug: true,
    resolve: {
        root: [path.resolve('./app')],
        extensions: ["", ".tsx", ".ts", ".js", ".d.ts"]
    },
    devtool: 'eval',
    entry:{
        bundle:[
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server',
        './app/main.tsx'           
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/static/'
    },
    module: {
        loaders: [            
             { test: /bootstrap\/js\//, loader: 'jQuery=jquery,$=jquery,this=>window' },
             {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'app'),
                loaders: ['react-hot','babel-loader','ts-loader']
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'app'),
                exclude: path.join(path.join(__dirname, 'app'),'scripts'),
                loaders: ['react-hot','babel-loader']
            },
              { test: /\.css$/,loader: 'style!css'},
              { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
              { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
              { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
              { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
              { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url?limit=8192' }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};


