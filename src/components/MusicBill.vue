<template>
    <div class="music-bill-container">
        <h3>音乐榜单<span>更多</span></h3>
        <van-tabs v-model="active">
            <van-tab title="热歌榜">
                <ul>

                </ul>
            </van-tab>
            <van-tab title="新歌榜">内容 2</van-tab>
            <van-tab title="King榜">内容 3</van-tab>
        </van-tabs>
    </div>
</template>

<script>
    // import MusicList from "./MusicList";
    export default {
        name: "MusicBill",
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