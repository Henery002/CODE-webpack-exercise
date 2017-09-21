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
		// path:'./dist',				//指定打包文件的存放位置
		filename:'js/[name]-[chunkhash].js',			//指定打包文件的文件名
		publicPath:'http://cdn.com/'
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:'index-[hash].html',
			// filename:'index.html',
			template:'index.html',
			//传参
			// inject:'body',
			inject:false,
			title:'webpack is good',
			date:new Date(),
			//对生成文件压缩
			minify:{
				removeComments:true,				//删除注释
				collapseWhitespace:true				//删除空格
			}
		})
	]
}