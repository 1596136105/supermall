<template>
<div class="goodsitem" @click="itemClick">
   <!--  load事件：监听加载事件 -->
  <img :src="showImage" alt="" @load="imageLoad">
  <div class="goodsinfo">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
  </div>
</div>
</template>

<script>
export default {
    props: {
        goodsItem:{
            type: Object,
            default(){
                return {}
            }
        }
    
    },
    computed: {
        showImage() {
            return this.goodsItem.image || this.goodsItem.show.img
        }
    },
    methods: {
        imageLoad() { 
            //判断当前活跃路由，传出不同事件

            this.$bus.$emit('itemImageLoad')
            //使用$emit将事件发送到$bus事件总线,home组件即可跳过goodslist组件直接监听该事件
        },
        itemClick() {
         this.$router.push('/detail/' + this.goodsItem.iid)
        }
    }
}
</script>
    
<style scoped>
    .goodsitem {
        padding-bottom: 20px;
        position: relative;
        width: 48%;
    }
    .goodsinfo {
        font-size: 12px;
        overflow: hidden;
        text-align: center;

    }
    .goodsinfo p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }
    .goodsinfo .price {
        color: #ff5777;
        margin-right: 20px;
    }
    .goodsitem img {
        width: 100%;
        border-radius: 5px;


    }
    .goodsinfo .collect {
        position: relative;
    }

    .goodsinfo .collect::before {
        content: '';
        position: absolute;
        left: -15px;
        top: -1px;
        width: 14px;
        height: 14px;
        background: url('../../../assets/img/common/ico_tuijianguanli (1).svg') 0 0/14px 14px;
    }

</style>