<template>
  <div id="detail">
        <detail-nav-bar></detail-nav-bar>
        <scroll class="content" ref="scroll">
        <detail-swiper :top-image = "topImages"></detail-swiper>
        <detail-base-info :goods = "goods"></detail-base-info>
        <detail-shop-info :shop = "shop"></detail-shop-info>
        <detail-goods-info :detail-info = "detailInfo" @imageload = "imageload"></detail-goods-info>
        </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childcomps/DetailNavBar'
import DetailSwiper from './childcomps/DetailSwiper'
import DetailBaseInfo from './childcomps/DetailBaseInfo'
import DetailShopInfo from './childcomps/DetailShopInfo'
import DetailGoodsInfo from './childcomps/DetailGoodsInfo'

import {getDetail,Goods,Shop} from "../../network/detail"

import Scroll from '../../components/common/scroll/Scroll'

export default {
    name: 'detail',
    data() {
        return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {},
            detailInfo: {}    //默认为空，所以第一次传值为空,才需要判断
        }
    },
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        DetailGoodsInfo,
    },
    created() {
        //1.保存传入的id
        this.iid = this.$route.params.id

        //2.根据id请求详情数据
        getDetail(this.iid).then(res =>{
            console.log(res);
            const data = res.result
            //1.获取顶部的图片轮播数据  
            this.topImages = res.result.itemInfo.topImages
            //此处使用构造好的函数，导入参数
            //2.获取商品信息
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
            //3.创建店铺信息的对象
            this.shop = new Shop(data.shopInfo)
            //4.保存商品的详情数据
            this.detailInfo = data.detailInfo
        })
    },
    methods: {
      imageload() {
          this.$refs.scroll.scroll.refresh()
      }
    }
  
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
    position:absolute;
    top: 44px;
    bottom: 44px;
    left: 0;
    right: 0;
    }

</style>