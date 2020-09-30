$(function() {
    // 获取今日推荐模块距离文档顶部的位置
    let toolTop = $(".recommend").offset().top;
    // 页面滚动事件
    $(window).scroll(function() {
        // 当页面滚动的宽度 > 今日推荐模块距离顶部的距离的时候,就让隐藏的电梯导航渐渐显示
        if($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    });
})