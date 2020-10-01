$(function() {
    // 获取今日推荐模块距离文档顶部的位置
    let toolTop = $(".recommend").offset().top;

    // 使用节流阀,也叫互斥锁
    let flag = true;

    // 一打开页面就调用电梯显示和隐藏的函数
    toggleTool();

    // 将电梯显示和隐藏封装到一个函数中来解决一个
    function toggleTool() {
        // 当页面滚动的宽度 > 今日推荐模块距离顶部的距离的时候,就让隐藏的电梯导航渐渐显示
        if($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    }

    // 监听页面滚动事件,一旦页面发生了滚动,就调用下面的函数
    $(window).scroll(function() {
        toggleTool();

        // 我们点击小li会让页面移动到相应的模块,会触发移动事件,我们想让移动的动画完成之后,才给小li添加current样式
        // 因此当动画完成之后,会把flag给设置为true,然后下面的代码就可以执行了
        if(flag) {
            // 页面滚动到某个内容区域,左侧电梯导航小li相应的添加和删除current类名
            // 我们遍历所有的大盒子获取每一个大盒子距离顶部的位置
            // 如果该位置 >= 被卷去的位置的话,就给小li添加或者删除相应的类名
            $(".floor .w").each(function(index, element) {
                if($(document).scrollTop() >= $(element).offset().top) {
                    $(".fixedtool li").eq(index).addClass("current").siblings().removeClass("current");
                }
            });
        }
    });

    // 点击电梯导航页面可以直接滚动到页面相应的区域
    $(".fixedtool li").click(function() {

        flag = false;

        // 当我们每次点击小li,就需要计算出页面要去往的位置
        // 我们获取到每个小li的索引号,通过该索引号找到对应的页面模块
        // 然后计算页面模块距离页面顶部的位置,并让页面移动到该位置
        let current = $(".floor .w").eq($(this).index()).offset().top;

        // 添加页面的滚动效果
        // 凡是跟动画相关的事件,都需要在该事件前面添加一个stop()事件,防止动画排队事件发生
        // 整个页面滚动需要 使用到顶级元素 body 和 html
        $("body, html").stop().animate({
            scrollTop: current,
        }, function() {
            // 当整个页面的动画完成之后,让flag改为true
            flag = true;
        });

        // 点击之后,让当前的小li添加current类名,姐妹元素移除current类名
        $(this).addClass("current").siblings().removeClass("current");
    });
})