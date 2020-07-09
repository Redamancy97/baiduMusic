<template>
    <div class="bill-content-container">
        <div class="cover">
            <img :src="billboard.pic_s444" alt="">
        </div>
        <ul>
            <li v-for="(item,index) in song_list" :key="index" class="bill-list">
                <p class="title">{{item.title}}</p>
                <p class="author">{{item.author}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import {getBillList} from "../../../api/music-api";

    export default {
        name: "BillContent",
        data() {
            return {
                song_list: [],
                billboard: []
            }
        },
        props: {
            type: {
                type: Number
            }
        },
        created() {
            getBillList(this.$route.params.type, 10).then(res => {
                console.log(res);
                this.song_list = res.data.song_list;
                this.billboard = res.data.billboard
            })
        }
    }
</script>

<style scoped lang="less">
    .bill-content-container {
        background-color: #fff;
        height: 100vh;

        .cover {
            width: 100%;
            height: 180px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        ul {
            padding: 20px;

            .bill-list {
                border-bottom: 1px solid #BCBCBC;
                padding: 10px 0;
                .title{
                    font-size: 18px;
                    color: #737373;
                }
                .author{
                    font-size: 14px;
                    color: #B5B5B5;
                }
            }
        }
    }
</style>