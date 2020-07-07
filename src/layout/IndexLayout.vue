<template>
    <div class="index-layout-container">
        <!--顶部导航栏-->
        <header>
            <ul class="nav-bar">
                <li>
                    <router-link to="/index"><img class="icon" src="../assets/logo-ea5.png" alt=""></router-link>
                </li>
                <li>
                    <router-link to="/index/singer">歌手</router-link>
                </li>
                <li>
                    <router-link to="/index/bill">榜单</router-link>
                </li>
                <li>
                    <router-link to="/index/my">我的</router-link>
                </li>
                <li>
                    <router-link to="/index/search">搜索</router-link>
                </li>
            </ul>
        </header>
        <!--页面渲染的区域-->
        <section>
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
    export default {
        name: "IndexLayout"
    }
</script>

<style scoped lang="less">
.index-layout-container{
    padding: 5px 10px;
    background-color: #f5f5f5;
    .nav-bar {
        /*margin: 0;*/
        /*padding-left: 0px;*/
        /*list-style: none;*/
        display: flex;
        justify-content: space-around;
        height: 50px;
        font-size: 16px;
        background-color: #f9f9f9;
        color: #999;
        /*line-height: 50px;*/
        align-items: center;
        /*text-align: center;*/
        /*margin-bottom: 10px;*/
        li {
            width: 20%;
            text-align: center;
        }

        // 图标样式
        .icon {
            width: 27px;
            height: 27px;

        }

        a {
            color: #999;
            /*text-decoration: none;*/
        }
        .router-link-active{
            color: hotpink;
        }
    }
}

</style>