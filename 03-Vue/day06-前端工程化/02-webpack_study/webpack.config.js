const path = require('path');
// 引入生成预览画面的插件对象
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    // 指定要用到的模板文件
    template: './src/index.html',
    // 指定生成的文件的名称,该文件存在于内存中,在目录中不显示
    filename: 'index.html'
})

// 引入vue单文件组件打包器
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    // 指定编译模式
    mode: 'development',
     // 打包入口文件的路径
    entry: path.join(__dirname, './src/index.js'),
    output: {
        // 输出文件的存放路径
        path: path.join(__dirname, './dist'),
        // 输出文件的名称
        filename: 'bundle.js'
    },
    // 添加生成预览页面的插件
    plugins: [htmlPlugin, new VueLoaderPlugin()],
    // 打包
    module: {
        rules: [
            // test 后面对应着正则表达式
            // use 后面表示要使用的打包模块
            // { test: /\.css$/,use:['style-loader', 'css-loader'] },

            // postcss-loader 是用来处理css兼容性的加载器插件
            { test: /\.css$/,use:['style-loader', 'css-loader', 'postcss-loader'] },
            // 添加 .less文件的打包规则
            { test: /\.less$/,use:['style-loader', 'css-loader', 'less-loader'] },
            // 添加 .scss文件的打包规则
            { test: /\.scss$/,use:['style-loader', 'css-loader', 'sass-loader'] },
            { 
                // 指定要打包的文件的类型
                test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                // 指定加载器和文件的大小
                use: 'url-loader?limit=16940'
            },
            { test: /\.js$/,use: 'babel-loader', exclude: /node_modules/ },
            // 添加单文件组价加载器
            { test: /\.vue$/,use: 'vue-loader' }
        ]
    }
}