<template>
  <div class="home">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="home-content" 
    ref="scroll" 
    :probe-type="3"  
    @scroll="contentScroll"
    :pull-up-load = "true"
    @pullingUp = "loadmore">  
        <home-swiper :banners = "banners"></home-swiper>
        <home-recommend-view :recommends = "recommends"></home-recommend-view>
        <feature-view></feature-view>
        <tab-control class="tabcontrol" :titles="['流行','新款','精选']" @tabClick = "tabClick"></tab-control>
        <goods-list :goods = "goods[currentType].list"></goods-list>
      </scroll>
        <!-- 组件想要监听点击要用native修饰符 -->
      <back-top class="backtop" @click.native="backClick" v-show="isshow"></back-top>
  </div>
</template>

<script>
import FeatureView from './childComps/FeatureView'
import HomeRecommendView from './childComps/HomeRecommendView'
import HomeSwiper from './childComps/HomeSwiper'


import NavBar from '../../components/common/navbar/NavBar'
import tabControl from '../../components/content/tabControl/tabControl'
import GoodsList from '../../components/content/goods/GoodsList'
import Scroll from '../../components/common/scroll/Scroll'
import BackTop from '../../components/content/backtop/BackTop'

import {getHomeMultidata,getHomeGoods} from "../../network/home"   //导入home.js，面向home.js进行网络请求

export default {

    name: 'home',
    components: {
        NavBar,
       HomeSwiper,
       HomeRecommendView,
       FeatureView,
       tabControl,
       GoodsList,
       Scroll,
       BackTop,
    },
    data(){
        return {
            banners: [],          //定义数组变量保存数据
            recommends: [],
            goods: {
                'pop' : {page:0, list: []},
                'new': {page:0, list: []},
                'sell': {page:0, list: []},
            },
            currentType: 'pop',
            isshow: false,
        }   
    },
    created() {
        //1.请求多个数据
        this.getHomeMultidata()

        //2.请求商品数据
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')

        //3.监听item中图片加载完成
        //每一张图片加载完成就调用一次刷新
        this.$bus.$on('itemImageLoad',() => {
            this.$refs.scroll.scroll.refresh()
        })
    },
    methods: {
        /* 事件监听方法 */
        tabClick(key) {
            console.log(key);
            switch (key) {
                case 0:
                    this.currentType = 'pop'
                    break;
                case 1:
                    this.currentType = 'new'
                    break;
                case 2:
                    this.currentType = 'sell'
                    break;
            }
        },

        /* 网络请求相关方法 */
        getHomeMultidata() {
            getHomeMultidata().then(res => {
            console.log(res);
            this.banners = res.data.banner.list
            this.recommends = res.data.recommend.list
            
        })
        },
        getHomeGoods(type) {
            const page =this.goods[type].page + 1
            getHomeGoods(type,page).then(res => {
                this.goods[type].list.push(...res.data.list) //ES6语法，一个一个放入数组
                this.goods[type].page += 1
                this.$refs.scroll.finishPullUp()
            })
        },
        backClick() {
            //scroll组建中定义了scrollTo方法可以直接调用
            this.$refs.scroll.scrollTo(0,0)
            //scroll未定义
            //this.$refs.scroll.scroll.scrollTo(0,0,500)
        },
        //监听滑动事件
        contentScroll(position) {
            this.isshow = (-position.y) > 1000
        },
        loadmore() {
            this.getHomeGoods(this.currentType)
        }
    }
}
</script >

<style scoped>
    .home {
        height: 100vh;
        position: relative;
    }
    .home-nav {
        background-color: #ff8198;
        color: #ffffff;
    }
    .tabcontrol {

        top: 44px;
        z-index: 1;
    }
    .home-content {
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
        overflow: hidden;
       
    }
 
</style>