<template>
    <div class="bill-list-container">
        <h3>{{title}}
            <router-link tag="span" :to="{name:'more',params:{type:type}}">更多</router-link>
        </h3>
        <ul class="bill-list">
            <router-link :to= "{name:'musicPlay',params:{songId:item.song_id}}"  v-for="item in list" :key="item.song_id"
                         class="bill-list-content">
                <img :src="item.pic_big"
                     alt="">
                <div>{{item.title}}</div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    import {getBillList} from "../api/music-api";

    export default {
        name: "BillList",
        data() {
            return {
                list: [],
            }
        },
        props: {
            size: {
                type: Number,
                default: 6
            },
            type: {
                type: String,
                // default:6
            },
            title: {
                type: String,
                default: "榜单"
            },
        },
        created() {
            // this.$http.get(`/v1/restserver/ting?method=baidu.ting.billboard.billList&size=${this.size}&type=${this.type}`).then(res => {
            //     console.log(res.data);
            //     this.list = res.data.song_list;
            // })
            getBillList(this.type, this.size).then(res => {
                console.log(res);
                this.list = res.data.song_list
                // console.log(res.list)
            })
        }
    }
</script>

<style scoped lang="less">
    .bill-list-container {
        padding: 5px 15px;
        background-color: #fff;
        /*margin-bottom: 10px;*/

        h3 {
            margin: 10px 0;

            span {
                float: right;
                font-size: 14px;
                color: #999999;
            }

        }

        // 榜单样式
        .bill-list {
            display: flex;
            flex-wrap: wrap;
            /*list-style: none;*/
            /*padding-left: 0px;*/


            .bill-list-content {
                width: calc(100% / 3);
                box-sizing: border-box;
                padding: 5px;

                img {
                    width: 100%;
                }
            }
        }
    }
</style>