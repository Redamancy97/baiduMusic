import Vue from 'vue'
import Vuex from 'vuex'
import {getBillList} from "../api/music-api";
import {SET_IS_LOGIN} from "../constants/mutation-type";
import user from './modules/user'

// let store;


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userInfo: {
            name: "这是我的"
        },
        isLogin: true,
        list: [2, 3, 4, 5, 98, 1, 21, 66],
        billList: []
    },
    // 修改vuex中的数据只能mutation中修改
    // mutation是一个纯函数，不能有异步操作
    mutations: {
        // 在mutation中写的是函数
        //      参1,state是当前的state；参2，调用这个mutation的时候传过来的值
        [SET_IS_LOGIN](state, {isLogin}) {
            // debugger
            // const {isLogin} = payload;
            // const isLogin = payload.billList
            state.isLogin = isLogin
            //    ||

        },
        setUserInfo(state, payload) {
            state.userInfo = payload.userInfo;
        },
        setBillList(state, payload) {
            state.billList = payload.billList;
        }
    },
    // 可以理解为vuex的计算属性,getters，可以对state进行一些派生
    getters: {
        // 定义成函数的形式，函数的参数是state，返回值是getters的值
        zhengxu(state) {
            return state.list.sort((a, b) => {
                return a - b;
            });
        },
        daoxu(state) {
            return state.list.sort((a, b) => {
                return b - a;
            });
        }
    },
    //action中可以添加异步操作
    actions: {
        // 参数1.context：上下文 可以获取state，可以触发别的action，可以提交mutation，也可以获取getter；参数2.payload：调用action的时候传递剑来的参数
        // setBillList(context, payload) {
        //     //请求了接口，获取了数据
        //     getBillList(payload.type).then(res => {
        //         //    请求到了榜单列表的数据
        //         context.commit("setBillList", {billList: res.list})
        //     })
        // },
        setBillList({commit, state}, {type}) {
            console.log(state);
            //请求了接口，获取了数据
            getBillList(type).then(res => {
                //    请求到了榜单列表的数据
                commit("setBillList", {billList: res.data.song_list})
            })
        }
    },
    modules: {
        user
    }
})
export default store;