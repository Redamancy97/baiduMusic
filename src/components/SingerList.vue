<template>
    <div class="singer-list-container">
        <div class="singer-list-img">
            <img :src="list.avatar_middle"
                 alt="">
        </div>
        <div class="singer-list-name">{{list.name}}</div>
    </div>
</template>

<script>
    import {getSingerList} from "../api/music-api";

    export default {
        name: "SingerList",
        data() {
            return {
                list: {},
            }
        },
        props: {
            singerId: {
                type: Number
            }
        },
        created() {
            getSingerList(this.singerId).then(res => {
                console.log(res.data);
                this.list = res.data;
            })
        }
    }
</script>

<style scoped lang="less">
    .singer-list-container {
        background-color: #fff;
        padding: 10px;
        height: 70px;
        border-bottom: 1px solid #cccccc;
        display: flex;
        line-height: 50px;
        color: #555555;

        .singer-list-img {
            flex-shrink: 0;
            width: 50px;
            height: 50px;
            margin-right: 10px;
            /*border: 1px solid transparent;*/

            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                border: 1px solid transparent;
            }
        }

        .singer-list-name {
            flex-grow: 1;
            flex-direction: column;
            justify-content: center;
        }
    }
</style>