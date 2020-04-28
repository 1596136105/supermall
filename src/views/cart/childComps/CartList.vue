<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,key) in cartList" :product = "item" :key="key"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from '../../../components/common/scroll/Scroll'
import CartListItem from './CartListItem'

import {mapGetters} from 'vuex'

export default {
  components:{
    Scroll,
    CartListItem,
  },
  computed: {
    ...mapGetters([
      'cartList'
    ])
  },
  activated() {
    this.$refs.scroll.scroll.refresh()
  }
}
</script>

<style scoped>
  .cart-list {
    position: absolute;
    top: 49px;
    bottom: 49px;
    left: 0;
    right: 0;

  }
  .content {
    height: 100%;
    overflow: hidden;
  }
</style>