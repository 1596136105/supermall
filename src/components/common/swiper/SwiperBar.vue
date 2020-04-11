<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <slot></slot>
  </van-swipe>
</template>

<script>
export default {

}
</script>

<style>
.my-swipe {
  color: #fff;
  text-align: center;
  position: relative;
  top: 43px;
 }
</style>