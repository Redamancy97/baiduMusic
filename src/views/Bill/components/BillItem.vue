<template>
    <div class="bill-item-container">
        <!--封面图-->
        <div class="cover">
            <img :src="billboard.pic_s192"
                 alt="">
        </div>
        <!--前三首歌曲-->
        <ul class="bill-list">
            <li v-for="(item,index) in list" :key="index"><span>{{index+1}}</span> {{item.title}}</li>
        </ul>
    </div>
</template>

<script>
    import {getBillList} from "../../../api/music-api";

    export default {
        name: "BillItem",
        data() {
            return {
                list: [],
                billboard: {}
            }
        },
        props: {
            type: {
                type: [String, Number]
            }
        },
        created() {
            getBillList(this.type, 3).then(res => {
                console.log(res.data);
                this.list = res.data.song_list;
                this.billboard = res.data.billboard;
            })
        }
    }
</script>

<style scoped lang="less">
    .bill-item-container {
        padding: 5px;
        display: flex;
        font-size: 16px;

        .cover {
            flex-shrink: 0;
            width: 150px;
            height: 150px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .bill-list {
            padding: 3px 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;


            span {
                color: tomato;
            }

            flex-grow: 1;
        }
    }
</style>