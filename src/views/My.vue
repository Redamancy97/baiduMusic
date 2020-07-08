<template>
    <div>My

        <button @click="logout">退出登录</button>
        <button @click="changeUserInfo">修改个人信息</button>
        <ul>
            <li v-for="(item,index) in list" :key="index">{{item}}</li>
        </ul>

        <ul>
            <li v-for="(item,index) in billList" :key="index">{{item.title}}</li>
        </ul>
        <div>{{name}}</div>
    </div>

</template>

<script>
    import {createNamespacedHelpers, mapGetters, mapState} from "vuex";
    import {SET_IS_LOGIN} from "../constants/mutation-type";

    const {mapState:mapUserState}=createNamespacedHelpers("user")
    export default {
        name: "My",
        created() {
            //    在任何地方都可以通过this.$store拿到vuex的store
            console.log(this.$store.state.userInfo.name);
            //dispatch 触发action
            this.$store.dispatch("setBillList", {type: 2})
            // console.log((this.$store.state.billList.title))
        },
        computed: {
            ...mapState(["userInfo", "billList"]),
            list() {
                return this.$store.getters.zhengxu
            },
            ...mapGetters(["zhengxu"]),
            // name(){
            //     return this.$store.state.user.name;
            // }
            ...mapUserState(["name"])
        },
        methods: {
            //
            logout() {
                //    this.$store.commit() 用来触发mutation的方法
                //    第一个参数是类型，就是我们具体要触发哪个mutation
                //    第二个参数是payload，就是我们要给mutation传的值（一般payload是对象）
                this.$store.commit(SET_IS_LOGIN, {isLogin: false})
            },
            changeUserInfo() {
                this.$store.commit({
                    type: "setUserInfo",
                    userInfo: {name: "尚云科技"}
                });
                // 使用命名之后就会调用这个模块
                this.$store.commit("user/changeName", {name: "张无忌"});
            }
        }
    }
</script>

<style scoped>

</style>