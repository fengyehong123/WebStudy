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
    });
})