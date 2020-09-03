// 先导入jquery
import $ from 'jquery'
// 引入我们写的css
import './css/cssStyle.css'

// 使用jquery来实现各行变色
$(function() {
    // 奇数行,偶数行颜色不同
    $('li:odd').css('backgroundColor', 'pink');
    $('li:even').css('backgroundColor', 'blue');
})