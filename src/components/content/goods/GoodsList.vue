<template>
  <div class="goodslist">
     <goods-list-item v-for="(item,key) in goods" :key="key" :goodsItem="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        GoodsListItem,
    }
}
</script>

<style scoped>
    .goodslist {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 2px;
    }
</style>