<template>
    <div>
        <BillItem v-for="item in list" :type="item" :key="item"></BillItem>
    </div>
</template>

<script>
    import BillItem from "./components/BillItem";

    export default {
        name: "Bill",
        data(){
          return {
              list:[1,2,11,21,22,23,24,25]
          }
        },
        components:{
            BillItem
        }
    }
</script>

<style scoped lang="less">

</style>