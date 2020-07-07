<template>
    <ul class="music-list">
        <li v-for="item in list" :key="item.song_id">
            <!--左边-->
            <div class="cover">
                <img :src="item.pic_big" alt="">
            </div>
            <!--右边-->
            <div class="intro">
                <div class="title">{{item.title}}</div>
                <div class="author">{{item.author}}</div>
            </div>
        </li>
    </ul>
</template>

<script>
    import {getBillList} from "../api/music-api";

    export default {
        name: "MusicList",
        data() {
            return {
                list: []
            }
        },
        props: {
            type: [Number, String]
        },
        created() {
            getBillList(this.type, 6).then(res => {
                this.list = res.data.song_list;
            })
        }
    }
</script>

<style scoped lang="less">
    .music-list {
        margin-top: 10px;

        li {
            display: flex;

            .cover {
                width: 50px;
                flex-shrink: 0;
                padding: 5px;

                img {
                    width: 100%;
                }
            }

            .intro {
                flex-grow: 1;
                padding: 3px 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;

                .author {
                    font-size: 12px;
                    color: #ccc;
                }
            }
        }
    }
</style>