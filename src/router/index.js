import Vue from 'vue'
import VueRouter from 'vue-router'

import IndexLayout from "../layout/IndexLayout";
import Singer from "../views/Singer/Singer";
import Bill from "../views/Bill/Bill";
import My from "../views/My";
import Search from "../views/Search/Search";
import Index from "../views/Index.vue";
import SingerItem from "../views/Singer/components/SingerItem";
import BillContent from "../views/Bill/components/BillContent";

Vue.use(VueRouter)


const routes = [
    {
        path: "/",
        redirect: "/index"
    },
    {
        path: '/index',
        component: IndexLayout,
        children: [
            {
                path: "",
                component: Index,
                meta: {
                    title: "首页"
                }
            },
            {
                path: "singer",
                component: Singer,
                meta: {
                    title: "歌手"
                }
            },
            {
                path: "bill",
                component: Bill,
                meta: {
                    title: "榜单"
                }
            }, {
                path: "my",
                component: My,
                meta: {
                    title: "我的"
                }
            }, {
                path: "search",
                component: Search,
                meta: {
                    title: "搜索"
                },
            }, {
                name: "more",
                path: "more/:type",
                component: () => import('../views/MoreMusic.vue'),
                meta: {
                    title: "更多音乐"
                },
            },
            {
                name: 'singerItem',
                path: "singerItem/:tinguid",
                component: SingerItem,
                meta: {
                    title: "歌手详情"
                }
            },
            {
                name: 'billContent',
                path: "billContent/:type",
                component: BillContent,
                meta: {
                    title: "榜单详情"
                }
            }
        ]
    },
    {
        name: "musicPlay",
        path: "/music-play/:songId",
        component: () => import('../views/MusicPlay/MusicPlay.vue'),
        meta: {
            title: "歌曲播放"
        }
    }
]

const router = new VueRouter({
    // 配置路由的模式
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
