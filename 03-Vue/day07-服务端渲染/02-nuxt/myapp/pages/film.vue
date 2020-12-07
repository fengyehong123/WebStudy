<template>
    <div>
        <ul>
            <nuxt-link to='/film/nowplaying' tag="li" activeClass="active">正在热映</nuxt-link>
            <nuxt-link to='/film/comingsoon' tag="li" activeClass="active">即将上映</nuxt-link>
        </ul>
        <!-- 路由占位符 -->
        <nuxt-child></nuxt-child>
    </div>
</template>

<script>
export default {
    
}
</script>
<style lang="scss" scoped>

</style>