<template>
    <div class="lrc-container">
        <ul ref="list">
            <li @click="setProcess(item.time)" v-for="(item,index) in lrcContent" :key="index"
                :class="index==active?'active':''">
                {{item.content}}
            </li>
        </ul>
    </div>
</template>

<script>
    import {getLrc} from "../../../api/music-api";
    import {mapState} from "vuex";

    export default {
        name: "Lrc",
        props: {
            lrcLink: String
        },
        data() {
            return {
                lrcContent: [],
                //当前激活的歌词
                active: 0,
                noScroll: false,
                timeoutId: null,
            }
        },
        created() {
            console.log(this.lrcLink);
            getLrc(this.lrcLink).then(res => {
                const lrcContent = res.data.content.replace(/\r/g, '').split("\n");

                let reg = /\[\d*:\d*\.\d*\]/g;
                // console.log();
                if (!res.data.content.match(reg)) {
                    this.lrcContent = lrcContent.map(item => {
                        return {
                            time: -1,
                            content: item
                        }
                    })
                }
                // console.log(content);
                lrcContent.forEach(item => {
                    let content = item.match(reg);
                    if (content) {
                        content.forEach(timeItem => {
                            let min = Number(timeItem.match(/\[\d*/)[0].replace("[", ""));
                            // console.log(min);
                            let sec = Number(timeItem.match(/:\d*/)[0].replace(":", ""));
                            // console.log(sec);
                            let time = min * 60 + sec;
                            let contentStr = item.replace(reg, "");
                            if (contentStr) {
                                this.lrcContent.push({
                                    time,
                                    content: contentStr
                                })
                            }
                        })
                    }
                })

            })
        },
        computed: {
            ...mapState(["currentTime"])
        },
        watch: {
            // lrcLink(){
            //     if (this.lrcLink){
            //         console.log(this.lrcLink);
            //     }
            // }
            currentTime() {
                console.log(this.currentTime);
                // 根据时间判断激活的歌词是哪一个
                for (let i = 0; i < this.lrcContent.length; i++) {
                    if (this.lrcContent[i].time > this.currentTime) {
                        if (i > 0) {
                            this.active = i - 1;
                        }
                        if (!this.noScroll) {
                            this.$refs.list.scrollTop = this.$refs.list.children[this.active].offsetTop - 50;
                        }
                        break;
                    }
                }
            }
        },
        methods: {
            setProcess(time) {
                this.$store.commit("setProcess", {process: time})
            }
        },
        mounted() {
            this.$refs.list.addEventListener("touchstart", () => {
                if (this.timeoutId) {
                    clearTimeout(this.timeoutId);
                }
                this.noScroll = true;

            })
            this.$refs.list.addEventListener("touchend", () => {
                this.timeoutId = setTimeout(() => {
                    this.noScroll = false;
                }, 2000)
            })
        }
    }
</script>

<style scoped lang="less">
    .lrc-container {
        margin: 30px 0;
        height: 150px;
        text-align: center;

        ul {
            height: 100%;
            overflow: scroll;
            /*  */
            position: relative;

            .active {
                font-size: 16px;
                color: tomato;
            }
        }
    }
</style>