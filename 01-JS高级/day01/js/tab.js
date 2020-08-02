// 声明一个全局变量
let that;
// 定义一个类
class Tab {

    constructor (id) {
        // 把当前类对象赋值给全局变量 that
        that = this;

        this.main = document.querySelector(id);
        
        // 获取页面+按钮的对象(整个页面只有一个)
        this.add = this.main.querySelector(".tabadd");

        // 获取li标签的父元素,选中第一个 ul元素
        this.ul = this.main.querySelector(".fisrstnav ul:first-child");
        // section 父元素
        this.fsection = this.main.querySelector(".tabscon");

        // 页面一加载,就初始化init()方法,为页面元素添加事件
        this.init();
    }

    init () {

        // 当初始化的时候就获取li和section元素
        this.updateNode();

        // init 初始化操作让相关的元素绑定事件
        for (let i = 0; i < this.lis.length; i++) {
            // 给每一个li元素对象添加与之对应的索引
            this.lis[i].index = i;
            // 给每一个li元素添加点击事件
            this.lis[i].onclick = this.toggleTab;
            // 给每一个标签页头添加删除功能
            this.remove[i].onclick = this.removeTab;
            // 给选中的所有标签头部的span标签添加鼠标双击事件
            this.spans[i].ondblclick = this.editTab;
            // 给所有的selections 添加鼠标双击事件
            this.selections[i].ondblclick = this.editTab;
        }

        // 初始化点击+按钮增加事件
        this.add.onclick = this.addTab;
    }

    // 获取所有的li和section
    updateNode () {
        // 通过最外层的id为tab的div标签,获取div标签中的所有li标签对象
        this.lis = this.main.querySelectorAll("li");
        this.selections = this.main.querySelectorAll("section");
        // 获取页面上 X 按钮的对象
        this.remove = this.main.querySelectorAll(".icon-guanbi");
        // 选中span标签
        this.spans = this.main.querySelectorAll(".fisrstnav li span:first-child");
    }

    // 切换功能
    toggleTab () {
        // console.log(this.index);

        // 先全体清除样式,然后给被点击的元素添加事件
        that.clearClass();

        // 谁调用此方法,谁的class就会添加上 liactive
        this.className = 'liactive';
        // 因为li对象中没有 selections 属性,因此我们不能使用this,而应该使用全局变量that
        that.selections[this.index].className = 'conactive';
    }

    // 清除类的样式
    clearClass () {
        // 因为使用了全局变量that来调用此方法,因此下面的this都是全局的
        for (const key in this.lis) {
            if (this.lis.hasOwnProperty(key)) {
                this.lis[key].className = "";
                this.selections[key].className = "";
            }
        }
    }

    // 添加功能
    addTab () {
        var random = Math.random();

        // 清除所有的li和section标签所对应的类
        that.clearClass();

        // 1. 创建li和section元素
        var li = `<li class="liactive">
                    <span>新选项卡</span>
                    <span class="iconfont icon-guanbi"></span>
                  </li>`;
        
        var section = `<section class="conactive">
                        测试 ${random}
                       </section>`;


        // 2. 把创建好的元素添加到对应的父元素中, beforeend 代表插入选中元素内部的最后一个子节点之后
        that.ul.insertAdjacentHTML("beforeend", li);
        // 追加section标签
        that.fsection.insertAdjacentHTML("beforeend", section);

        // 添加完成元素之后,需要重新初始化页面的元素,保证我们新添加的元素也拥有点击事件和样式
        that.init();
    }

    // 删除功能
    removeTab (e) {

        // 子元素拥有点击事件,父元素也拥有点击事件,不做任何处理的话,触发子元素点击事件的同时也会触发父元素的点击事件造成冒泡
        // 我们通过添加下面的事件来阻止冒泡的产生
        e.stopPropagation();

        // 我们通过选择器选中的是包含删除按钮的属性的span标签,我们可以通过该标签的父元素li来获取相应的索引
        var index = this.parentNode.index; 
        // 根据索引号直接删除对应的 li 和 section ,remove()方法可以直接删除指定的元素
        that.lis[index].remove();
        that.selections[index].remove();
        

        // 因为我们执行了删除操作,页面上的元素的个数发生了变化,我们重新获取一遍最新的元素
        that.init();

        // 当我们删除的不是选中状态的li,也就是说页面上还有处于选中状态的选项卡的时候,不选中前一个标签
        if (document.querySelector(".liactive")) {
            return;
        }

        // 当我们删除了选中状态的li的时候,让它的前一个li标签处于选定状态
        // 我们对删除状态的li的索引减1,就相当于获取到了被删除标签的前一个标签
        index--;
        // 手动调用我们的点击事件,不需要鼠标触发
        // 一旦li标签有了点击事件,就会触发选项卡切换事件了
        // 只有当下标 >= 0的时候才会触发点击事件,可以防止我们把页面上的所有选项卡删除的时候报错
        that.lis[index] && that.lis[index].click();
    }

    // 修改功能
    editTab () {
        // 获取span标签内原本就有的文本
        let spanStr = this.innerHTML;
        // 鼠标双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        // 生成一个文本框
        this.innerHTML = `<input type="text" />`;

        // 把span标签中的内容放置到文本框中
        var input = this.children[0];  // span标签的第一个children就是input标签
        input.value = spanStr;
        // 使文本框里的文字处于选中状态
        input.select();

        // 当鼠标离开焦点的时候,将文本框里面的内容赋值给span标签中
        input.onblur = function () {
            this.parentNode.innerHTML = this.value;
        }

        // 当用户在文本框输入完成之后,按下回车键也可以将文本框里面的值赋值给span
        input.onkeyup = function (e) {
            if (e.keyCode === 13) {
                // 手动调用失去焦点的方法,不需要鼠标真正的失去焦点
                this.blur();
            }
        }
    }
}

// 获取id为tab的对象
new Tab("#tab");