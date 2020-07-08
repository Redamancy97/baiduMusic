<template>
    <div class="music-bill-container">
        <h3>音乐榜单<span>更多</span></h3>
        <van-tabs v-model="active">
            <van-tab title="热歌榜">
                <MusicList :type="2"></MusicList>
            </van-tab>
            <van-tab title="新歌榜">
                <MusicList :type="1"></MusicList>
            </van-tab>
            <van-tab title="King榜">
                <MusicList :type="25"></MusicList>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>

    // import MusicList from "./MusicList";
    import MusicList from "./MusicList";
    // import {getBillList} from "../api/music-api";

    export default {
        name: "MusicBill",
        components: {
            MusicList
        },
        data() {
            return {
                active: 0,
            };
        },
    }
</script>

<style scoped lang="less">
    .music-bill-container {
        padding: 5px 15px;
        background-color: #fff;

        h3 {
            margin: 10px 0;

            span {
                float: right;
                font-size: 14px;
                color: #999999;
            }

        }
    }
</style>