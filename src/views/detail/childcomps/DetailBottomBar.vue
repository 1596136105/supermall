<template>
  <div class="bottom-bar">
      <div class="shop long"><img src="../../../assets/img/detail/店铺.svg" alt="">
      <div class="title">店铺</div>
      </div>
      <div class="customer-service long"><img src="../../../assets/img/detail/客服.svg" alt="">
      <div class="title">客服</div>
      </div>
      <div class="collect long"><img src="../../../assets/img/detail/收藏.svg" alt="">
      <div class="title">收藏</div>
      </div>
      
      <div class="cart button">加入购物车</div>
      <div class="buy button">购买</div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bottom-bar {
     height: 49px;
     background-color: rgb(252, 252, 252);
     position: fixed;
     bottom: 0;
     left: 0;
     right: 0;
    display: flex;
 }
 img {
     width: 30%;
     margin-left: 4px;
     margin-top: 2px;
 }
.long {
    width:20vw;
}
.shop {
    margin-left: 8px;
}
.title {
    margin-bottom: px;
}
.button {
    width: 12vh;
    text-align: center;
    border-top: deeppink;
    line-height: 49px;
}
.cart {
    background-color: rgb(204, 68, 140);
}
.buy {
    background-color: dodgerblue;
}




</style>