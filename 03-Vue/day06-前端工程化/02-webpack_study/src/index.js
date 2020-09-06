// 先导入jquery
import $ from 'jquery'
// 引入我们写的css
import './css/cssStyle.css'
// 引入我们写的less样式文件
import './css/lessStyle.less'
// 引入我们写的scss样式文件
import './css/scssStyle.scss'
// 引入我们写的Vue的单文件组件
import App from './components/App.vue'

// 使用jquery来实现各行变色
$(function() {
    // 奇数行,偶数行颜色不同
    $('li:odd').css('backgroundColor', 'pink');
    $('li:even').css('backgroundColor', 'blue');
})

// 定义一个js高级语法
class Person {
    static info = "infoMessage";
}
console.log(Person.info);