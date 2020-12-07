<template>
    <div>
        nowplaying
        <ul>
            <li v-for="data in dataList" :key="data.filmId" @click="handleClick(data.filmId)">
                <p>{{data.name}}</p>
                <img :src="data.poster"/>
            </li>
        </ul>
    </div>
</template>

<script>
// 导入axios库
import axios from 'axios'
export default {
    data() {
        return {
            dataList: ["1111", "2222", "3333"]
        }
    },
    asyncData(data) {
        console.log(data);
        return axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6341699",
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16072567591309810406457345","bc":"310100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            console.log(res.data.data.films);
            return {
                // 把后端返回的数据赋值到数据对象中
                dataList: res.data.data.films
            }
        })
    },
    methods: {
        handleClick(id) {
            // 当我们进行点击跳转的时候,使用的是动态路由
            this.$router.push(`/detail/${id}`)
        }
    },
}
</script>
<style lang="scss" scoped>

</style>