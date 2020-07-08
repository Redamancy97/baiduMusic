<template>
    <div>{{userInfo.name}}</div>
<!--    <div>{{isLogin}}</div>-->
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "Search",
        created() {
            //涉及到使用就涉及到变化
            // 推荐我们使用计算属性来获取vuex的值
            console.log(this.userInfo.name);
        },
        computed: {
            //vuex都要写在计算属性里
            // userInfo() {
            //     return this.$store.state.userInfo
            // },
            // isLogin(){
            //     return this.$store.state.isLogin
            // }
            // ...mapState({userInfo: "userInfo",isLogin:"isLogin"})
            ...mapState(["userInfo","isLogin"])
        }

    }
</script>

<style scoped>

</style>