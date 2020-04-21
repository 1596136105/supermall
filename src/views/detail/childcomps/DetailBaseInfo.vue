<template>
  <!-- 使用Object.keys（obj）.length获取对象长度,在用v-if判断 -->
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
      <div class="info-title">{{goods.title}}</div>
      <div class="info-price">
          <span class="n-price">{{goods.newPrice}}</span>
          <span class="o-price">{{goods.oldPrice}}</span>
          <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
      </div>
      <div class="info-other">
          <span class="sale">{{goods.columns[0]}}</span>
          <span class="collect">{{goods.columns[1]}}</span>
            <!-- 此处取出最后一个对象的name -->
          <span class="services">{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <div class="info-service">
         <!--  v-for 除了数组也可以遍历数字从1开始，所以后面index要减一，同时遍历长度也要减一因为前面取出了了最后一个name-->
          <span class="info-service-item" v-for="index in goods.services.length-1"
           :key="index">
                <img :src="goods.services[index-1].icon" alt="">
              <span>{{goods.services[index-1].name}}</span>
          </span>

      </div>
  </div>
</template>

<script>
export default {
    props: {
        goods: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style scoped>
    .info-title {
        font-size: 15px;
        font-weight:600;
        margin-bottom: 15px;
    }
    .info-price {
        margin-bottom: 20px;
        margin-left: 5px;
    }
    .n-price {
        font-size: 21px;
        color: rgb(255, 130, 134);
        margin-right: 5px;
    }
    .o-price {
        color: rgb(156, 152, 157);
        font-size: 6px;
        text-decoration: line-through;
        margin-right: 5px;
    }
    .discount {
        padding: 2px ;
        background-color: rgb(255, 106, 122);
        font-size: 8px;
        color: seashell;
        border-radius: 15px;
    }
    .info-other {
       color: rgb(172, 169, 169);
       font-size: 12px;
       text-align: center;
       border-bottom: 1px solid #ece8e8 ;
       margin-bottom: 18px;
       padding-bottom: 7px;
    }
    .sale {
        float: left;
        margin-left: 6px;
    }
    .services {
        float: right;
        margin-right: 6px;
    }
    .info-service {
        display: flex;
        border-bottom: 6px solid #ece8e8 ;
        padding-bottom: 18px;

    }
    .info-service span {
        text-align: center;
    }
    .info-service img {
        width: 10%;  
    }

</style>