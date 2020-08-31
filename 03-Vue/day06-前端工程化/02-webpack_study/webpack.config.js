const path = require('path');

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
    }
}