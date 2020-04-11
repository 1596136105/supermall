<template>
    <div id = "tab-bar">
       <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style>
 #tab-bar {     /* 横向显示 */
    display: flex;
    background-color: rgba(236, 236, 236, 0.411);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.1)
  }
 
</style>