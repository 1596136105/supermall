<template>
  <div id="detail">
        <detail-nav-bar></detail-nav-bar>
        <scroll class="content">
        <detail-swiper :top-image = "topImages"></detail-swiper>
        <detail-base-info :goods = "goods"></detail-base-info>
        <detail-shop-info :shop = "shop"></detail-shop-info>
        </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childcomps/DetailNavBar'
import DetailSwiper from './childcomps/DetailSwiper'
import DetailBaseInfo from './childcomps/DetailBaseInfo'
import DetailShopInfo from './childcomps/DetailShopInfo'

import {getDetail,Goods,Shop} from "../../network/detail"

import Scroll from '../../components/common/scroll/Scroll'

export default {
    name: 'detail',
    data() {
        return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {}
        }
    },
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll
    },
    created() {
        //1.保存传入的id
        this.iid = this.$route.params.id

        //2.根据id请求详情数据
        getDetail(this.iid).then(res =>{
            console.log(res);
            const data = res.result
            this.topImages = res.result.itemInfo.topImages
            //此处使用构造好的函数，导入参数
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
            this.shop = new Shop(data.shopInfo)
        })
    },
  
}
</script>

<style scoped>
    #detail {
        position: relative;
        z-index: 10;
        background-color: rgb(255, 255, 255);
        height: 100vh;
    }
    .content {
       height: 300px;
    }

</style>