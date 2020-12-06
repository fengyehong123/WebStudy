<template>
  <div>
    <ul>
      <!-- 
        要在页面之间使用路由,一般会使用<nuxt-link>标签
        activeClass="active"
          active是我们自己定义的css样式.activeClass代表被点击激活时候所触发的样式
        tag="li" 
          声明是一个li标签
       -->
      <nuxt-link to='/film' tag="li" activeClass="active">film</nuxt-link>
      <nuxt-link to='/cinema' tag="li" activeClass="active">cinema</nuxt-link>
      <nuxt-link to='/center' tag="li" activeClass="active">center</nuxt-link>
    </ul>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.active {
  color: red;
}
</style>
