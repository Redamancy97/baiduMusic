<template>
    <div class="header-container">
        <router-link to="/index">
            <van-icon name="wap-home-o" color="tomato"/>
        </router-link>
        <span>{{title}}</span>
        <router-link to="/index/search">
            <van-icon name="search"/>
        </router-link>

    </div>
</template>

<script>
    export default {
        name: "Header",
        props:{
            title:String
        }
    }
</script>

<style scoped lang="less">
    .header-container {
        padding: 20px 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        i {
            font-size: 24px;
        }
    }
</style>