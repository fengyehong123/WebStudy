$(function() {
    /*
        1. 全选/全不选模块
        就是把全选按钮(checkall)的状态赋值给三个小的按钮(j-checkbox)就可以了
    */
    // 当单选框被点击的时候会触发.change()事件
    $(".checkall").change(function() {
        // 获取全选按钮的状态
        let state = $(this).prop("checked");
        // 把全选框的状态赋值给一个个的小单选框,同时把checkall的状态也更改
        $(".j-checkbox, .checkall").prop("checked", state);

        if(state) {
            // 让所有的商品都添加上check-cart-item类名
            $(".cart-item").addClass("check-cart-item");
        } else {
            // check-cart-item类名移除
            $(".cart-item").removeClass("check-cart-item");
        }
    });

    // 2. 如果小复选框被选中的个数等于3,就应该把全选按钮给选上,否则全选按钮不选中
    $(".j-checkbox").change(function() {
        // :checked 是用来获取被选中的单选框的选择器
        // 如果被选中的单选框的个数 = 全部的单选框的个数
        if($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }

        if($(this).prop("checked")) {
            // 让当前商品都添加上check-cart-item类名
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            // check-cart-item类名移除
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    });

    // 3. 增减商品数量模块,首先声明一个变量,当我们点击+号(increment),就让这个值++,然后赋值被文本框
    $(".increment").click(function() {
        // 当我们点击+按钮增加商品数量的时候,我们先获取+按钮的兄弟元素(文本框)(".itxt")的值
        var n = $(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);

        // 计算小计模块,根据文本框的值 * 当前商品的价格 = 商品的小计
        // this代表当前点击的+号按钮,我们通过+号按钮一层层的找到 价格元素
        //var p = $(this).parent().parent().siblings(".p-price").html();
        var p = $(this).parents(".p-num").siblings(".p-price").html();

        // 去掉金额前的羊角符号
        p = p.substr(1);
        // 计算的结果保留两位小数
        let price = (p * n).toFixed(2);
        // 计算并设定小计模块的价格
        $(this).parents(".p-num").siblings(".p-sum").html("¥ " + price);
        getSum();
    });
    // 商品数量减少
    $(".decrement").click(function() {
        // 当我们点击+按钮增加商品数量的时候,我们先获取+按钮的兄弟元素(文本框)(".itxt")的值
        var n = $(this).siblings(".itxt").val();
        if(n == 1) {
            // 如果只有一件商品的话,就不能让数量再减少了
            return false;
        }
        n--;
        $(this).siblings(".itxt").val(n);
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        // 去掉金额前的羊角符号
        p = p.substr(1);
        // 计算的结果保留两位小数
        let price = (p * n).toFixed(2);
        // 计算并设定小计模块的价格
        $(this).parents(".p-num").siblings(".p-sum").html("¥ " + price);
        getSum();
    });

    // 如果用户不点击+号或者-号按钮,直接修改文本框里面的件数,也要触发小计模块的计算
    $(".itxt").change(function() {
        // 先得到文本框里面的值,然后 * 当前商品的单价
        var n = $(this).val();  // 获取用户输入的件数
        // 获取商品的单价
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        // 去掉羊角符
        p = p.substring(1);
        // 计算小计价格
        $(this).parents(".p-num").siblings(".p-sum").html("¥ " + (n * p).toFixed(2));
        // 当用户修改数量的时候,重新计算总件数
        getSum();
    });

    // 一打开页面的时候就会调用一次计算件数和钱数的方法
    getSum();

    // 计算总计和总额模块
    function getSum() {
        // 计算总件数
        let count = 0;
        // 计算总价格
        let monery = 0;

        $(".itxt").each(function(index, element) {
            // 累加计算总件数
            count += parseInt($(element).val());
        });
        // 把总件数赋值给总件数框
        $(".amount-sum em").text(count);

        // 累加计算总钱数
        $(".p-sum").each(function(index, element) {
            monery += parseFloat($(element).text().substring(1));
        });
        // 把总钱数,赋值给总钱数框.保留两位小数
        $(".price-sum em").text(`¥ ${monery.toFixed(2)}`);
    }

    // 删除商品模块
    // 1. 商品后面的删除按钮
    $(".p-action a").click(function() {
        // 删除的是当前的商品 this代表当前点击的该商品的删除按钮,通过按钮对象找到购物车中商品一栏的对象,然后删除
        $(this).parents(".cart-item").remove();
        getSum();
    });

    // 2. 删除复选框选中的商品
    $(".remove-batch").click(function() {
        // 自己写法麻烦的写法
        /* 
            $(".j-checkbox").each(function(index, element) {
                if($(element).prop("checked")) {
                    $(element).parents(".cart-item").remove();
                }
            }); 
        */

        // 老师的简便写法,通过:checked选择器.里面含有隐式迭代,会把所有被选中的复选框所在的商品行删除
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    });

    // 3. 清空购物车,删除所有的商品
    $(".clear-all").click(function() {
        $(".cart-item").remove();
        getSum();
    })

})