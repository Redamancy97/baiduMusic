<template>
    <div class="music-play-container" :style="{height:height}">
        <Header :title="songinfo.title"></Header>
        <div class="music-play-cover">
            <img :src="songinfo.pic_big" :class="isPlay?'play':''">
        </div>
        <Lrc v-if="songinfo.lrclink" :lrc-link="songinfo.lrclink"></Lrc>
        <MusicAction :file-link="bitrate.file_link"></MusicAction>
        <div class="music-play-audio">
            <audio controls :src="bitrate.show_link" ref="audio"></audio>
        </div>
    </div>
</template>

<script>
    import Header from "./components/Header";
    import Lrc from "./components/Lrc";
    import MusicAction from "./components/MusicAction";
    import {getSongInfo} from "../../api/music-api";
    import {mapState} from "vuex";

    export default {
        name: "MusicPlay",
        components: {MusicAction, Lrc, Header},
        data() {
            return {
                height: 0,
                bitrate: {},
                songinfo: {},
                isPlay: false
            }
        },
        created() {
            // debugger
            this.height = window.innerHeight + "px";
            getSongInfo(this.$route.params.songId).then(res => {
                // console.log(res)
                this.songinfo = res.data.songinfo;
                this.bitrate = res.data.bitrate;
            })
        },
        mounted() {
            this.$refs.audio.addEventListener('timeupdate', () => {
                console.log(this.$refs.audio.currentTime)
                this.$store.commit("setCurrentTime", {currentTime: this.$refs.audio.currentTime});
            });
            this.$refs.audio.addEventListener('play', () => {
                this.isPlay = true;
                console.log(11111);
            });
            this.$refs.audio.addEventListener('pause', () => {
                this.isPlay = false;
                console.log(2222);
            })
        },
        computed: {
            ...mapState(["process"])
        },
        watch: {
            process() {
                this.$refs.audio.currentTime = this.process;
            }
        }

    }
</script>

<style scoped lang="less">
    .music-play-container {
        /*text-align: center;*/
        background-color: #F1F1F1;
        /*position: fixed;*/
        /*width: 100%;*/
        /*height: 100%;*/
        /*top: 0;*/
        /*right: 0;*/

        .music-play-cover {
            width: 150px;
            height: 150px;
            /*text-align: center;*/
            margin: auto;

            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }

            .play {
                animation: rotate 3s infinite linear;
            }

            @keyframes rotate {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }
        }

        .music-play-audio {
            width: 300px;
            margin: auto;

            audio {
                padding: 10px 0;
            }
        }
    }
</style>