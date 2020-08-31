// 定义私有成员a和c
let a = 10;
let c = 20;

// 定义变量b,因为没有被暴露出去,所以外面是访问不到的
let b = 30;

// 定义一个函数
function show() {
    console.log("我是一个show方法")
}

// 将本模块中欧冠的私有成员暴露出去,提供替他模块使用
// **注意: 在每一个模块中,只能使用一次 export default,否则会报错
export default {
    a,
    c,
    show
}

// 以下为按需导出
// 按需导出可以使用很多次
export let s1 = '按需导出aaa'
export let s2 = '按需导出ccc'
export function say() {
    console.log("按需导出函数 say()");
}
