<template>
    <div class="more-music-container">
        <h3>今日榜单</h3>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                    class="van-list"
            >
                <div v-for="item in list" :key="item.song_id" class="van-cell">
                    <img :src="item.pic_big" alt="">
                    <div>{{item.title}}</div>
                </div>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
    import {getBillList} from "../api/music-api";

    export default {
        name: "MoreMusic",
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
                refreshing: false,
                offset: 0
            };
        },
        // props: {
        //     type: {
        //         type: [String, Number],
        //         // default:6
        //     },
        // },
        methods: {
            onLoad() {
                getBillList(this.$route.params.type, 10, this.offset).then(res => {
                    console.log(res.list);
                    this.list = this.list.concat(res.data.song_list);
                    this.loading = false;
                    this.refresh = false;
                    // console.log(res.list)
                })
                this.offset += 10;
            },
            onRefresh() {
                this.list = [];
                this.offset = 0;
                this.onLoad()
            },
        },
        created() {
            // getBillList(this.type = '2').then(res => {
            //     console.log(res);
            //     this.list = res.data.song_list
            //     // console.log(res.list)
            // })
        }
    }
</script>

<style scoped lang="less">
    .more-music-container {
        background-color: #fff;
        padding: 10px;

        .van-list {
            display: flex;
            flex-flow: wrap;

            .van-cell {
                width: calc(100% / 2);
                box-sizing: border-box;
                padding: 5px;
                display: flex;
                flex-direction: column;

                img {
                    width: 100%;
                }
            }
        }
    }
</style>