<template>
  <tab-bar>  <!--  path传值字符串不用加： -->
    <tab-bar-item path="/home" activeColor="#535e98">  <!-- path为父传子数据 -->
      <img src= "../../../assets/img/home/主页.svg"  alt="" slot="item-icon">
      <img src="../../../assets/img/home//主页active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img src="../../../assets/img/category/中心.svg"  alt="" slot="item-icon">
      <img src="../../../assets/img/category/中心 active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart"> 
      <img src="../../../assets/img/cart/购物车.svg"  alt="" slot="item-icon">
      <img src="../../../assets/img/cart/购物车active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img src="../../../assets/img/profile/个人.svg"  alt="" slot="item-icon">
      <img src="../../../assets/img/profile/个人active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '../../common/tabbar/TabBar'
import TabBarItem from '../../common/tabbar/TarBarItem'
export default {
 components:{
     TabBar,
     TabBarItem
 }
}
</script>

<style scoped>

</style>