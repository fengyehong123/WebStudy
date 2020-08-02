# 一. 数据类型

## 1.1 简单数据类型

> Number、String、Boolean、Undefined、Null



### 1.1.1 Number类型

`Number类型的进制`

- > 十进制

   进行算数计算时，八进制和十六进制表示的数值最终都将被转换成十进制数值。

- > 八进制

  数字序列范围：0~7 

  如果字面值中的数值超出了范围，那么前导零将被忽略，后面的数值将被当作十进制数值解析

  ```javascript
  // 对应十进制的7
  var num1 = 07;
  // 对应十进制的19,因为出现了数字9,所以已经超过了八进制,所以最开始位的0失效,八进制变成了十进制的 19
  var num2 = 019; 
  // 对应十进制的8
  var num3 = 08;   
  ```

- > 十六进制

  数字序列范围：0~9以及A~F

  ```javascript
  // 定义了一个16进制的数据
  var num = 0xA;
  ```



`浮点数精度问题`

==不要直接判断两个浮点数是否相等==

```javascript
// 浮点数
var n = 5e-324;   // 科学计数法  5乘以10的-324次方  
// 浮点数值的最高精度是 17 位小数，但在进行算术计算时其精确度远远不如整数
var result = 0.1 + 0.2;    // 结果不是 0.3，而是：0.30000000000000004
var a = 0.3
console.log( a == result);  // fasle
```



`数值判断`

> NaN：not a number    NaN 与任何值都不相等，包括他本身

==不要用NaN验证是不是NaN==

```javascript
var num;
console.log(num + 10 == NaN);  // false ,不能用 NaN 来验证值是不是NaN
// 验证结果是不是NaN,应该使用isNaN()
```

> isNaN: is not a number

==判断结果不是一个数字可以使用isNaN(变量名)==

```javascript
var num;
var sum = num + 10;
console.log(sum); // NaN
// 不是数字为true,是数字结果为false
console.log(isNaN(sum));  // true ,结果不是数字
```

### 1.1.2 String类型

