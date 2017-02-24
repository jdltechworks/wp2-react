var resolve = require('path').resolve;
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	entry: {
		main: [ './src/index.js', './assets/index.scss' ]
	},
	output: {
		path: resolve(__dirname, './dist'),
		filename: '[chunkhash].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
			  		'babel-loader',
				],
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
		          fallback: "style-loader",
		          use: [ "css-loader", "sass-loader"]
		        })
			}
		]

	},
	plugins: [
		new webpack.EnvironmentPlugin({
			NODE_ENV: 'production',
			DEBUG: false
		}),
		new HtmlWebpackPlugin({
			template: './assets/html/index.html',
			inject: 'body'
		}),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
               // this assumes your vendor imports exist in the node_modules directory
               return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
		new ExtractTextPlugin('[chunkhash].css'),
	    new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.UglifyJsPlugin({ minimize: true, mangle: false, sourcemap: false }),
		new webpack.optimize.AggressiveMergingPlugin()
	]	
}