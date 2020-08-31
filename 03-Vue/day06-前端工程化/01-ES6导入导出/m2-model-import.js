// 把m1(导入模块).js暴露的模块导入
// 默认导入
import m1 from './m1-model-export.js'
// 按需导入
import {s1, say} from './m1-model-export.js'
// 我们还可以给按需导入的模块起别名
import {s2 as sss2} from './m1-model-export.js'

// 如果要导入的模块没有向外暴露对象的话,我们导入模块得到的会使一个 空对象
console.log(m1);  // { a: 10, c: 20, show: [Function: show] }

// 打印按需导入的模块
console.log(s1);
// sss2是按需导入的模块起的别名
console.log(sss2);
console.log(say);

/* 
    在终端中执行下面的命令
    npx babel-node .\m2-model-import.js 
*/ 