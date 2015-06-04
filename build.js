var webpack = require('webpack');
var config = require('./webpack.config.js');
var compiler = webpack(config);
compiler.run(function (err, stats) {
	err && console.error(err);
	console.log(stats.toJson()); // по завершению, выводим всю статистику
});
