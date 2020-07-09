<template>
    <div class="search-item-container">
        <div class="search-input">
            <input type="text" v-model="query">
            <button @click="submit">搜索</button>
        </div>
        <van-tabs v-model="active" @click="getTitle" v-show="query">
            <van-tab v-for="(item,index) in artist" :key="index" :title="item.artistname" class="search-result">
                <ul class="song-list">
                    <li v-for="(item,index) in album" :key="index">{{item.albumname}}</li>
                </ul>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>

    import {getSearchQuery} from "../../../api/music-api";

    export default {
        name: "SearchItem",
        data() {
            return {
                query: '',
                artist: [],
                album: [],
                active: 2,

            }
        },
        methods: {
            submit() {
                getSearchQuery(this.query).then(res => {
                    console.log(res);
                    this.artist = res.data.artist;
                });
                // console.log(this.);

            },
            getTitle(title, name) {
                getSearchQuery(name).then(res => {
                    console.log(res)
                    this.album = res.data.album;
                })
            }
        },
        mounted() {

        }
    }
</script>

<style scoped lang="less">
    .search-item-container {
        height: 100vh;
        /*background-color: #fff;*/

        .search-input {
            padding: 20px;
            text-align: center;
            display: flex;

            input {
                padding: 3px 5px;
                border: none;
                border-radius: 5px;
                width: 70%;
            }

            button {
                width: 30%;
                height: 30px;
                margin-left: 5%;
            }
        }

        .song-list {
            padding: 10px;

            li {
                border-bottom: 1px solid #cccccc;
                padding: 10px;
                color: #737373;
            }
        }

        /*style="*/
    }
</style>