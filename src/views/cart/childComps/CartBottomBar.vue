<template>
  <div class="bottom-bar">
     <div class="check-area">
          <check-button class="checkbutton"></check-button>
          <span>全选</span>
     </div>
  </div>
</template>

<script>
import CheckButton from '../../../components/content/checkButton/CheckButton'

export default {
    components: {
        CheckButton,
    }
}
</script>

<style scoped>
    .bottom-bar {
        height: 40px;
        background-color: cornflowerblue;
        position: absolute;
        bottom: 49px;
        left: 0;
        right: 0;
    }
   .check-area {
       display:flex;
        margin-top: 10px;
   }
   .checkbutton  {
       height: 14px;
       width: 14px;
        line-height: 14px; 
        margin-right: 2px;
   }
</style>