//引用html-webpack-plugin插件
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// context:,
	// entry:['./src/script/main.js','./src/script/a.js'],		//指定入口文件
	entry:{
		main:'./src/script/main.js',
		a:'./src/script/a.js'
	},
	output:{
		path:'./dist',				//指定打包文件的存放位置
		filename:'js/[name]-[chunkhash].js'			//指定打包文件的文件名
	},
	plugins:[
		new htmlWebpackPlugin({
			template:'index.html'
		})
	]
}