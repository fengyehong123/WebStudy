<template>
    <div>
        detail-->动态路由所对应的id:{{$route.params.myid}}
    </div>
</template>

<script>
export default {
    // 指定详情页面所使用的根组件的模板(默认都使用的是defalut.vue)
    // 但是我们现在手动指定为detailTemplate.vue
    layout: "detailTemplate"
}
</script>
<style lang="scss" scoped>

</style>