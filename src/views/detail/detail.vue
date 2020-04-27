<template>
  <div id="detail">
        <detail-nav-bar @titlesClick = "titlesClick" ref="navbar"></detail-nav-bar>
        <scroll class="content" ref="scroll" :probe-type="3" @scroll="detailScroll">
        <detail-swiper :top-image = "topImages"></detail-swiper>
        <detail-base-info :goods = "goods"></detail-base-info>
        <detail-shop-info :shop = "shop"></detail-shop-info>
        <detail-goods-info :detail-info = "detailInfo" @imageload = "imageload"></detail-goods-info>
        <detail-comment-info ref="comment" :comment-info = "commentInfo"></detail-comment-info>
        <goods-list ref="recommends" :goods = recommends></goods-list>
        </scroll>
        <back-top @click.native = "backtopclick" v-show="isshow"></back-top>
        <detail-bottom-bar @addCart = "addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from './childcomps/DetailNavBar'
import DetailSwiper from './childcomps/DetailSwiper'
import DetailBaseInfo from './childcomps/DetailBaseInfo'
import DetailShopInfo from './childcomps/DetailShopInfo'
import DetailGoodsInfo from './childcomps/DetailGoodsInfo'
import DetailCommentInfo from './childcomps/DetailCommentInfo'
import DetailBottomBar from './childcomps/DetailBottomBar'
import BackTop from '../../components/content/backtop/BackTop'


import {getDetail,Goods,Shop,getRecommend} from "../../network/detail"

import Scroll from '../../components/common/scroll/Scroll'
import GoodsList from '../../components/content/goods/GoodsList'

export default {
    name: 'detail',
    data() {
        return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {},
            detailInfo: {},    //默认为空，所以第一次传值为空,才需要判断
            commentInfo: {},
            recommends: [], 
            themeTopYs: [],
            itemImageLisetener: null,
            currentIndex: 0,
            isshow: false,
        }
    },
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        DetailGoodsInfo,
        DetailCommentInfo,
        GoodsList,
        DetailBottomBar,
        BackTop,
       
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
            //5.取出评论信息
            if(data.rate.cRate !== 0)
            this.commentInfo = data.rate.list[0]
            
           
        })
        
        //3.请求推荐数据
        getRecommend().then(res => {
            console.log(res);
            
            this.recommends = res.data.list
            
        })

    },
    mounted() {
        this.itemImageLisetener = () => {
            this.$refs.scroll.scroll.refresh()
        }
        this.$bus.$on('itemImageLoad',this.itemImageLisetener)
       
    },
   /*  生命周期函数，更新，会很频繁调用,可以使用他来确保能获取到数据*/
    // updated() {
    //     this.themeTopYs = []

    //     this.themeTopYs.push(0)  /* 商品高度为零 */
    //     this.themeTopYs.push(0)  /* 没有做参数 */
    //     this.themeTopYs.push(this.$refs.comment.$el.offsetTop) /* 评论离顶部的高度 */
    //     this.themeTopYs.push(this.$refs.recommends.$el.offsetTop) /* 推荐商品离顶部的高度 */
    //     console.log(this.themeTopYs);
        
    // },
    deactivated() {
        this.$bus.$off('itemImageLoad',this.itemImageLisetener)
    },
    methods: {
      imageload() {
          this.$refs.scroll.scroll.refresh()
           // $nextTick函数，传入一个函数作为回调函数，在更新后将会进行回调
           
            this.$nextTick(() => {
                this.themeTopYs = []

                this.themeTopYs.push(0)  /* 商品高度为零 */
                this.themeTopYs.push(0)  /* 没有做参数 */
                this.themeTopYs.push(this.$refs.comment.$el.offsetTop) /* 评论离顶部的高度 */
                this.themeTopYs.push(this.$refs.recommends.$el.offsetTop) /* 推荐商品离顶部的高度 */
                console.log(this.themeTopYs);
                
            })
      },

        titlesClick(key) {
            this.$refs.scroll.scrollTo(0,-this.themeTopYs[key])
        },
        

        detailScroll(position) {
            //1.获取Y值
            const positionY = -position.y
            this.isshow = positionY > 500

            //2.positionY和主题中的值进行对比
            let length = this. themeTopYs.length
            for(let i = 0;i < length; i++) {
                
                // parseInt(i)   //将i转为int类型，否则i为字符类型 i+1将等于11
                // if(positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i+1]){
                // 这样判断会出现越界情况
                //     console.log(i);
                // }
                if(this.currentIndex !== i &&((i < length-1 && positionY >= this.themeTopYs[i] && positionY <
                this.themeTopYs[i+1] )|| (i === length - 1 && positionY >= this.themeTopYs[i]))){
                    
                   this.currentIndex = i
                   console.log(this.currentIndex);

                   this.$refs.navbar.currentIndex = this.currentIndex
                   
                }
            }
        },

        backtopclick() {
            this.$refs.scroll.scrollTo(0,0)
        },
        addToCart() {
            //1.获取购物车需要展示的信息
            const product = {}
            product.image = this.topImages[0]
            product.title = this.goods.title
            product.desc = this.goods.desc
            product.price = this.goods.newPrice
            product.iid = this.iid

            //2.将商品添加到购物车里
            //这里用的是修改mutation，建议判断也在action中执行
            // this.$store.commit('addCart',product)
            this.$store.dispatch('addCart',product)
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