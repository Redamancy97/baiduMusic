<template>
    <div class="music-play-container" :style="{height:height}">
        <Header :title="songinfo.title"></Header>
        <div class="music-play-cover">
            <img :src="songinfo.pic_big">
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
                songinfo: {}
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