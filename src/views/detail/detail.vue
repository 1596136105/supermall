<template>
  <div id="detail">
      <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script>
import DetailNavBar from './childcomps/DetailNavBar'
export default {
    data() {
        return {
            iid: null
        }
    },
    created() {
        this.iid = this.$route.params.id
    },
    components: {
        DetailNavBar,
    }
}
</script>

<style>

</style>