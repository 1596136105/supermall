<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :stop-propagation="false">
    <slot></slot>
  </van-swipe>
</template>

<script>
export default {

}
</script>

<style >
.my-swipe {
  color: #fff;
  text-align: center;
}
</style>