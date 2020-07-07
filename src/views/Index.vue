<template>
    <div class="index-container">
        <BillList class="bill-list" type="2" title="今日榜单" :size="6"/>
        <BillList class="bill-list" type="1" title="新歌速递" :size="3"/>

        <Swiper/>

        <MusicBill class="bill-list"/>
        <!--            <MusicList></MusicList>-->
        <BillList class="bill-list" type="24" title="热门歌单" :size="6"/>
    </div>
</template>

<script>
    import BillList from "../components/BillList";
    import Swiper from "../components/Swiper";
    import MusicBill from "../components/MusicBill";
    // import MusicList from "../components/MusicList";
    export default {
        name: "Index",
        components: {
            BillList,
            Swiper,
            MusicBill,
            // MusicList

        }
    }
</script>

<style scoped lang="less">
    .index-container {
        background-color: #f5f5f5;

        .bill-list {
            margin-bottom: 10px;
        }
    }
</style>