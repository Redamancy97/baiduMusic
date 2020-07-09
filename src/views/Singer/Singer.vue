<template>
    <div class="singer-container">


        <router-link v-for="item in list" :key="item" :tinguid="item" :to="'/index/singerItem/'+item">
            <SingerList :singerId="item"></SingerList>
        </router-link>
    </div>

</template>

<script>
    import SingerList from "../../components/SingerList";

    export default {
        name: "Singer",
        data() {
            return {
                list: [2517, 7994, 1091, 45561, 2507, 245815, 1077, 1204, 1117, 82366]
            }
        },
        components: {SingerList}
    }
</script>

<style scoped lang="less">

</style>