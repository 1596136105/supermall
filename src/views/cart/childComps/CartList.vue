<template>
  <div class="cart-list">
      
  </div>
</template>

<script>
import Scroll from '../../../components/common/scroll/Scroll'

import {mapGetters} from 'vuex'

export default {
  components:{
    Scroll,
  },
  computed: {
    ...mapGetters([
      'cartList'
    ])
  }
}
</script>

<style scoped>

</style>