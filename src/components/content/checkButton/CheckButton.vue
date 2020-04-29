<template>
  <div class="check-button" :class="{check: isChecked}">
      <img src="../../../assets/img/detail/选中 (1).svg" alt="">
  </div>
</template>

<script>
export default {
    props: {
        isChecked: {
            type: Boolean,
            default: true

        }
    },
}
</script>

<style scoped>
 .check-button {
     border-radius: 50%;
     border: 2px solid #aaa;
 }
 .check {
     background-color: rgb(233, 114, 114);
     border-color: rgb(233, 114, 114);
 }
 .check-button img {
     width: 14px;
     
 }
</style>