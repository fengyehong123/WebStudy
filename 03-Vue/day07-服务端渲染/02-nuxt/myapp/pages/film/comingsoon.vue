<template>
    <div>
        comignsoon
        <ul>
            <li v-for="data in datalist" :key="data.id">
                {{data.nm}}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {  
    asyncData(data) {
        return axios({
            // 判断是否是服务端的请求,如果是服务端请求就直接访问猫眼的接口,如果是客户端的请求,就是使用代理的方式来访问
            // process.server 是一个全局变量,如果是服务端请求,它返回的就是true.如果是客户端请求,它返回的就是false
            url: process.server ? "http://m.maoyan.com/ajax/movieOnInfoList?token=" : "/ajax/movieOnInfoList?token=",
        }).then(res => {
            // console.log(res.data.movieList);
            return {
                datalist: res.data.movieList
            }
        })
    },
}
</script>
<style lang="scss" scoped>

</style>