![](https://kameii-markdown-img.oss-cn-qingdao.aliyuncs.com/article/20200802195326.png)



> 用length()来判断字符串长度

```javascript
var str = '黑马程序猿 Hello World';
console.log(str.length);
```

### 1.1.3 布尔类型

> - Boolean字面量：  true和false，区分大小写
> - 计算机内部存储：true为1，false为0



### 1.1.4 Undefined和Null

- undefined表示一个声明了没有赋值的变量，变量只声明的时候值默认是undefined

  >undefined: 未定义,值只有一个:undefined
  >
  >什么情况下的结果是undefined
  >变量声明了,没有赋值,结果是undefined
  >函数没有明确返回值,如果接收了,结果也是undefined

  ```javascript
  // 下面的变量只声明没有赋值
  var num;
  // 变量只声明的时候值默认是undefined
  console.log(num);  // undefined
  // 如果一个变量的结果是undefined和一个数字进行计算,结果:NaN不是一个数字,也没有意义
  console.log(num + 10);  // NaN
  ```

- null表示一个空，变量的值如果想为null，必须手动设置

  null:空类型,值只有一个:null,一个对象指向为空了,此时可以赋值为null

  ```javascript
  var nll = null;  // 手动赋值 null 给变量 nll
  ```



## 1.2 复杂数据类型

Object

```javascript
var obj = new Object();  // 赋值了复杂的数据类型
```

## 1.3 数据类型的获取

- typeof 变量名

- typeof (变量名)

```javascript
var num = 10;
var str = "小白";
var flag = true;
var nll = null;
var undef;
var obj = new Object();

// 是使用typeof 获取变量的类型
console.log(typeof num);  // number
console.log(typeof str);  // string
console.log(typeof flag);  // boolean
// 有些值没有办法通过tostring()的方式转换成字符串,这个时候需要通过String()的方式进行转换
console.log(String(nll));  // null
console.log(typeof nll);  // object

console.log(typeof undef);  // undefined
console.log(typeof obj);  // object
console.log(typeof(num));  // number
```



## 1.4 数据类型的转换

### 1.4.1 转换成String类型

==如果变量有意义调用.toString()使用转换==

==如果变量没有意义使用String()转换==

- toString()

  ```javascript
  var num = 5;
  console.log(num.toString());
  ```

- String()

  >String()函数存在的意义：有些值没有toString()，这个时候可以使用String()。比如：undefined和null

  ```javascript
  var nll = null;
  console.log(String(nll));  // null
  
  var num;
  console.log(String(num) == "undefined");  // true
  ```

- 拼接字符串方式

  >num  +  ""，当 + 两边一个操作符是字符串类型，一个操作符是其它类型的时候，会先把其它类型转换成字符串再进行字符串拼接，返回字符串



### 1.4.2 转换成Number类型

- Number()

  > Number()可以把任意值转换成数值，如果要转换的字符串中有一个不是数值的字符，返回NaN

  ```javascript
  console.log(Number("10"));  // 10
  console.log(Number("10afrswfdsf"));  // NaN
  console.log(Number("g10"));  // NaN
  console.log(Number("1fds0"));  // NaN
  console.log(Number("10.98"));  // 10.98
  console.log(Number("10.98fdsfd"));  // NaN
  ```

- parseInt()

  ```javascript
  var num1 = parseInt("12.3abc");  // 返回12，如果第一个字符是数字会解析知道遇到非数字结束
  var num2 = parseInt("abc123");   // 返回NaN，如果第一个字符不是数字或者符号就返回NaN
  ```

- parseFloat()

  > parseFloat()把字符串转换成浮点数
  > parseFloat()和parseInt非常相似，不同之处在与
  > 	parseFloat会解析第一个. 遇到第二个.或者非数字结束
  > 	如果解析的内容里只有整数，解析成整数

  ```javascript
  console.log(parseFloat("10"));  // 10
  console.log(parseFloat("10afrswfdsf"));  // 10
  console.log(parseFloat("g10"));  // NaN
  console.log(parseFloat("1fds0"));  // 1
  console.log(parseFloat("10.98"));  // 10.98
  console.log(parseFloat("10.98fdsfd"));  // 10.98
  ```

- +，-0等运算

  ```javascript
  var str = '500';
  console.log(+str);		// 取正
  console.log(-str);		// 取负
  console.log(str - 0);
  ```



### 1.4.3 转换成Boolean类型

> 0   ' '(空字符串)  null  undefined  NaN 会转换成false  其它都会转换成true

```javascript
console.log(Boolean(1));  // true
console.log(Boolean(0));  // false
console.log(Boolean(11));  // true
console.log(Boolean(-10));  // true
console.log(Boolean("哈哈"));  // true
console.log(Boolean(""));  // false
console.log(Boolean(null));  // false
console.log(Boolean(undefined));  // false
```



# 二. 操作符

- 算术运算符

  ```
  + - * / %  
  ```

  前置++

  > 先加1，后参与运算

  后置++

  > 先参与运算，后加1

- 逻辑运算符

  ```
  && 与 两个操作数同时为true，结果为true，否则都是false
  || 或 两个操作数有一个为true，结果为true，否则为false
  !  非  取反
  ```

- 关系运算符(比较运算符)

  ```
  <  >  >=  <= == != === !==
  ```

  ```javascript
  ==与===的区别：==只进行值得比较，===类型和值同时相等，则相等
  
  var result = '55' == 55;  	// true
  var result = '55' === 55; 	// false 值相等，类型不相等
  var result = 55 === 55; 	// true
  ```

- 赋值运算符

  > =   +=   -=   *=   /=   %=

  ```java
  var num = 0;
  num += 5;	//相当于  num = num + 5;
  ```

# 三. 数组

> 1.所谓数组，就是将多个元素按一定顺序排列放到一个集合中，那么这个集合我们就称之为数组。数组一般会存放同样类型的数据,Js中的数组可以存放不同类型的数据.
>
> 2.数组是一个有序的列表，可以在数组中存放任意的数据，并且数组的长度可以动态的调整。



## 3.1 数组的创建方式

- 构造函数的方式

  ```javascript
  // 创建一个空数组
  var arr1 = new Array();
  // 创建一个放有三个字符串的数组
  var arr = new Array('zs', 'ls', 'ww');
  ```

- 字面量的方式创建数组

  ```javascript
  // 创建一个空数组
  var arr2 = [];
  // 创建一个放有三个字符串的数组
  var arr2 = new Array('zs', 'ls', 'ww');
  ```

  

## 3.2 判断数据是不是数组

> 判断一个数据是不是数组
>
> 1. Array.isArray()
> 2. instanceof

```javascript
var arr1 = new Array();
var arr = new Array('zs', 'ls', 'ww');

console.log(Array.isArray(arr1));  // true
console.log(Array.isArray(arr2));  // true

console.log(arr1 instanceof Array);  // true
console.log(arr2 instanceof Array);  // true
```



## 3.3 数组的常用方法

### 3.3.1 数组元素的获取

```javascript
// 格式：数组名[下标]	下标又称索引
// 功能：获取数组对应下标的那个值，如果下标不存在，则返回undefined。
var arr = ['red', 'green', 'blue'];
arr[0];	// red
arr[2]; // blue
arr[3]; // 这个数组的最大下标为2,因此返回undefined
```

### 3.3.2 数组的遍历

- 普通的元素遍历

```javascript
for(var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
```

- 通过回调函数的方式遍历

```javascript
 var arr = ["a","b","c"];
arr.forEach(function(ele){
    console.log(ele + "你好");  // a你好 b你好 c你好
});
```





### 3.3.3 数组元素的增加

```javascript
// 格式：数组名[下标/索引] = 值;
// 如果下标有对应的值，会把原来的值覆盖，如果下标不存在，会给数组新增一个元素。
var arr = ["red", "green", "blue"];
// 把red替换成了yellow
arr[0] = "yellow";
// 给数组新增加了一个pink的值
arr[3] = "pink";
```



### 3.3.4  Array.from( )

> 将一个类数组对象或者可遍历对象转换成一个真正的数组。

- 将类数组对象转换为真正数组

  ```javascript
  // 类数组对象，最基本的要求就是具有length属性的对象。
  let arrayLike = {
      0: 'tom', 
      1: '65',
      2: '男',
      3: ['jane','john','Mary'],
      // 因为指定了length属性,所以这个对象是一个类属性对象
      'length': 4  
  }
  // 将类属性对象转化成数组
  let arr = Array.from(arrayLike)
  console.log(arr) // ['tom','65','男',['jane','john','Mary']]
  ```

  - length属性的值决定了生成数组的长度
  - 如果类数组对象不带length属性，那么转换出来就是空数组

  ```javascript
  let arrayLike = {
      0: 'tom', 
      1: '65',
      2: '男',
      3: ['jane','john','Mary'],
      // 这里将类数组的属性设置为3,所以只会生成一个长度为3的数组
      // ['jane','john','Mary']不会作为元素被生成
      'length': 3  
  }
  // 将类属性对象转化成数组
  let arr = Array.from(arrayLike)
  console.log(arr) // ['tom','65','男']  生成的数组的长度为 3 
  ```

  - 类数组对象的属性名必须为数值型或字符串型的数字,否则结果会是 undefined

  ```javascript
  let arrayLike = {
      'name': 'tom',
      // 3 : '65',  数值型和字符串型的数字都是可以当做属性名的
      '3' : '65',  // 属性名意味着属性值在数组中的位置,因为属性名是3,所以 "65" 在数组的最末端
      'sex': '男',
      'friends': ['jane','john','Mary'],
      length: 4
  }
  let arr = Array.from(arrayLike)
  console.log(arr)  // [undefined, undefined, undefined, "65"]
  ```

  - 有length属性,空余的索引值将会是undefined

  ```javascript
  let json = {
      0:"a",
      1:"b",
      2:"c",
      3:"zk",
      four:"4",
      5:"zs",
      length:7,
  }
   
  let arr = Array.from(json);
   
  console.log(arr);   // ["a", "b", "c", "zk", undefined, "zs", undefined]
  ```

  

- 将字符串转换为数组

  ```javascript
  let  str = 'hello world!';
  console.log(Array.from(str)) 
  // ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"]
  ```



- 复制数组，如果传的是数组，将把数组复制一份传给新数组

  ```javascript
  let arr = [1,2,3,4,5];
  let arr2 = Array.from(arr);
  console.log(arr)        // [1,2,3,4,5]
  console.log(arr2)       // [1,2,3,4,5]
  ```



- 数组去重 

  ```javascript
  let arr = [1,1,"six","six",null,null,undefined,undefined,false,false,true,true,"",""];
   
  // new Set 是实现数组去重，
  // Array.from()把去重之后转换成数组
  let arr2 = Array.from(new Set(arr));
   
  console.log(arr2);  // [1, "six", null, undefined, false, true, ""]
  ```



- 对数组中的每一个元素进行处理

  > `Array.from`还可以接受第二个参数，作用类似于数组的`map`方法，用来对每个元素进行处理，将处理后的值放入返回的数组

  ```javascript
  let arr = [12,45,97,9797,564,134,45642]
  let set = new Set(arr)
  console.log(Array.from(set, item => item + 1)) //[ 13, 46, 98, 9798, 565, 135, 45643 ]
  ```

  

- 将伪数组转成数组在赋给新数组

  ```javascript
  // html代码
  <ul>
      <li>1111</li>
      <li>2222</li>
      <li>3333</li>
      <li>4444</li>
      <li>5555</li>
  </ul>
  
  // 得到的是伪数组
  let oli = document.querySelectorAll("li");
  console.log(oli);   //NodeList(5) [li, li, li, li, li]
  
  // 对伪数组NodeList()进行转换
  let arr2 = Array.from(oli);
  console.log(arr2);  //(5) [li, li, li, li, li] 
  ```



### 3.3.5  .concat()合并数组

> concat(数组,数组,数组,...) 组合一个新的数组

```javascript
var arr1 = [10,20,30];
var arr2 = [40,50,60];
console.log(arr1.concat(arr2));  // 组成了新的数组 [10,20,30,40,50,60]
```



### 3.3.6 .forEach() 遍历数组

> 回调函数的方式快速遍历一个数组

```javascript
var aaa = ["1","2","3"];
// ele就是 数组 中的每一个元素
aaa.forEach(function(ele){
    console.log(ele + "你好");
})
```



### 3.3.7 .every()

> every(函数)--返回值是布尔类型
>
> 函数作为参数使用,函数中有三个参数,第一个参数是元素的值，第二个参数是索引值,第三个参数是原来的数组(没用), 如果这个数组中的每个元素的值都符合条件,最后才返回的是true

```javascript
var arr=[1000,2000,3000];
// 第一个参数为数组中元素的值,第二个参数为数组中元素的索引
var flag = arr.every(function(element,index){
    // 必须每一个元素都要大于2000，才能返回true,否则只能返回false
    return element > 2000;
})
console.log(flag);  // false

var arr=["小明明lkko","小曹操674","小白白bd","笑眯眯a"];
var flag = arr.every(function(ele,index){
    return ele.length > 3;
})
console.log(flag);  // true
```



### 3.3.8  .filter( )

> filter(函数);返回的是数组中每一个元素都复合条件的元素,组成了一个新的数组

```javascript
var arr = [10,20,30,40,50,60,70,80];

// 第一个参数ele代表每一个参数
var newArr = arr.filter(function(ele){
    // 要求每一个参数都要大于 40 
    return ele > 40;
})
console.log(newArr);  // 组成的新的数组： [50,60,70,80]  

// 过滤出 0 
var arr = [10,0,20,0,40,0,60,100];
var newArr = arr.filter(function(ele){
    // 过滤出不为0的数据
    return ele != 0;
})
console.log(newArr);  // [10,20,40,60,100]
```



### 3.3.9  .push( )

> push(值)  把值追加到数组中,加到最后了--->返回值也是追加数据之后的数组长度

```javascript
var arr = [1,2,3,4]
console.log(arr.push("我"));  // 新数组的长度为: 5  
console.log(arr);  // [1,2,3,4,"我"]  添加之后的新数组 	
```



### 3.3.10 .pop()

> pop();--->删除数组中最后一个元素,返回值就是删除的这个值

```javascript
var arr = [1,2,3,4,"我"];
console.log(arr.pop());  // 我
console.log(arr);  // [1,2,3,4]
```



### 3.3.11 .shift()

> shift();--->删除数组中第一个元素,返回值就是删除的这个值

```javascript
var arr = [1,2,3,4];
console.log(arr.shift());  // 1
console.log(arr);  // [2,3,4]
```



### 3.3.12 .unshift()

> unshift();--->向数组的第一个元素前面插入一个新的元素,----返回值是插入后的长度

```javascript
var arr = [2,3,4];
console.log(arr.unshift("你好"));  // 4  数组的长度
console.log(arr);  // ["你好",2,3,4]
```



### 3.3.13  .indexOf()

> indexOf(元素值);返回的是索引,没有则是-1

```javascript
var arr = [1,2,3,4,5,6]
// 返回了 元素值为 6 的索引
var index1 = arr.indexOf(6);
// 没有 60 这个元素值
var index2 = arr.indexOf(60);  
console.log(index1);  // 5
console.log(index2);  // -1
```



### 3.3.14  .join( )

> join("字符串");----返回的是一个字符串

```javascript
var arr = ["小白","小黑","小红","小芳","小绿","小苏"];

// 通过&插入到数组当中,已经由数组变成了字符串
var str = arr.join("&");
console.log(str);  // 小白&小黑&小红&小芳&小绿&小苏
console.log(typeof str);  // String
```



### 3.3.15  .map()

> map(函数);--->数组中的每个元素都要执行这个函数,
>
> 把执行后的结果重新的全部的放在一个新的数组中

```javascript
var arr = [0.1,0.2,0.3,0.4];
var new_arr = arr.map(function(x){
    // 自定义函数的话,必须要有返回值
    return x * 10;
})
console.log(new_arr);  // [1,2,3,4]

// 使用js自带的内置函数
var arr = [1.465,2.8465,3.5,4.84];
// 对所有的元素都进行了四舍五入
var new_arr = arr.map(Math.round);
console.log(new_arr);  // [1,3,4,5]
```



### 3.3.16 reverse()

> 反转数组

```javascript
var arr = ["er","se","wseh"];
arr.reverse();
console.log(arr);  // ["wseh","se","er"]
```



### 3.3.17 .sort()

> 对数组进行排序
>
> 单独使用sort方法排序,可能不稳定,我一般使用下面嵌套的方法来进行排序

```javascript
var arr=[1,40,20,10,100];
arr.sort(function (a,b) {
    if(a>b){
		// 正序排序
        return 1;
    }else if(a==b){
        return 0;
    }else{
        return -1;
    }
});
console.log(arr);
```



### 3.3.18 .slice()

> arr.slice(开始的索引,结束的索引);
>
> 把截取的数组的值放在一个新的数组中,但是不包含结束的索引对应的元素值

```javascript
var arr = [10,20,30,40,50,60,70,80,90,100];
var newArr = arr.slice(3,7);

// 索引7对应的数值是80,但是取80前面的那个数值
console.log(newArr);  // [40,50,60,70]
```



### 3.3.19 .splice( )

> splice(开始的位置,要删除的个数,替换的元素的值);
> 一般是用于删除数组中的元素,或者是替换元素,或者是插入元素

```javascript
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
// 在索引为2的位置插入'drum'(因为已经把删除的个数设置为0,所以只插入)
myFish.splice(2, 0, 'drum');
console.log(myFish);  // ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
// 从索引为2的位置删除一项（也就是'drum'这一项）
myFish.splice(2, 1); 
// 数组又变了回去
console.log(myFish);  // ['angel', 'clown', 'mandarin', 'sturgeon']
```



## 3.4 数组的练习

```javascript
var arr1 = [10, 20, 30, 40, 50];
// 案例1:求数组中所有元素的和 
var sumArr1 = 0;
for (var i = 0; i < arr1.length; i++) {
    sumArr1 += arr1[i];
}
console.log("所有元素的和" + sumArr1);

// 案例2:求数组中所有元素的平均值
var sumArr2 = 0;
for (var i = 0; i < arr1.length; i++) {
    sumArr2 += arr1[i];
}

var vegArr1 = sumArr2 / arr1.length;
console.log("所有元素的平均值" + vegArr1);

// 案例3:求数组中所有元素中的最大值
var maxNum = arr1[0];
for (var i = 0; i < arr1.length; i++) {
    if (maxNum < arr1[i]) {
        maxNum = arr1[i]
    }
}
console.log("所有元素中的最大值" + maxNum);

// 案例4:求数组中所有元素的最小值

// 案例5:倒序遍历数组
for (var i = arr1.length - 1; i >= 0; i--) {
    console.log(arr1[i]);
}

//案例6:把数组中每个元素用|拼接到一起产生一个字符串并输出
var names = ["卡卡西", "佐助", "鸣人", "大蛇丸", "雏田", "小苏", "凤姐", "黑崎一护"];

var str = "";
for (var i = 0; i < names.length; i++) {
    str = str + "|" + names[i];
}
console.log(str);

// 案例7:去掉数组中重复的0，把其他的数据放在一个新的数组中
var arr = [10, 0, 20, 0, 30, 0, 50];
var newArr=[];//新数组,用来存放第一个数组中所有非0的数字
for(var i=0;i<arr.length;i++){
    if(arr[i]!=0){
        newArr[newArr.length]=arr[i];
    }
}
//把新数组的长度作为下标使用,数组的长度是可以改变的
console.log(newArr);

// 案例8:反转数组---把数组中的数据的位置调换
var arr = [10, 0, 20, 0, 30, 0, 50];
console.log(arr.reverse());
console.log("--------------------------------")
// var arr = [10, 0, 20, 0, 30, 0, 50];
for(var i = arr.length - 1;i>=0;i--){
    console.log(arr[i]);
}
```

> 冒泡排序

```javascript
//冒泡排序:把所有的数据按照一定的顺序进行排列(从小到大,从大到下)

// 从大到小排列
var arr = [10, 0, 100, 20, 60, 30];
for(var i = 0;i<arr.length - 1;i++){
    for(var j = 0;j<arr.length - 1 - i;j++){
        if(arr[j] < arr[j+1]){
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    };
}
console.log(arr);



// 从小到大排列
var arr = [10, 0, 100, 20, 60, 30];
for(var i = 0;i<arr.length - 1;i++){
    for(var j = 0;j<arr.length - 1 - i;j++){
        if(arr[j] > arr[j+1]){
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    };
}
console.log(arr);
```



# 四. 函数

## 4.1 函数的声明和调用

声明式函数

```javascript
function 函数名(){
  // 函数体
}
```

函数表达式

```javascript
var fn = function() {
  // 函数体
}
```

匿名函数

```javascript
// 匿名函数
// 第一个括号的内容是匿名函数的内容,第二个括号是用来调用函数的
(function(){
    console.log("hello world!!!");
})();
```

调用

```javascript
// 函数名加上括号的方式来调用
函数名();
```

函数也是一种数据类型

```javascript
function fn() {}
console.log(typeof fn);
```



## 4.2 函数的返回值

```javascript
//声明一个带返回值的函数
function 函数名(形参1, 形参2, 形参...){
  //函数体
  return 返回值;
}

//可以通过变量来接收这个返回值
var 变量 = 函数名(实参1, 实参2, 实参3);
```

返回值详解

> 如果函数没有显示的使用 return语句 ，那么函数有默认的返回值：undefined
>     如果函数使用 return语句，那么跟再return后面的值，就成了函数的返回值
>     如果函数使用 return语句，但是return后面没有任何值，那么函数的返回值也是：undefined
>     函数使用return语句后，这个函数会在执行完 return 语句之后停止并立即退出，也就是说return后面的所               有其他代码都不会再执行。
>
> ==推荐的做法是要么让函数始终都返回一个值，要么永远都不要返回值。==



## 4.3 arguments的使用

> JavaScript中，arguments对象是比较特别的一个对象，实际上是当前函数的一个内置属性。也就是说所有函数都内置了一个arguments对象，arguments对象中存储了传递的所有的实参。arguments是一个伪数组，因此及可以进行遍历

```javascript
function f1(){
    // 打印传入函数的参数的长度(判断伪数组的长度)
    console.log(arguments.length);
    console.log(arguments);
    // 遍历参数伪数组
    for(var i = 0;i < arguments.length;i++){
        // 打印每一个参数
        console.log(arguments[i]);
    }
}
// 向函数中传入参数
f1(1,2,3,4,5,6);
```



## 4.4 局部变量---> 全局变量

```javascript
// 编写一个匿名函数,自己调用自己
(function(){
    console.log("自己调用自己的函数");
})();    

// 把一个对象当做形参传入我们定义的匿名函数中
(function(win){
    var num = 10;
    // js是一门动态类型的语言,对象没有属性,点了就有了
    // 给我们传入的对象添加属性
    // 我们传入的是windos对象,现在相当于给整个页面赋值,相当于匿名函数里面的局部变量变成了真个页面的全局变量
    win.num = num;  
})(window);

// 由于把局部变量的值赋值给了 Window对象,所以整个页面上都能访问到了
console.log("整个页面的值是:" + num);
```

产生随机数赋值给windos成为全局变量

```javascript
(function(win){
    // 创建一个产生随机数的函数
    function createRandomNum(){
        // 目前这个函数只有方法没有属性
    }
    // 在原型对象中添加方法
    createRandomNum.prototype.getRanNum = function(max,min){
        // 返回我们随机生成的随机数给方法
        return Math.floor(Math.random()*(max-min)+min);
    };

    // 把我们创建的函数的对象赋值给windos顶级对象
    // 这样整个页面就能使用我们定义的随机数函数了
    window.createRandomNum  = createRandomNum;
})(window);

// 实例化随机数对象那
var rm = new createRandomNum();
console.log(rm.getRanNum(0,100));
```



## 4.5 函数声明和函数表达式的区别

>  函数声明如果放在if-else的语句中,在IE8的浏览器中会出现问题
>
>  以后宁愿用函数表达式,都不用函数都不用函数式声明

```javascript
// 函数声明
if(true){
    function fn1(){
        console.log("我是true")
    }
}else{  
    function fn2(){
        console.log("我是false");
    }
};
fn1();

// 函数表达式
var ff;
if(true){
    ff = function(){
        console.log("haha")
    }
}else{
    ff = function(){
        console.log("mama");
    }
}
ff();
```



## 4.6 函数中this的指向

>  函数中的this的指向
>
> ​    普通函数中的this是谁?-----window
>
> ​    对象.方法中的this是谁?----当前的实例对象
>
> ​    定时器方法中的this是谁?----window
>
> ​    构造函数中的this是谁?-----实例对象
>
> ​    原型对象方法中的this是谁?---实例对象    



## 4.7 函数也是对象

```javascript
// 函数是对象,对象不一定是函数
// 对象中有__proto__原型,是对象
// 函数中有prototype原型,是对象

function F1() {
}
console.dir(F1);
console.dir(Math);  // 有__proto__,但是没有prorotype

// 对象中有__proto__,函数中应该有prototype
// 如果一个东西里面有prototype，又有__proto__,说明是函数,也是对象

function F1(name) {
    this.name=name;
}

console.dir(F1);

//  所有的函数实际上都是Function的构造函数创建出来的实例对象
    var f1 = new Function("num1","num2","return num1+num2");
    console.log(f1(10,20));
    console.log(f1.__proto__==Function.prototype);

//所以,函数实际上也是对象
console.dir(Function);
```



## 4.8 数组函数的调用

> 数组可以储存任何类型的数据
>
> 数组中可以存储着很多函数的对象

```javascript
var arr=[
    function () {
        console.log("十一假期快乐");
    },
    function () {
        console.log("十一假期开心");
    }
    ,
    function () {
        console.log("十一假期健康");
    }
    ,
    function () {
        console.log("十一假期安全");
    },
    function () {
        console.log("十一假期如意");
    }
];

// 回调函数,函数作为参数来使用
// 遍历整个数组,遍历出来的每一个元素就是函数的对象
arr.forEach(function(ele){
    // 函数的对象 + ()来调用函数,然后打印
    ele();
})
```



## 4.9 apply和call的使用

> apply( ) 和 call( )方法中的第一个参数为空或者null

```javascript
// 定义一个函数
function f1(x,y) {
    console.log("结果是:"+(x+y)+this);
    return "10000";
}
// 调用定义好的函数,此时的f1相当于 window对象 在使用
f1(10,20);  // 结果是:30[object Window]

// apply和call方法也是函数的调用的方式
// apply和call方法中如果没有传入参数,或者是传入的是null,那么调用该方法的函数对象中的this就是默认的window
f1.apply();  // 结果是:NaN[object Window]    因为x和y都没有赋值
f1.call();  // 结果是:NaN[object Window]
f1.apply(null);  // 结果是:NaN[object Window]
f1.call(null);  // 结果是:NaN[object Window]

// apply和call都可以让函数或者方法来调用,传入参数和函数自己调用的写法不一样,但是效果是一样的
f1.apply(null,[100,200]);  // 结果是:300[object Window]  相当于给定义的函数传入了参数x和y
f1.call(null,100,200);   // 结果是:300[object Window]

var result1 = f1.apply(null,[10,20]);
var result2 = f1.call(null,10,20);
console.log(result1);  // 10000
console.log(result2);  // 10000
```

> 第一个参数不是 NULL

```javascript
// 定义一个函数,谁调用这个函数,那么this就是谁
function f2(x,y) {
    console.log("这个函数是window对象的一个方法:"+(x+y)+this.sex);
}
// window是顶级对象
// window.sex = "222";   如果加上这一行代码,顶级对象window就有了sex属性,下面的打印就不会有 undefined 了
window.f2(10,20);  // 这个函数是window对象的一个方法:30undefined  因为顶级对象window并没有 sex属性

// obj是一个对象,我们通过字面量自己创建的
var obj = {
    age:10,
    sex:"男"
};
// apply()方法中传入了obj我们自定义的obj对象,所以 this.sex 中的sex就是obj对象的sex属性
window.f2.apply(obj,[10,20]);  // 这个函数是window对象的一个方法:30男
window.f2.call(obj,10,20);  // 这个函数是window对象的一个方法:30男
```

> apply和call可以改变this的指向

```javascript
function Person(age,sex) {
    this.age=age;
    this.sex=sex;
}
// 通过原型添加方法
Person.prototype.sayHi=function (x,y) {
    console.log("您好啊:"+this.sex);
    return 1000;
};
var per=new Person(10,"男");
// 此时调用sayHi()方法的是 per实例对象,而per实例对象中确实有 sex的属性
per.sayHi();  // 您好啊:男


function Student(name,sex) {
    this.name=name;
    this.sex=sex;
}
var stu = new Student("小明","人妖");
// 改变了this的指向,指向了 Student(),也就相当于是Student()在调用Person()的sayHi()方法了
var r1 = per.sayHi.apply(stu,[10,20]);  // 您好啊:人妖
var r2 = per.sayHi.call(stu,10,20);  // 您好啊:人妖

console.log(r1);  // 1000
console.log(r2);  // 1000
```

```javascript
function fA(x,y) {
    console.log((x+y)+":===>"+this);
    return "这是函数的返回值";
}

// apply和call调用
// 此时f1中的this是window
var r1=fA.apply(null,[1,2]);  // 3:===>[object Window]
console.log(r1);  // 这是函数的返回值
// 此时f1中的this是window
var r2=fA.call(null,1,2);  // 3:===>[object Window]
console.log(r2);  // 这是函数的返回值


// 改变this的指向
var obj = {
    sex:"男"
};
// 本来f1函数是window对象的,但是传入obj之后,f1函数此时就是obj对象的
// 此时f1中的this是obj
var r3=fA.apply(obj,[1,2]);  // 3:===>[object Object]
console.log(r3);  // 这是函数的返回值
// 此时f1中的this是obj
var r4=fA.call(obj,1,2);  // 3:===>[object Object]
console.log(r4);  // 这是函数的返回值
```

```javascript
function f1() {
    console.log(this+":====>调用了");
}

// f1是函数,f1也是对象
console.dir(f1);
// 对象调用方法,说明,该对象中有这个方法
f1.apply();  // [object Window]:====>调用了
f1.call();  // [object Window]:====>调用了
console.log(f1.__proto__==Function.prototype);  // true

// 所有的函数都是Function的实例对象
console.log(Function.prototype);//ƒ () { [native code] }
console.dir(Function);
// apply和call方法实际上并不在函数这个实例对象中,而是在Function的prototype中
```



## 4.10 bind( )方法的使用

> 函数名字.bind(对象,参数1,参数2,...);---->返回值是复制之后的这个函数
> 方法名字.bind(对象,参数1,参数2,...);---->返回值是复制之后的这个方法

```javascript
// 定义一个函数
function f1(x, y) {
    console.log((x + y) + ":=====>" + this.age);
}

var ff = f1.bind(null);
ff(10,20);  // 30:=====>undefined
```

```javascript
function f1(x, y) {
    console.log((x + y) + ":=====>" + this.age);
}

function Person() {
    this.age = 1000;
}
Person.prototype.eat = function () {
    console.log("这个是吃");
};
var per = new Person();

// bind()方法把f1对象赋值给ff对象,同时在赋值的时候改变了this的指向,使this指向了 Person()对象
// 以下的两种方式本质上是一样的
var ff = f1.bind(per, 10, 20);
ff();  // 30:=====>1000
var ff = f1.bind(per);
ff(10,20);  // 30:=====>1000
```

```javascript
function PersonA(name){
    this.name = name;
}
PersonA.prototype.eat = function(){
    console.log(this+"====>"+this.name);
}

function StudentA(name){
    this.name = name;
}

var obj1 = new PersonA("贾铭威");
var obj2 = new StudentA("贾飞天");

// bind()在赋值给ff的时候,改变了obj1的地址,指向了obj2 也就是 StudentA 所以打印的是 贾飞天 而不是 贾铭威
var ff = obj1.eat.bind(obj2);
ff();  // [object Object]====>贾飞天
```

bind( )方法的案例

```javascript
function ShowRandom(){
    // 1-10的随机数
    this.num = parseInt(Math.random()*10 + 1);
}

// 添加原型方法
ShowRandom.prototype.show1 = function(){
    // 改变了定时器中的this的指向了,本来应该是window,现在是实例对象了
    window.setInterval(this.show2.bind(this),1000);
}

// 打印产生的随机数字
ShowRandom.prototype.show2 = function(){
    console.log(this.num);
}

var sr = new ShowRandom();
sr.show1();
```



## 4.11 函数的成员属性

```javascript
function f1(x,y) {
    //函数中有一个name属性----->函数的名字,name属性是只读的,不能修改
    console.log(f1.name);  // f1
    //函数中有一个arguments属性--->实参的个数
    console.log(f1.arguments.length);  // 2
    //函数中有一个length属性---->函数定义的时候形参的个数
    console.log(f1.length);  // 2
    //函数中有一个caller属性---->调用(f1函数在f2函数中调用的,所以,此时调用者就是f2)
    console.log(f1.caller);  // 调用者
}

function f2() {
    console.log("f2函数的代码");
    f1(1,2);
}
f2();
```



## 4.12 函数作为参数来使用

```javascript
function f1(fn){
    console.log("函数名为f1的函数执行了");
    // 在函数内部调用外部传来的函数
    // 如果是命名函数的话,函数名称 + ()  相当于是在调用
    fn();
}

// 匿名函数作为参数传入 f1()当中调用
f1(function(){
    console.log("我是一个匿名函数");
});

// 定义一个命名函数
function f2(){
    console.log("函数名为f2的函数执行了")
}

// 命名函数当做参数传入函数内部,并且想要在另一个函数内部调用的时候,不能加()
f1(f2);
```

```javascript
function f3(func){
    setInterval(function(){
        console.log("定时器开始");
        // 调用外部传入来的函数,外部传来的函数在函数的内部调用
        func();
        console.log("定时器结束");
    },1000);
};
f3(f4);

function f4(){
    console.log("我不想学习,可是没有办法");
}
```



## 4.13 函数作为返回值使用

```java
function f1(){
    console.log("f1函数开始");
    return function(){
        console.log("我是作为返回值使用的函数");
    }
};

// f1()函数的返回值是 一个函数的对象
var func = f1();
func();

var obj = {};
console.log(obj instanceof Object);  // true

// 获取某个对象的数据类型的样子
console.log(Object.prototype.toString.call(obj));  // [object Object]
var arr = [];
console.log(Object.prototype.toString.call(arr));  // [object Array]
console.log(Object.prototype.toString.call(new Date()));  // [object Date]

//判断这个对象和传入的类型是不是同一个类型
function getFunc(type) {
    return function (obj) {
        return Object.prototype.toString.call(obj) === type;
    }
}

var ff = getFunc("[object Array]");
var result = ff([10, 20, 30]);
console.log(result);  // true

var ff1 = getFunc("[object Object]");
var dt = new Date();
var result1 = ff1(dt);
console.log(result1);  // false
```

```javascript
//三部电影,电影有名字,大小,上映时间
function File(name, size, time) {
    this.name = name;  // 电影名字
    this.size = size;  // 电影大小
    this.time = time;  // 电影的上映时间
}
var f1 = new File("jack.avi", "400M", "1997-12-12");
var f2 = new File("tom.avi", "200M", "2017-12-12");
var f3 = new File("xiaosu.avi", "800M", "2010-12-12");
// 把生成的对象放入数组里面去
var arr = [f2, f3, f1];

// 构建一个对排序的函数
// 传入的参数是 排序的依据
function fn(attr){
    return function getSort(obj1,obj2){
        if(obj1[attr] > obj2[attr]){
            return 1;
        }else if(obj1[attr] == obj2[attr]){
            return 0;
        }else{
            return -1;
        }
    }
}

var ff = fn("name");
// 函数作为参数,对对象数组进行排序
arr.sort(ff);
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i].name + "====>" + arr[i].size + "===>" + arr[i].time);
}
```





# 五. 作用域和预解析

作用域：变量可以起作用的范围

不使用var声明的变量是全局变量，不推荐使用。
变量退出作用域之后会销毁，全局变量关闭网页或浏览器才会销毁



## 5.1  js 中作用域规则

- 函数允许访问函数外的数据.
- 整个代码结构中只有函数可以限定作用域.
- 作用域规则首先使用提升规则分析
- 如果当前作用规则中有名字了, 就不考虑外面的名字



隐式全局变量

```javascript
function fn1() {
    // 由于没有给变量名字加上 var 所以虽然这个变量定义在函数内部,但是在函数外部也可以访问到
    // 所以也叫做隐式全局变量
    num1 = 100;
    console.log("函数内部"+num1);
}
fn1();  // 函数内部100

console.log("函数外部"+num1);  // 函数外部100

```

用var声明的变量无法删除

```javascript
var num2 = 200;
num3 = 300;

// 用var声明的变量无法删除
delete num2;
// 没有被var修饰的变量被从内存中删除了
delete num3;
console.log(typeof num2);  // number
console.log(num2 + 10);  // 210
console.log(typeof num3);  // undefined
```

隐式全局变量和局部变量重名

```javascript
num = 5;
function fn2(){
    var num = 100;
    num +=10;
    console.log(num);
}

// 局部变量和隐式全局变量重名,在函数内部优先使用局部变量
fn2();  // 110

// 打印了全局变量
console.log(num);  // 5

```

块级作用域

```javascript
{
    var num = 1000;
    console.log(num);  // 1000
}

if(true){
    var num=10.2111;
}
console.log(num);  // 10.2111
```



## 5.2 预解析

预解析过程：

1. 把变量的声明提升到当前作用域的最前面，只会提升声明，不会提升赋值。
2. 把函数的声明提升到当前作用域的最前面，只会提升声明，不会提升调用。
3. 先提升var，在提升function

预解析的练习 1

```javascript
// 全局变量a
var a = 99; 
// f是函数，虽然定义在调用的后面，但是函数声明会提升到作用域的顶部。 
f();                   
console.log(a); // a=>99,  此时是全局变量的a

// 定义的函数
function f() {
  // 当前的a变量是下面变量a声明提升后，默认值undefined
  console.log(a);  // undefined
  // 局部变量 a
  var a = 10;
  console.log(a); // a => 10
}

// 输出结果：
undefined
10
99
```

预解析的练习 2

```javascript
var num = 20;

fun();  // undefined

function fun() {
    // var num 被提升到此处,但是值并没有被提升,所以值是 undefined
    console.log(num);
    var num = 201;
}
```

预解析的练习 3

```javascript
// 全局变量 a
var a = 18;

f1();

function f1() {
    // 局部变量 b
    var b = 9;
    // a被提升到此处,但是值不会带过来,所以是 undefined
    console.log(a);  // undefined
    // 由于变量的定义和赋值都在打印变量之前,所以b的值为 9
    console.log(b);  // 9
    var a = '123';
}
```

预解析的练习4

```javascript
var a;
a = 18;

f22();
function f22() {
    var b;
    var a;
    b = 9;
    console.log(a); //undefined
    console.log(b); //9
    a = '123';
}
```

```javascript
       /*
        变量---->局部变量和全局变量,
        作用域:就是变量的使用范围
        局部作用域和全局作用域
        js中没有块级作用域---一对括号中定义的变量,这个变量可以在大括号外面使用
        函数中定义的变量是局部变量
        */
while(true){
    var num=10;
    break;
}
console.log(num);  // 10
{
    var num2=100;
}
console.log(num2);  // 100
if(true){
    var num3=1000;
}
console.log(num3);  // 1000
function f1() {
    //局部变量
    var num=10;
}
console.log(num);  // 10

var num=10; //作用域链 级别:0
var num2=20;
var str = "abc"
function f1() {
    var num2=20;
    function f2() {
        var num3=30;
        console.log(num);  // 10 一直向上找,最后找到了 num 结果num为 10
    }
    f2();
}
f1();

// 预解析:就是在浏览器解析代码之前,把变量的声明和函数的声明提前(提升)到该作用域的最上面

// 变量的提升
console.log(num);  
// 这个变量提升到打印语句之前
var num=100;

// 函数的声明被提前了
f1();
function f1() {
    console.log("这个函数,执行了");
}

var f2;
f2=function () {
    console.log("小杨好帅哦");
};
f2();
```







# 六. 面向对象

> JavaScript中的对象其实就是生活中对象的一个抽象
> JavaScript的对象是无序属性的集合。
> 	其属性可以包含基本值、对象或函数。对象就是一组没有顺序的值。我们可以把JavaScript中的对象想象成键值对，其中值可以是数据和函数。
> 对象的行为和特征
> 	特征---属性
> 	行为---方法

## 6.1 JS中对象的创建方式

- 通过字面量的方式创建

```javascript
var obj = {
  // 属性
  name: 'zs',
  age: 18,
  sex: true,
  // 方法
  sayHi: function () {
    console.log(this.name);
  }
};   
```

- new Object( )创建对象

```javascript
var person = new Object();
	// 属性
    person.name = "贾铭威";
    person.age = 25;
	// 方法
    person.play = function(){
        console.log("玩电脑");
        console.log("玩手机");
	}

// 判断 person 是不是一个对象
console.log(person1 instanceof Object);
console.log(person instanceof Object);
```

- 工厂函数创建对象

```javascript
// 工厂模式，把创建对象的方法封装到函数当中
function createObject(name,age){
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.sayWold = function(){
        console.log("我的名字叫"+this.name+"我今年"+this.age);
    }
    // 把创建好的对象返回
    return obj;
}

// 调用工厂函数创建对象
var person = createObject("贾铭威",26);
person.sayWold();
```

- 自定义构造函数,构造函数名一定要大写

```javascript
// 构造函数名大写,要求创建对象的时候传入参数
function Person(name,age){
    // 属性
    this.name = name;
    this.age = age;
    // 方法
    this.sayHi = function(){
        console.log("我的名字叫"+this.name+"我今年"+this.age);
    }
}

var per = new Person("贾铭威",26);
per.sayHi();

// 调用属性的两种方法
per["name"] = "刘三姐";
console.log(per["name"]);
console.log(per.name);
// 调用方法的另一种方法
per["sayHi"]();
```

 

## 6.2 new关键字

> 构造函数 ，是一种特殊的函数。主要用来在创建对象时初始化对象， 即为对象成员变量赋初始值，总与new运算符一起使用在创建对象的语句中。

1. 构造函数用于创建一类对象，首字母要大写。
2. 构造函数要和new一起使用才有意义。

new在执行时会做四件事情

```
new会在内存中创建一个新的空对象
new 会让this指向这个新的对象
执行构造函数  目的：给这个新对象加属性和方法
new会返回这个新对象
```



## 6.3 this关键字

> JavaScript中的this指向问题，有时候会让人难以捉摸，随着学习的深入，我们可以逐渐了解
> 现在我们需要掌握函数内部的this几个特点
>  	1. 函数在定义的时候this是不确定的，只有在调用的时候才可以确定
> 	2. 一般函数直接执行，内部this指向全局window
> 	3. 函数作为一个对象的方法，被该对象所调用，那么this指向的是该对象
> 	4. 构造函数中的this其实是一个隐式对象，类似一个初始化的模型，所有方法和属性都挂载到了这个隐式对象身上，后续通过new关键字来调用，从而实现实例化



## 6.4 对象属性的遍历

通过for...in语法可以遍历一个对象

```javascript
var obj2 = {
    name:"贾铭威1",
    age:26,
    method2:function(){
        console.log(this.name+this.age)
    }

}
obj2.method2();

// 遍历一个对象
for(var key in obj2){
    console.log("属性名为:"+ key + ",属性值是:"+obj2[key]);
}

// 遍历的结果如下
属性名为:name,属性值是:贾铭威1
属性名为:age,属性值是:26
属性名为:method2,属性值是:function(){
                console.log(this.name+this.age)
            }
```

json格式的数据也是用for ... in  的格式来遍历

```javascript
var json = {
    "name": "小明",
    "age": "10",
    "sex": "男"
};

for(var key in json){
    cosole.log(json[key])
}
```



## 6.5 对象属性的删除

```javascript
function fun() { 
  this.name = 'mm';
}
var obj = new fun(); 
console.log(obj.name); // mm 

// 因为删除了对象的属性,所以属性值会是 undefined
delete obj.name;
console.log(obj.name); // undefined
```



# 七.JS中的内置对象

## 7.1 Math()对象

> Math.PI						                // 圆周率
> Math.random()				           // 生成一个0-1之间的随机数
> Math.floor()/Math.ceil()	        // 向下取整/向上取整
> Math.round()				             // 取整，四舍五入
> Math.abs()					             // 绝对值
> Math.max()/Math.min()		   // 求最大和最小值
> Math.power()/Math.sqrt()	   // 求指数次幂/求平方根

```javascript
// 取绝对值
console.log(Math.abs('-1'));  // 1
console.log(Math.abs(-2));  // 2
console.log(Math.abs(null));  // ---> 0  重点
console.log(Math.abs("string"));  // NaN 因为字符串根本不会有绝对值的

// 向上取整
console.log(Math.ceil(12.3));  // 13
console.log(Math.ceil(12.9));  // 13
console.log(Math.ceil(12.09));  // 13
console.log(Math.ceil(12.03));  // 13
console.log(Math.ceil(12.92));  // 13

// 向下取整
console.log(Math.floor(12.3));  // 12
console.log(Math.floor(12.9));  // 12
console.log(Math.floor(12.09));  // 12
console.log(Math.floor(12.03));  // 12
console.log(Math.floor(12.92));  // 12
console.log(Math.fround(2));  // 2
console.log(Math.fround(2.1));  // 2.0999999046325684
console.log(Math.fround(2.9));  // 2.9000000953674316

// 找出一对数字的最大值
console.log(parseInt(Math.max(1,2,3,4,5,6,7,8,9)))  // 9
// 最小值
console.log(parseInt(Math.min(1,2,3,4,5,6,7,8,9)))  // 1

// 这种情况下生成的随机数都是小数
console.log(Math.random()); 
// 生成一个1-100之间的整数(包括100在内)
console.log(parseInt((Math.random()*100)+1));
```

找出参数的最大值

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script>
      function GetMaxNum(){
          this.getMax = function(){
              var maxNum = arguments[0];
              // 遍历传入这个方法的所有参数
              for(var i = 0;i < arguments.length;i++){
                if(maxNum < arguments[i]){
                    maxNum = arguments[i];
                }
              }
              // 返回参数的最大值
              return maxNum;
          };
      }

      var obj = new GetMaxNum();
      console.log(obj.getMax(0.1,2,56));
    </script>
</body>
</html>
```

随机产生一个16进制的颜色值

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
    <style>
        div {
            width: 300px;
            height: 200px;
            background-color: pink;
        }
    </style>

    <script>
        // 随机产生一个16进制的颜色值
        function getColor(){
            var str = "#";
            // 一个16进制的数组
            var arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

            for(var i = 0;i<6;i++){
                var num = parseInt(Math.random()*16);
                // 把产生的16进制的字符串进行拼接
                str += arr[num];
            }
            return str;
        }

        // 页面记载的事件
        window.onload = function(){
            // 页面一加载就改变标签的背景颜色
            document.getElementById("dv").style.backgroundColor = getColor();
            console.log(getColor());
        }
    </script>
<body>

    <div id="dv">
    
    </div>
    
</body>
</html>
```



## 7.2 Date()对象

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script>
        var date = new Date();
        // 当前服务器所在时区的时间
        console.log(date);  // Mon Jul 22 2019 08:10:40 GMT+0800 (中国标准时间)
        // 打印出传入的指定时间
        var date1 = new Date("2018-08-02");
        console.log(date1);  // Thu Aug 02 2018 08:00:00 GMT+0800 (中国标准时间)
        // 打印出传入的指定时间
        var date3 = new Date("2017/08/12");
        console.log(date3);  // Sat Aug 12 2017 00:00:00 GMT+0800 (中国标准时间)
        // 根据时间戳打印日期
        var date4 = new Date(1563754652144);
        console.log("时间戳转换为日期：" + date4);  
        // 时间戳转换为日期：Mon Jul 22 2019 08:17:32 GMT+0800 (中国标准时间)

        // 获取日期的毫秒(时间戳)
        // 1. HTML5中提供的方法，有兼容性问题
        var time = Date.now();
        console.log(time);  // 1563754652144
        // 2. 获取时间戳的方法
        var time1 = new Date().valueOf();
        console.log(time1);  // 1563754809472
        // 3. getTime() 返回毫秒数和valueOf()结果一样，valueOf()内部调用的getTime()
        var time2 = new Date().getTime();
        console.log(time2)  // 1563754809472

        // ------------------------------------------------
        var dt = new Date();
        // 获取年份
        console.log(dt.getFullYear());  // 2019
        // 获取月份 月份是从0月开始的,真实的月份要在前面加1
        console.log(dt.getMonth() + 1);  // 7
        // 获取分钟
        console.log(dt.getMinutes());  // 25  25分的意思
        // 获取秒
        console.log(dt.getSeconds());  // 53秒
        // 获取星期
        console.log(dt.getDay()); // 1 今天是周一
        // 获取本月的第几天
        console.log(dt.getDate());  // 22 今天是本月的第22天,今天是22号

        // -------------------------------------------------------
        var dt1 = new Date();
        // 英文格式的日期
        console.log(dt1.toDateString());  // Mon Jul 22 2019
        // 数字格式的日期
        console.log(dt1.toLocaleDateString());  // 2019/7/22
        // 时分秒格式的日期
        console.log(dt1.toTimeString());  // 08:40:51 GMT+0800 (中国标准时间)
        // 把日期转换成字符串
        console.log("字符串日期:" + dt1.toString());

        var num = 100;
        console.log(num.toString());  // 100
        console.log(typeof num.toString());  // String
    </script>
</body>
</html>
```



## 7.3 基本包装类型

为了方便操作基本数据类型，JavaScript还提供了三个特殊的引用类型：String/Number/Boolean

```javascript
// s1是基本类型，基本类型是没有方法的
var s1 = 'zhangsan';
var s2 = s1.substring(5);

// 当调用s1.substring(5)的时候，先把s1包装成String类型的临时对象，再调用substring方法，最后销毁临时对象, 相当于：
var s1 = new String('zhangsan');
var s2 = s1.substring(5);
s1 = null;
```

```javascript
// 创建基本包装类型的对象
var num = 18;  				// 数值，基本类型
var num = Number('18'); 	// 类型转换
var num = new Number(18); 	// 基本包装类型，对象
// Number和Boolean基本包装类型基本不用，使用的话可能会引起歧义。例如：
var b1 = new Boolean(false);
var b2 = b1 && true;		// 结果是什么
```



## 7.4 String对象

```javascript
var str = "hello_world";
// 字符串特性:不可变性,字符串的值是不能改变.有的字符串看起来改变了,是指向改变了,不是值改变了
str[1] = "3";
console.log(str[1]);  // e
console.log(str);  // hello_world

// 字符串的遍历,字符串可以看成由字符组成的数组，js中没有字符类型，java中有字符类型,用单引号包裹起来
var str1 = "hello";
for(var i = 0;i<str1.length;i++){
	console.log(str[i]);  // h e l l o
}

// 实例方法---->必须要通过new的方式创建的对象(实例对象)来调用的方法
// 静态方法---->直接通过大写的构造函数的名字调用的方法(直接通过大写的对象名字调用的)
```



### 7.4.1 length

> length------>字符串的长度

```javascript
var str = "12345";
console.log(str.length);  // 5
```



### 7.4.2 charAt( )

> charAt(索引),返回值是指定索引位置的字符串

```javascript
var str1 = "wlejlwemtw";
console.log(str1.charAt(5));  // w
// 超出索引,结果是空字符串
console.log(str1.charAt(100));  // 空的字符串
console.log(typeof str1.charAt(100));  // String
```



### 7.4.3 fromCharCode( )

> fromCharCode(数字值,可以是多个参数,用逗号分隔开来),返回的是ASCII码对应的值

```javascript
var str = String.fromCharCode(107,108,109);
console.log(str);  // klm
var str=String.fromCharCode(83,79,83);
console.log(str); // SOS
```



### 7.4.4 concat( )

> concat(字符串1,字符串2,...);返回的是拼接之后的新的字符串

```javascript
var str2 = "我叫";
console.log(str2.concat("贾","铭","威。"));  // 我叫贾铭威。
```



### 7.4.5 indexOf( )

> indexOf(要找的字符串,从某个位置开始的索引);返回的是这个字符串的索引值,没找到则返回-1

```javascript
var str3 = "今天天气很不错,我们出去散步吧";
// 从索引3的位置开始找"天"这个字符串,找不到所以返回-1
console.log(str3.indexOf("天",3)); // -1
console.log(str3.indexOf("天",1)); // 1
console.log(str3.indexOf("天",2)); // 2
```



### 7.4.6 lastIndexOf( )

> lastIndexOf(要找的字符串);从后向前找相应的字符串,但是索引仍然是从左向右的方式来显示,找不到则返回-1

```javascript
var str3 = "今天天气很不错,我们出去散步吧";
console.log(str3.lastIndexOf("我"));  // 8
```



### 7.4.7 replace( )

> replace("原来的字符串","新的字符串");用来替换字符串的

```javascript
var str = "贾飞天你好";
// 只要字符串中存在 "你好" 这字符串的话,就进行替换
if(str.indexOf("你好") != -1){
    str = str.replace("你好","我好啊啊啊啊啊");
} else{
    alert("不存在");
}
console.log(str);  // 贾飞天我好啊啊啊啊啊
```



### 7.4.8 slice( )

> slice(开始的索引,结束的索引); 

```javascript
// 从索引5的位置开始提取,到索引为10的前一个结束,没有10，并返回这个提取后的字符串
var str = "如果有一天我邪恶了,请记住,我曾纯洁过";
// 末尾超过了字符串的长度，直接截取到字符串的最后一位
str = str.slice(5,100);
console.log(str);  // 我邪恶了,请记住,我曾纯洁过
str = str.slice(5,8);
console.log(str);  // 请记住
console.log(str.slice(5,-3));  // 空字符串
```



### 7.4.9 split( )

> split("要干掉的字符串",切割后留下的个数);切割字符串

```javascript
var str="乔峰|慕容|凤姐|梅超风|小苏|大蛇丸";

// 通过"|"进行剪切
str = str.split("|");
console.log(typeof str); // Object
console.log(str);  // ["乔峰", "慕容", "凤姐", "梅超风", "小苏", "大蛇丸"]
for(var i = 0;i<str.length;i++){
    console.log(str[i]);
}
```



### 7.4.10 substr( )

> substr(开始的位置,个数);返回的是截取后的新的字符串

```javascript
var str="qwelkfhweklgnl";
// 从索引为5的地方截取3个字符串,索引为5的字符串为 f
str=str.substr(5,3);
console.log(str);  // fhw
```



### 7.4.11 substring( )

> substring(开始的索引,结束的索引),返回截取后的字符串,不包含结束的索引的字符串

```javascript
var str="qwelkfhweklgnl";
// 索引为6的字符串为 h ,因此截取不到h,截取到h前面的f
console.log(str.substring(3,6));  // lkf
```



### 7.4.12 字母字符串转换大小写

```javascript
var str = "wlker";
// toUpperCase();转大写
console.log(str.toUpperCase());  // WLKER

// toLocaleUpperCase()转大写
console.log(str.toLocaleUpperCase());  // WLKER

var str = "LWJHW"; 
// toLowerCase();转小写
console.log(str.toLowerCase());  // lwjhw

// toLocaleLowerCase(); 转小写
console.log(str.toLocaleLowerCase());  // lwjhw
```



### 7.4.13 trim( )

> trim();干掉字符串两端的空格

```javascript
var str = " wert"
console.log(str.trim());  // wert
var str = " wert "
console.log(str.trim());  // wert
```



# 八. JS中的原型prototype

prototype存在的必要性

```javascript
function Person(name,age) {
    this.name=name;
    this.age=age;
    this.eat=function () {
        console.log("今天吃红烧土豆");
    }
}
var per1=new Person("小白",20);
var per2=new Person("小黑",30);

console.dir(per1);
console.dir(per2);
// eat()方法的作用和内容都是一样的,但是因为创建了两个对象
// 两个对象创建了相同的方法,造成了效率浪费和内存浪费
console.log(per1.eat == per2.eat);  // false  因为连个eat()方法用的是不同的内存地址,所是 false


// 把可能造成效率浪费的方法给单独抽取出来
function Eat(){
    console.log("我正在吃面包");
}

// 重现构建对象,对象引用我们单独抽取出来的方法
function Student(name,age) {
    this.name=name;
    this.age=age;
    this.eat=Eat;
}

var stu1 = new Student("贾飞天",20);
var stu2 = new Student("机密狗",26);
// console.dir() 显示一个对象的所有属性和方法
console.dir(stu1);
// 因为方法用的是一个相同的内存地址
// 数据共享,节约内存空间
console.log(stu1.Eat == stu2.Eat);  // true  这样两个Eat()方法的内存地址就相同了,避免了资源的浪费
```

Javascript 规定，每一个构造函数都有一个 `prototype` 属性，指向另一个对象。
这个对象的所有属性和方法，都会被构造函数的实例继承。

这也就意味着，我们可以把所有对象实例需要共享的属性和方法直接定义在 `prototype` 对象上。

- 任何函数都具有一个 `prototype` 属性，该属性是一个对象
- 构造函数的 `prototype` 对象默认都有一个 `constructor` 属性，指向 `prototype` 对象所在函数
- 通过构造函数得到的实例对象内部会包含一个指向构造函数的 `prototype` 对象的指针 `__proto__`
- 所有实例都直接或间接继承了原型对象的成员

```javascript
// 构建一个对象
function Person(name,age) {
    this.name=name;
    this.age=age;
}

//通过原型来添加方法,解决数据共享,节省内存空间
Person.prototype.eat = function(){
    console.log("我正在吃西瓜");
}

var p1=new Person("小明",20);
var p2=new Person("小红",30);
// 两个对象的方法相同,节约了内存空间
console.log(p1.eat==p2.eat);  // true

console.dir(p1);
console.dir(p2);
```

实例对象中有`__proto__`这个属性,叫原型,也是一个对象,这个属性是给浏览器使用,

不是标准的属性----->`__proto__`----->可以叫原型对象

构造函数中有prototype这个属性,叫原型,也是一个对象,这个属性是给程序员使用,是标准的属性------>

prototype--->可以叫原型对象

​     实例对象的`__proto__`和构造函数中的prototype相等--->true

​     又因为实例对象是通过构造函数来创建的,构造函数中有原型对象prototype

​     实例对象的`__proto__`指向了构造函数的原型对象prototype

```javascript
function Person(name,age) {
    this.name=name;
    this.age=age;
}

// 通过原型给添加方法
Person.prototype.play = function(){
    console.log("捆绑play");
}

var p1=new Person("小明",20);
var p2=new Person("小红",30);

p1.__proto__.play();  // 捆绑play

// 实例对象的__proto__属性和构造函数中的prototype属性相等
// 因为实例对象的__proto__属性就是引用了构造函数中的prototype属性
console.log(p1.__proto__ == Person.prototype);  // true
```



## 8.1 利用原型共享数据

> 什么样子的数据是需要写在原型中?
>     需要共享的数据就可以写原型中
>     原型的作用之一:数据共享
>     属性需要共享,方法也需要共享
>     不需要共享的数据写在构造函数中,需要共享的数据写在原型中

```javascript
// 因为每一个学生的姓名,年龄,性别都是特有的,因此不需要共享
function Student(name,age,sex) {
    this.name=name;
    this.age=age;
    this.sex=sex;
}

// 所有学生的身高都是188,所有人的体重都是55
// 所有学生都要每天写500行代码
// 所有学生每天都要吃一个10斤的西瓜
Student.prototype.height = "188";
Student.prototype.weight = "55KG";
Student.prototype.study = function(){
    console.log("学习");
}
Student.prototype.play = function(){
    console.log("玩电脑")
}

// 实例化学生对象
var stu = new Student("贾铭威",57,"女")
console.dir(Student);
console.dir(stu);
```



## 8.2 原型的另一种添加方法

```javascript
function Student(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}

// 使用原型添加方法 如果用这种方式添加的话,一定要加上构造器
Student.prototype = {
    // 我们为了保持 constructor 的指向正确,建议手动加上构造器的指向
    constructor:Student,
    height:"173",
    weight:"55KG",
    eat:function(){
        console.log("是东西就吃");
    },
    drink:function(){
        console.log("是东西就喝");
    }
}

var obj = new Student("贾铭威",26,"男");
obj.eat();
obj.drink();
```



## 8.3 原型中的方法

> 原型中的方法可以互相访问

```javascript
function Student(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.eat = function(){
        console.log("没使用原型,吃东西");
        // 实例对象的方法是可以互相调用的
        this.drink();
    };
    this.drink = function(){
        console.log("没使用原型,喝东西");
    }
}
var stu1 = new Student("贾铭威",25,"男");
stu1.eat();

// 使用了原型
function Person(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}

Person.prototype = {
    eat:function(){
        console.log("使用了原型,吃");
        // 原型中的方法也是可以相互调用的
        this.drink();
    },
    drink:function(){
        console.log("使用了原型,喝");
    }
}
var per1 = new Person("贾铭威");
per1.eat();
```

原型中的方法和属性跟实例方法的方法和属性同名

```javascript
function Person(age,sex) {
    this.age = age;//年龄
    this.sex = sex;
    this.eat = function () {
        console.log("构造函数中的吃");
    };
}    


// 原型中的属性和构造方法中的属性以及构造方法重名
Person.prototype = {
    sex:"男",
    eat:function(){
        console.log("在原型中的吃");
    }
}

// 实例对象使用的属性或者方法,先在实例中查找,
// 找到了则直接使用,找不到则,去实例对象的__proto__指向的原型对象prototype中找,找到了则使用,找不到则报错
var per1 = new Person("贾铭威","女",20);
console.log(per1.sex);  // 女
per1.eat();  // 构造函数中的吃
```



## 8.4 原生对象的原型

> 所有函数都有 prototype 属性对象。

我们可以给JS原生的对象添加我们自定义功能

```javascript
// 为字符串添加倒排序的方法
String.prototype.mysort = function(){
    var arr = [];
    for(var i=this.length - 1;i >= 0;i--){
        // 把倒叙遍历的数据添加到数组里面去
        arr.push(this[i]);
    }
    var str = arr.toString();
    console.log(str);  // 5,4,3,2,1
}
var str = "12345";
str.mysort();

// 为Array内置对象的原型对象中添加方法 冒泡排序
Array.prototype.myReverse = function(){
    for(var i = 0;i<this.length;i++){
        for(var j = 0;j<this.length - 1 - i;j++){
            // 冒泡排序之倒排序
            if(this[j] > this[j+1]){
                var temp = this[j];
                this[j] = this[j+1];
                this[j+1] = temp;
            }
        }
    }
}
// 定义一个数组
var arrs = [2,1,0,3,5,7,4];
arrs.myReverse();
console.log(arrs);  // [0, 1, 2, 3, 4, 5, 7]

// 为字符串添加说话的方法
String.prototype.sayHello = function(){
    console.log(this + " Hello World");
}

var str = "你好";
str.sayHello();  // 你好 Hello World
```



## 8.5 案例随机产生小方块

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .map{
            width: 800px;
            height: 600px;
            background-color: #CCC;
            position: relative;
        }
    </style>
    <div class="map" id="dv">

    </div>

    <script src="common.js"></script>
    <script>
        // 定义一个产生随机数对象的函数
        (function(win){
            // 创建一个随机数函数
            function Random(){
                // 随机数函数中只有方法,没有属性
            }

            // 给函数添加原型
            Random.prototype.createRanNum = function(max,min){
                return Math.floor(Math.random()*(max-min) + min);
            }
            
            // 把实例对象传递给全局
            win.Random = new Random();
        })(window);


        // 产生小方块的对象
        (function(window){
            // 根据id来获取方块面板
            var map = document.getElementById("dv");

            // 构造小方块的函数
            function Food(width,height,color){
                // 先构建好小方块必要的属性
                
                // 小方块的宽 加上一个默认值
                this.width = width || 20;
                // 小方块的高
                this.height = height || 20;
                // 小方块的横纵坐标
                this.x = 0;
                this.y = 0;
                // 小方块的背景颜色
                this.color = color;
                // 构建小方块的元素 创建一个方块的标签
                this.element = document.createElement("div");
            };

            // 在背景墙上初始化显示小方块的位置
            Food.prototype.init = function(map){
                // 设置小方块的样式
                var div = this.element;
                // 脱离文档流
                div.style.position = "absolute";
                div.style.width = this.width + "px";
                div.style.height = this.height + "px";
                div.style.backgroundColor = this.color;
                // 把小方块添加到背景板中去
                map.appendChild(div);
                // 调用小方块的位置函数使小方块的位置随机
                // 位置默认是 0,0的位置
                this.render(map);
                
            };

            // 小方块出现的随机的位置
            Food.prototype.render = function(map){
                // 在背景版的范围之内,随机产生小方块出现的纵横坐标
                var x = Random.createRanNum(map.offsetWidth/this.width,0)*this.width;
                var y = Random.createRanNum(map.offsetHeight/this.height,0)*this.height;
                // 把坐标赋值给小方块的属性
                this.x = x;
                this.y = y;
                // 把其他属性也给赋值到小方块中
                var div = this.element;
                div.style.left = this.x + "px";
                div.style.top = this.y + "px";
            };

            // 实例化对象,这样页面一加载,小方块就会被创建出来
            // 每次的位置还不固定
            var fd = new Food(20,20,"green");
            fd.init(map);

        })(window);
   
    </script>
</head>
<body>
    
</body>
</html>
```



## 8.6 原型和原型链

> 实例对象的原型`__proto__`和构造函数的原型prototype指向是相同的,
> 实例对象中的`__proto__`原型指向的是构造函数中的原型prototype
> 实例对象中`__proto__`是原型,浏览器使用的
> 构造函数中的prototype是原型,程序员使用的 
> 原型链:是一种关系,实例对象和原型对象之间的关系---->是通过原型(`__proto__`)来联系的

```javascript
function Person(name,age){
    // 构造函数中的this就是 实例对象
    this.name = name;
    this.age = age;
    this.eat = function(){
        console.log("人都要吃东西的");
    }
}

Person.prototype.play = function(){
    // 原型对象中方法中的this就是实例对象
    this.size = "你猜";
    console.log("人都要玩的");
}

var per = new Person("贾铭威",25);

// 实例对象的结构
console.dir(Person);
// 构造函数的结构
console.dir(per);

console.log(Person.prototype == per.__proto__);  // true
```



## 8.7 原型指向的改变

> 原型指向可以改变
> 实例对象的原型`__proto__`指向的是该对象所在的构造函数的原型对象 prototype
> 构造函数的原型对象(prototype)指向如果改变了,实例对象的原型(`__proto__`)指向也会发生改变
> 原型的指向是可以改变的
> 实例对象和原型对象之间的关系是通过`__proto__`原型来联系起来的,这个关系就是原型链

```javascript
function Student(name){
    this.name = name;
};
Student.prototype.eat = function(){
    console.log("Student + eat");
};
Student.prototype.sayHello = function(){
    console.log("Student + sayHello");
};


function Person(name){
    this.name = name;
};
Person.prototype.eat = function(){
    console.log("Person + eat");
};
Person.prototype.sayHello = function(){
    console.log("Person + sayHello");
};

// Studnet的原型指向了Person()的实例对象
Student.prototype = new Person();
// 虽然是用 Student() 创建出来的,但已经是Person的实例了
var obj = new Student();
obj.eat();  // Person + eat
obj.sayHello();  // Person + eat
```



## 8.8 原型的最终指向

> 实例对象中有`__proto__`原型
> 构造函数中有prototype原型
> prototype是对象
> 所以,prototype这个对象中也有`__proto__`,那么指向了哪里
> 实例对象中的`__proto__`指向的是构造函数的prototype
> 所以,prototype这个对象中`__proto__`指向的应该是某个构造函数的原型prototype
> Person的prototype中的`__proto__`的指向
> console.log(Person.prototype.`__proto__`);
> per实例对象的`__proto__`------->Person.prototype的`__proto__`---->Object.prototype的`__proto__`是null

```javascript
function Person() {
}
Person.prototype.eat=function() {
  console.log("吃东西");
};
var per = new Person();
console.dir(per);
console.dir(Person);


console.log(per.__proto__==Person.prototype);  // true
console.log(per.__proto__.__proto__==Person.prototype.__proto__);  // true
console.log(Person.prototype.__proto__==Object.prototype);  // true  最终指向了Object
console.log(Object.prototype.__proto__);  // null
```



## 8.9 原型方法的改变

```javascript
// 人的构造函数
function Person(age) {
    this.age=age;
}
// 人的原型中添加方法
Person.prototype.eat=function () {
    console.log("人正在吃东西");
};
// 学生构造函数
function Student(sex) {
    this.sex=sex;
}
// 学生的原型中添加方法---->先在原型中添加方法
Student.prototype.sayHi=function () {
    console.log("您好哦");
};


// 改变了原型对象的指向,Student()指向Person()
Student.prototype = new Person(10);
var stu = new Student("男");
stu.eat();  // 人正在吃东西
// stu.sayHi();  // 无法打印,程序报错,因为指向了Person(),而Person没有sayHi()的方法
```

```javascript
//人的构造函数
function PersonA(age) {
    this.age=age;
}
//人的原型中添加方法
PersonA.prototype.eat=function () {
    console.log("人正在吃东西");
};
//学生构造函数
function StudentA(sex) {
    this.sex=sex;
}


//改变了原型对象的指向
StudentA.prototype = new PersonA(10);
//学生的原型中添加方法,方法是在改变指向之后添加的
StudentA.prototype.sayHi = function () {
    console.log("您好哦");
};
var stuA=new StudentA("男");
stuA.eat();  // 人正在吃东西
// 改变指向之后添加的新的方法
stuA.sayHi();  // 您好哦
console.dir(stu);

var perA = new PersonA(10);
perA.eat();  // 人正在吃东西
// perA.sayHi();  // 程序报错,因为Person()没有sayHi()方法
```



## 8.10 属性重名问题

> 当原型和实例对象的属性重名的时候,优先用实例对象的属性
>
> 实例对象属性找不到,才会去找原型的

```javascript
function Person(age,sex) {
    this.age=age;
    this.sex=sex;
};

Person.prototype.age = "100";
Person.prototype.sex = "女";

// 实例属性和原型添加的属性重名了,会优先用原型的属性
var per = new Person(10,"男");

console.log(per.sex);  // 男
console.log(per.age);  // 10
// js是一门动态语言,对象名.属性的时候就已经有了这个属性了,但是属性没有给赋值,所以结果是 undefined
console.log(per.fdsfdsfsdfds);  // undefined
```



# 九. JS中的继承

> JS不是一门面向对象的语言,JS是一门基于对象的语言,但是JS可以模拟面向对象的思想编程,
>
> ​        JS中会通过构造函数来模拟类的概念(class)
>
> ​        JS中的继承
>
> ​        首先继承是一种关系,类(class)与类之间的关系,JS中没有类,但是可以通过构造函数模拟类,然后通过原型来实现继承
>
> ​        继承也是为了数据共享,js中的继承也是为了实现数据共享
>
> ​        原型的作用
>
> ​            1.为了共享数据,节约空间
>
> ​            2.为了实现模拟类的继承
>
> ​        Js中的多态
>
> ​        多态:一个对象有不同的行为,或者是同一个行为针对不同的对象,产生不同的结果.
>
> ​        要想有多态,就要先有继承,js中可以模拟多态,但是不会去使用,也不会模拟

```javascript
function Person(name,age,sex) {
    this.name = name;
    this.sex = sex;
    this.age = age;
};
// 添加原型的方法
Person.prototype.eat = function () {
    console.log("人可以吃东西");
};
Person.prototype.sleep = function () {
    console.log("人在睡觉");
};
Person.prototype.play = function () {
    console.log("生活就是不一样的玩法而已");
};

// 定义一个学生类
function Student(score) {
    this.score = score;
};

// 改变学生类的指向,让学生类指向 Person()类,然后就可以继承Person类的属性和方法
Student.prototype = new Person("小明",10,"男");
// 添加一个新的原型方法
Student.prototype.study = function(){
    console.log("学生都是要学习东西的");
}

// 创建一个学生的对象
var stu = new Student(100);
// 打印学生的属性
console.log(stu.score);  // 100
// 继承来的Person的属性,虽然stu对象没有,但是可以使用父类的属性
console.log(stu.name);  // 小明
console.log(stu.sex);  // 男
console.log(stu.age); // 10
// 继承来的方法
stu.eat();  // 人可以吃东西
stu.play();  // 生活就是不一样的玩法而已
stu.sleep();  // 人在睡觉
// 学生自己的方法
stu.study();  // 学生都是要学习东西的
```



## 9.1 构造函数的方法实现继承

不适用构造函数继承的缺陷

```javascript
function Person(name,age,sex,weight) {
    this.name=name;
    this.age=age;
    this.sex=sex;
    this.weight=weight;
}
Person.prototype.sayHi=function () {
    console.log("您好");
};

// 创建Student对象
function Student(score) {
    this.score=score;
}
// 希望人的类别中的数据可以共享给学生---继承
Student.prototype = new Person("小明",10,"男","50kg");
var stu1 = new Student("100");
// 1.因为继承了父类,所以也会把父类的属性和父类的属性值一同继承过来
console.log(stu1.name,stu1.age,stu1.sex,stu1.weight,stu1.score);  // 小明 10 男 50kg 100
stu1.sayHi();  // 您好

var stu2 = new Student("120");
// 2.因为把父类的属性值一同继承了过来,要想有子类的独特的属性值的话,需要子类给继承过来的属性重新赋予子类的值
stu2.name = "张三";
stu2.age = 20;
stu2.sex = "女";
console.log(stu2.name,stu2.age,stu2.sex,stu2.weight,stu2.score);  // 张三 20 女 50kg 120
stu2.sayHi();  // 您好

var stu3 = new Student("130");
// 3.如果不重新赋值的话,得到的还是父类的属性值
console.log(stu3.name,stu3.age,stu3.sex,stu3.weight,stu3.score);  // 小明 10 男 50kg 130
stu3.sayHi();  // 您好
```

> 继承的时候,不用改变原型的指向,直接调用父级的构造函数的方式来为属性赋值就可以了---> 借用要继承的父类的构造函数
>
> ​         格式:--->借用构造函数:构造函数名字.call(当前对象,属性,属性,属性....);
>
> ​         有点:--->解决了属性继承,并且值不重复的问题
>
> ​         ==缺陷==:--->==父级类别中的方法不能继承==

```javascript
function PersonA(name, age, sex, weight) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.weight = weight;
}
PersonA.prototype.sayHi = function () {
    console.log("您好");
};

function StudentA(name,age,sex,weight,score) {
    // 借用要继承的父类的构造函数
    PersonA.call(this,name,age,sex,weight);
    // this指代当前对象,可以通过this来为子类对象添加新的属性
    this.score = score;
};
var stu1 = new StudentA("小明",10,"男","10kg","100");
console.log(stu1.name, stu1.age, stu1.sex, stu1.weight, stu1.score);  // 小明 10 男 10kg 100
// stu1.sayHi();  程序会报错,因为只是借用了父类的构造方法,父类的方法并没有被继承

var stu2 = new StudentA("小红",20,"女","20kg","120");
console.log(stu2.name, stu2.age, stu2.sex, stu2.weight, stu2.score);  // 小红 20 女 20kg 120

var stu3 = new StudentA("小丽",30,"妖","30kg","130");
console.log(stu3.name, stu3.age, stu3.sex, stu3.weight, stu3.score);  // 小丽 30 妖 30kg 130
```



## 9.2 组合继承

>  原型实现继承方法
>
>  借用构造函数实现继承属性
>
>  组合继承:原型继承+借用构造函数继承 把父类的属性和方法完整的继承

```javascript
function Person(name,age,sex) {
    this.name=name;
    this.age=age;
    this.sex=sex;
}
Person.prototype.sayHi = function () {
    console.log("父类的sayHi");
};

function Student(name,age,sex,score){
    // 借用父类的构造方法
    Person.call(this,name,age,sex);
    // 添加子类自己的属性
    this.score = score;
}
Student.prototype.A = function(){
    console.log("继承之前的A方法")
}
// Studnet()指向Person()实现继承
Student.prototype = new Person();
Student.prototype.A = function(){
    console.log("继承之后的A方法")
}
Student.prototype.eat=function () {
    console.log("吃东西");
};

var stu = new Student("小黑",20,"男","100分");
console.log(stu.name,stu.age,stu.sex,stu.score);  // 小黑 20 男 100分
stu.sayHi();  // 父类的sayHi
stu.eat();  // 吃东西
stu.A();  // 继承之后的A方法 相当于重写了继承之前的A方法


var stu2 = new Student("小黑黑",200,"男人","1010分");
console.log(stu2.name,stu2.age,stu2.sex,stu2.score);  // 小黑黑 200 男人 1010分
stu2.sayHi();  // 父类的sayHi
stu2.eat();  // 吃东西
```



## 9.3 拷贝继承

> Person的构造中有原型prototype,prototype就是一个对象,那么里面的age,sex,height,play都是该对象中的属性或者方法
>
> 拷贝继承: 把一个对象中的属性或者方法直接复制到另一个对象中

```javascript
var obj1={
    name:"小糊涂",
    age:20,
    sleep:function () {
        console.log("睡觉了");
    }
};
// 拷贝继承
var obj2 = obj1;
console.log(obj2.age + obj2.name);
console.log(obj2.sleep());


var objA={
    name:"小糊涂",
    age:20,
    sleep:function () {
        console.log("睡觉了");
    }
};

// 重新开辟了一份内存空间
var objB = {};
for(var key in objA){
    objB[key] = objA[key];
}
console.log(objB.name);  // 小糊涂

// Person的构造中有原型prototype,prototype就是一个对象,那么里面的age,sex,height,play都是该对象中的属性或者方法
// 拷贝继承；把一个对象中的属性或者方法直接复制到另一个对象中
function Person() {
}
Person.prototype.age=10;
Person.prototype.sex="男";
Person.prototype.height=100;
Person.prototype.play=function () {
    console.log("玩的好开心");
};

// 重新开辟了一份内存空间
var BB = {};
for(var key in Person.prototype){
    BB[key] = Person.prototype[key];
}
console.log(BB.sex);  // 男
```



# 十. JS中的闭包

> 闭包的概念:函数A中,有一个函数B,函数B中可以访问函数A中定义的变量或者是数据,此时形成了闭包(这句话暂时不严谨)
>
> ​        闭包的模式:函数模式的闭包,对象模式的闭包
>
> ​        闭包的作用:缓存数据,延长作用域链
>
> ​        闭包的优点和缺点:缓存数据

```javascript
// 函数模式的闭包:在一个函数中有一个函数
function f1() {
    var num=10;
    //函数的声明
    function f2() {
        console.log(num);
    }
    //在一个函数的里面定义了另一个函数,并且调用
    f2();
}
f1();  // 10

// 对象模式的闭包:函数中有一个对象
function f3(){
    var num = 10;
    var obj = {
        age:num
    };
    console.log(obj.age);
}
f3();  // 10

function f4() {
    var num=10;
    return function (){
        console.log(num);  // 10
        return num;
    }
}

// ff 是第一次return返回的对象
var ff = f4();
var result = ff();
console.log(result);  // 10

function f5() {
    var num = 100;
    return {
        age:num
    }
}
var obj = f5();
console.log(obj.age);  // 100
```

闭包案例 1

```javascript
// 普通的函数
function fn1(){
    var num = 10;
    num++;
    return num;
}
console.log(fn1());

// 函数模式的闭包
function fn2(){
    var num = 20;
    return function(){
        num++;
        return num;
    }
}
var ff = fn2();
console.log(ff());
```

闭包案例  2

> 总结:如果想要缓存数据,就把这个数据放在外层的函数和里层的函数的中间位置
> 闭包的作用:缓存数据.优点也是缺陷,没有及时的释放
> 局部变量是在函数中,函数使用结束后,局部变量就会被自动的释放
> 闭包后,里面的局部变量的使用作用域链就会被延长

```javascript
function fn1(){
    var num = parseInt(Math.random()*10+1);
    return function(){
        console.log(num);
    }
}
// 闭包的方式产生随机数
fn1()();
```

闭包案例 3

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>对自己狠点</title>
  <style>
    ul {
      list-style-type: none;
    }

    li {
      float: left;
      margin-left: 10px;
    }

    img {
      width: 200px;
      height: 180px;
    }

    input {
      margin-left: 30%;
    }
  </style>
</head>
<body>
<ul>
  <li><img src="images/ly.jpg" alt=""><br/><input type="button" value="赞(1)"></li>
  <li><img src="images/lyml.jpg" alt=""><br/><input type="button" value="赞(1)"></li>
  <li><img src="images/fj.jpg" alt=""><br/><input type="button" value="赞(1)"></li>
  <li><img src="images/bd.jpg" alt=""><br/><input type="button" value="赞(1)"></li>
</ul>
<script>

    // 获取所有的input标签
    var tagObjs = document.getElementsByTagName("input");

    // 遍历标签,给标签添加点击事件
    for(var i = 0;i<tagObjs.length;i++){
        tagObjs[i].onclick = changeValue();
    }

    // 在点击事件中改变 value 的值
    function changeValue(){
        // 用来统计一共点赞的次数
        var value = 2;
        return function(){
            this.value = "赞(" + (value++) + ")";
        }
    }

</script>
</body>
</html>
```



# 十一. JS中的递归

> 递归一定要有一个结束的条件

```javascript
var i = 1;
function fn1(){
    // 当i大于等于6的时候,递归就会停止
    if(i < 6){
        i++;
        fn1();
    }
    console.log("我是一个递归函数,我执行了");
}
fn1();
```

```javascript
function getSum(num){
    if(num == 1){
        return 1;
    }
    return num + getSum(num -1);
}

console.log(getSum(3));
```



# 十二. JS中的深浅拷贝

> 浅拷贝:拷贝就是复制,就相当于把一个对象中的所有的内容,复制一份给另一个对象,直接复制,
>
> 或者说,就是把一个对象的地址给了另一个对象,他们指向相同,两个对象之间有共同的属性或者方法,皆可使用

```javascript
var obj1 = {
    age:10,
    sex:"男",
    car:["奔驰","宝马","特斯拉","奥拓"]
};

var obj = {};

// 遍历对象中的属性,然后拷贝给新对象
for (var key in obj1){
    obj[key] = obj1[key];
}
console.log(obj);
```

> 深拷贝:拷贝还是复制,深:把一个对象中所有的属性或者方法,一个一个的找到.
>
> 并且在另一个对象中开辟相应的空间,一个一个的存储到另一个对象中

```javascript
var obj1={
    age:10,
    sex:"男",
    car:["奔驰","宝马","特斯拉","奥拓"],
    dog:{
        name:"大黄",
        age:5,
        color:"黑白色"
    }
};

// 创建一个空对象
var obj2 = {};
function extend(a,b){
    for(var key in a){
        //获取a对象的每一个属性值
        var item = a[key];
        // 判断这个属性值是不是数组
        if(item instanceof Array){
            b[key] = [];
            // 再一次的调用这个方法进行判断,判断通过就复制
            extend(item,b[key]);
        }else if(item instanceof Object){
            // 给创建一个空的对象,等待复制
            b[key] = {};
            extend(item,b[key]);
        }else{
            // 如果是普通的数据的话,就直接复制到新的对象中去
            b[key] = item;
        }
    }
}
// 调用复制的方法
extend(obj1,obj2);
console.dir(obj1);
console.dir(obj2);
```



# 十三. JS中的正则表达式

> 创建正则表达式对象
>
> ​        1.通过构造函数创建对象
>
> ​        2.字面量的方式创建对象

```javascript
// 创建正则表达式对象
var reg = new RegExp(/\d{5}/);
// 要进行匹配的字符串
var str = "我的电话是10086";
// 调用方法验证是否匹配正确
var flag = reg.test(str);
console.log(flag);  // true


// 字面量的方式创建正则表达式
var reg = /\d{1,5}/;
var flag = reg.test("小苏的幸运数字:888");
console.log(flag);  //true
```

