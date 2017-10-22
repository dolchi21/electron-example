var fs = require('fs')
var path = require('path')

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

var APP_DIR = path.resolve(__dirname, 'src')

module.exports = {
    entry: {
        app: path.join(APP_DIR, '/app.js')
    },
    target: 'node',
    externals: nodeModules,
    output: {
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "umd",
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: ['babel-loader']
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    }
}