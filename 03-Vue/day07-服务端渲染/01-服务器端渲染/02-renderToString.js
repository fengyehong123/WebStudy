const Vue = require('vue');
const server = require('express')();
const template = require('fs').readFileSync('./index.template.html', 'utf-8');
const renderer = require('vue-server-renderer').createRenderer({
  template,
});

const context = {
    title: 'vue ssr',
    meta: `
      <meta name="keyword" content="vue,ssr">
      <meta name="description" content="vue srr demo">
    `,
};

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>访问的 URL 是： {{ url }}</div>`,
  });

  renderer
  .renderToString(app, context, (err, html) => {
    console.log(html);
    if (err) {
      res.status(500).end('Internal Server Error')
      return;
    }
    
    // 避免页面乱码
    res.writeHead(200, {"Content-Type": 'text/html;charset=utf8'});

    // 服务器端将渲染完毕的页面返回给浏览器
    res.end(html);
  });
})

server.listen(8087);

/*
  在终端窗口输入下面的命令运行node服务器
  node ./02-renderToString.js

  在浏览器中输入 
  http://localhost:8087/ 
  就可以看到具体的页面
*/