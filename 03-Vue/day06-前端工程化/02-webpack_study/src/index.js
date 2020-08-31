// 先导入jquery
import $ from 'jquery'

// 使用jquery来实现各行变色
$(function() {
    // 奇数行,偶数行颜色不同
    $('li:odd').css('backgroundColor', 'pink');
    $('li:even').css('backgroundColor', 'blue');
})