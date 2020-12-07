<template>
  <div v-if="filminfo">
    detail--{{$route.params.myid}}
    <img :src="filminfo.poster"/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    // 指定详情页面所使用的根组件的模板(默认都使用的是defalut.vue)
    // 但是我们现在手动指定为detailTemplate.vue
    layout: "detailTemplate",
    data(){
        return {
            filminfo: null
        }
    },
    asyncData(data) {
        console.log(data.params);
        return axios({
            url:`https://m.maizuo.com/gateway?filmId=${data.params.myid}&k=7153258`,
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
                'X-Host': 'mall.film-ticket.film.info'
            }
        }).then(res=>{
            return {
                // 获取服务器返回给前端的信息
                filminfo: res.data.data.film
            }
        })
    },
}
</script>
<style lang="scss" scoped>

</style>