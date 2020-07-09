<template>
    <div class="singer-item-container">
        <div class="singer-info">
            <div class="cover">
                <img :src="artistinfo.avatar_middle" alt="">
            </div>
            <div class="singer-name">{{artistinfo.name}}</div>
        </div>
        <ul class="song-info">
            <li v-for="(item,index) in songlist" :key="index">{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
    import {getSingerInfo} from "../../../api/music-api";

    export default {
        name: "SingerItem",
        data() {
            return {
                artistinfo: [],
                songlist: []
            }
        },
        props: {
            tinguid: {type: Number}
        },
        created() {
            getSingerInfo(this.$route.params.tinguid).then(res => {
                console.log(res);
                this.artistinfo = res.data.artistinfo;
                this.songlist = res.data.songlist;
            })
        }
    }
</script>

<style scoped lang="less">
    .singer-item-container {
        /*background-color: #fff;*/
        height: 100vh;

        .singer-info {
            padding: 20px 0;
            /*background-image: url(artistinfo.avatar_middle);*/

            .cover {
                width: 50px;
                height: 50px;
                margin: auto;

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }

            .singer-name {
                font-size: 18px;
                text-align: center;
                margin-top: 10px;
            }
        }

        .song-info {
            padding: 20px;
            color: #555555;
            /*text-align: center;*/

            li {
                height: 40px;
                line-height: 40px;
                border-bottom: 1px solid #ccc;
            }
        }

    }
</style>