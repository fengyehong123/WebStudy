$(function() {

    // 每次页面一加载,就调用一下加载函数
    load();

    /*
        1. 按下回车,把完整的数据存储到本地的储存里面
    */
    // 给文本输入框绑定一个键盘按下事件
    $("#title").on("keydown", function(event) {
        // 如果用户按下的是回车键
        if(event.keyCode === 13) {
            if($(this).val().trim() === "") {
                alert("请输入待办的事项");
            } else {
                // 获取本地存储中的数据
                let localData = getData();

                // 把local数组进行更新数据,把最新的数据追加给local数组
                let obj = {
                    //$(this).val() 代表输入框输入的数据
                    title: $(this).val(),
                    done: false
                };
                // 向数组中追加对象
                localData.push(obj);
                // 将数组保存到本地存储
                saveData(localData);

                // 将本地存储的数据渲染到页面上面
                load();

                // 清空文本输入框的内容
                $(this).val("");
            }
        }
    });

    /*
        toDoList删除操作
        我们给ol中的a元素(删除按钮)绑定click事件
        因为这个a元素时动态创建的,所以不能直接用click事件,
        而应该用.on()进行事件绑定
    */ 
    $("ol, ul").on("click", "a", function() {
        // 1. 先获取本地数据
        var data = getData();
        // 2. 修改数据
        // 获取当前被点击的a标签的索引值
        let index = $(this).attr("aIndex");  // 获取我们自定义的属性值(每个a标签的索引)
        data.splice(index, 1);
        // 3. 保存到本地存储
        saveData(data);
        // 4. 重新渲染页面
        load();
    });

    // toDoList 正在进行和已经完成选项操作 
    // 给ol和ul中的input复选框都绑定了click事件
    $("ol, ul").on("click", "input", function() {
        // 1. 获取本地存储的数据
        var data  = getData();
        // 2. 修改数据
        // 因为input复选框和a元素(删除按钮)是兄弟关系,所以获取到a元素的自定义属性索引,就相当于获取到input的索引
        var index = $(this).siblings("a").attr("aIndex");
        // 把当前复选框的选定状态(true或者false)赋值给数组中的数据
        data[index].done = $(this).prop("checked");
        console.log(data);
        // 3. 保存到本地存储中
        saveData(data);
        // 4. 重新渲染到页面中
        load();
    });

    // 读取localStorage中存储的数据
    function getData() {
        let data = localStorage.getItem("todoList");
        if(data != null) {
            return JSON.parse(data);
        } else {
            // 如果本地存储内没有数据,就返回一个空数组
            return [];
        }
    }

    // 将数据写入本地存储
    function saveData(data) {
        localStorage.setItem("todoList", JSON.stringify(data));
    }

    // 将本地的数据渲染到页面上
    function load() {
        // 获取本地存储的数据
        let data = getData();

        // 在遍历之前要先清空页面中ol和ul里面原有的元素内容
        $("ol, ul").empty();

        // 正在进行的个数
        let todoCount = 0;
        // 完成了的个数
        let doneCount = 0;

        // 遍历从本地获取的数据 通过 数组.forEach(function(value, index) {XXX}) 的方式也可以遍历数组
        $.each(data, function(index, element) {
            // 需要进行条件判断,如果勾选了对勾就保存到ul(已完成中)
            if(element.done) {
                let str = `
                    <li>
                        <input type="checkbox" checked="checked">
                        <p>${element.title}</p>
                        <!-- 给每一个a标签添加唯一的索引号 -->
                        <a href="javascript:;" aIndex="${index}"></a>
                    </li>
                `;
                $("ul").prepend(str);
                doneCount++;
            } else {
                // 如果没有勾选就保存到ol(未完成中)
                let str = `
                    <li>
                        <input type="checkbox">
                        <p>${element.title}</p>
                        <!-- 给每一个a标签添加唯一的索引号 -->
                        <a href="javascript:;" aIndex="${index}"></a>
                    </li>
                `;
                $("ol").prepend(str);
                todoCount++;
            }
        });

        // 将已经完成和未完成的任务的数量显示在页面上
        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);
    }
})