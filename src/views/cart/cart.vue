<template>
  <div class="cart">
      <nav-bar class="nav-bar">
        <div slot="center">购物车({{cartLength}})</div>
      </nav-bar>
      <cart-list></cart-list>
      <cart-botton-bar></cart-botton-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottonBar from './childComps/CartBottomBar'

import {mapGetters} from 'vuex'


export default {
  components: {
    NavBar,
    CartList,
    CartBottonBar,
  },
  computed: {
   ...mapGetters([
      'cartLength'
    ])
  }
}
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
  
  .nav-bar {
        background-color: #ff8198;
        font-size: 18px;
        line-height: 49px;
        color:rgb(248, 246, 239);
        font-weight:inherit;
    }
</style>