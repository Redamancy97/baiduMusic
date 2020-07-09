<template>
    <div>

        <router-link v-for="item in list" :key="item" :to="'/index/billContent/'+item">
            <BillItem :type="item"></BillItem>
        </router-link>
    </div>
</template>

<script>
    import BillItem from "./components/BillItem";

    export default {
        name: "Bill",
        data() {
            return {
                list: [1, 2, 11, 21, 22, 23, 24, 25]
            }
        },
        components: {
            BillItem
        }
    }
</script>

<style scoped lang="less">

</style>