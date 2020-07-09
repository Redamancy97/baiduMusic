<template>
    <div class="music-action-container">
        <van-icon v-show="!isLike" name="like-o" @click="collect"/>
        <van-icon v-show="isLike" color="tomato" name="like" @click="collect"/>
        <a download="" :href="fileLink">
            <van-icon name="down"/>
        </a>
    </div>
</template>

<script>
    import {Toast, Dialog} from "vant";

    export default {
        name: "MusicAction",
        data() {
            return {
                isLike: false,
            }
        },
        props: {
            fileLink: String
        },
        methods: {
            collect() {
                // 收藏
                if (this.isLike) {
                    //    是否取消收藏
                    Dialog.confirm({
                        title: '是否取消收藏',
                        message: '您确定要取消收藏嘛！',
                    })
                        .then(() => {
                            // on confirm 确认取消
                            this.isLike = !this.isLike;
                        })
                        .catch(() => {

                        });
                } else {
                    //    收藏
                    this.isLike = !this.isLike;
                    //    收藏成功
                    Toast.success('收藏成功');
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .music-action-container {
        padding: 20px 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        i {
            font-size: 24px;
        }
    }
</style>