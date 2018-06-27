var webpack = require('webpack')
var path = require('path')
module.exports = {
	entry : {
		main : './src/js/main.js'
	},
	output : {
		//__dirname，就是当前webpack.config.js文件所在的绝对路径
		filename : '[name].js',
		path : path.join(__dirname, './public/javascripts'),
	},
	mode:"development",
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					'presets': ['es2015'],
					plugins : ['transform-runtime']
				}
			}
	   ]
	}
};