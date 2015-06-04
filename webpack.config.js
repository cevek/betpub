var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	context: path.join(__dirname, 'src'), // исходная директория
	//entry: './index', // файл для сборки, если несколько - указываем hash (entry name => filename)
	entry: [
		'webpack-dev-server/client?http://localhost:8088', // WebpackDevServer host and port
		'webpack/hot/only-dev-server',
		'./index' // Your appʼs entry point
	],

	output: {
		path: path.join(__dirname, 'assets'),
		filename: 'bundle.js',
		publicPath: '/assets/'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['react-hot', 'babel'],
				exclude: /(node_modules|bower_components)/,
				//include: path.join(__dirname, 'src')
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			},
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					//optional: ['runtime'],
					stage: 0,
					loose: ["es6.classes"],
					//modules: 'ignore'
				}
			}
		],
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devtool: 'eval',
	plugins: [
		new ExtractTextPlugin('style.css'),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};