// 引用gulp模块
const gulp = require('gulp');
// 引用gulp-htmlmin插件
const htmlmin = require('gulp-htmlmin');
// 引入gulp-file-include插件
const fileinclude = require('gulp-file-include');
// 引入less语法转化的插件对象
const less = require('gulp-less');
// 引入css压缩的插件对象
const csso = require('gulp-csso');
// 引入ES6代码转换的插件
const babel = require('gulp-babel');
// 引入JS代码混淆的插件
const uglify = require('gulp-uglify');

// 通过gulp新建一个名称为first的gulp任务
gulp.task('first', (cb)=> {
    // 获取要处理的文件
    gulp.src('./src/css/base.css')
    // 将处理后的文件输出到dist目录
    .pipe(gulp.dest('./dist/css'));
    
    // 结束任务的执行  
    cb();
})

/*
    HTML任务
    1. 抽取HTML文件中的公共代码
        使用下面的这种方式来引入公共区域的代码. @@include是插件自带的API
        @@include('./common/header.html')
    2. HTML文件中代码的压缩操作
*/
gulp.task('htmlmin', (cb) => {
    gulp.src('./src/*.html')
        // 在管道中使用抽取公共文件的插件(我们先收取公共文件,然后再对HTML进行压缩)
        .pipe(fileinclude())
        // 使用插件来压缩html文件中的代码
        .pipe(htmlmin({ collapseWhitespace: true }))
        // 将压缩之后的代码放到dist目录下
        .pipe(gulp.dest('dist'));

        // 结束任务的执行
        cb();
})

/*
    CSS任务
    1. less语法转换
    2. css代码压缩
*/
gulp.task('cssmin', (cb) => {
    // 同时指定要读取的文件(css和less两种文件)
    gulp.src(['./src/css/*.less', './src/css/*.css'])
        // 使用引入的插件对象,把less语法转换为css语法
        .pipe(less())
        // 使用css压缩对象,对css代码进行压缩.上一步已经把less代码转换为css代码,这一步把css代码进一步进行压缩
        .pipe(csso())
        // 指定输入的位置
        .pipe(gulp.dest('dist/css'));
    cb();
})

/*
    JS任务
    1. ES6代码转换
    2. 代码压缩
*/
gulp.task('jsmin', (cb) => {
    gulp.src('./src/js/*.js')
        .pipe(babel({
            // @babel/env 可以判断当前代码的运行环境,可以将代码转换为当前运行环境所支持的代码
            presets: ['@babel/env']
        }))
        // 先把通过上面的处理把ES6的JS语法转换为ES5语法,然后通过插件对代码进行压缩
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
    
    // 结束任务的执行
    cb();
})

// 复制文件夹
gulp.task('copy', (cb) => {
    gulp.src('./src/images/*')
        .pipe(gulp.dest('dist/images'));
    
    gulp.src('./src/lib/sweetalert/*')
        .pipe(gulp.dest('dist/lib'));
    
    // 结束任务的运行
    cb();
})

/*
    构建任务,当执行构建任务的时候,同时执行好几个任务
    Gulp4的方式
        gulp.series：按照顺序执行
        gulp.paralle：可以并行执行
*/ 
gulp.task('default', gulp.series('htmlmin', 'cssmin', 'jsmin', 'copy'));
