import webpack from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import OpenBrowserWebpackPlugin from 'open-browser-webpack-plugin';

const config = {
    devtool: 'inline-source-map',
    debug: true,
    entry: ['./src/main.ts'],
    output: {
        path: './dist',
        filename: '[name].[hash].js',
        sourceMapFilename: '[name].[hash].map'
    },
    module: {
        loaders: [
          {test: /\.ts(x?)$/, loader: 'ts-loader'},
          {test: /\.css$/, loader: 'style!css'},
          {test: /\.tpl.html/, loader: 'html'},
          {test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/, loader: 'url?limit=50000'},
          {test: /\.less$/,loader: 'style-loader!css-loader!less-loader'},
	      {test: /\.scss$/,loader: 'style!css!sass'}
        ]
    },
    resolve: {
		root: __dirname,
		extensions: ['', '.ts', '.js', '.json']
	},
	resolveLoader: {
		modulesDirectories: ["node_modules"]
	},
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new OpenBrowserWebpackPlugin({
              url: 'http://localhost:' +8080
        })
    ],
    tslint: {
      emitErrors: false,
      failOnHint: false,
      resourcePath: 'src',
    },
    node : {
      progress: true,
      colors: true,
    }
};

export default config;
