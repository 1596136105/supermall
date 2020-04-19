<template>
  <div class="home">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
        <!-- 在scroll之外创建tabcontrol，使得其脱离scroll滚动，在滚动到一定位置时显示
        实现吸顶效果 -->
         <tab-control :titles="['流行','新款','精选']" @tabClick = "tabClick" ref="tabControl1" class="tab-control" v-show=" isTabFxied"></tab-control>
    <scroll class="home-content" 
    ref="scroll" 
    :probe-type="3"  
    @scroll="contentScroll"
    :pull-up-load = "true"
    @pullingUp = "loadmore">  
        <home-swiper :banners = "banners" @swipeImageLoad = "swipeImageLoad"></home-swiper>
        <home-recommend-view :recommends = "recommends"></home-recommend-view>
        <feature-view></feature-view>
       <!--  此处的tabcontrol会跟随滚动而消失 -->
        <tab-control :titles="['流行','新款','精选']" @tabClick = "tabClick" ref="tabControl2" ></tab-control>
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
            tabOffsetTop: 0,
            isTabFxied: false
        }   
    },
    created() {
        //1.请求多个数据
        this.getHomeMultidata()

        //2.请求商品数据
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')

        
    },
    mounted() {
        //调用函数加括号是吧函数的返回值传入，不加是直接传入函数本身
        //const refresh = this.debounce(this.$refs.scroll.scroll.refresh,500) 
        //3.监听item中图片加载完成
        //每一张图片加载完成就调用一次刷新
        //由于调用频率过大，需要进行防抖处理，减轻服务器压力
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
            //使两个tabcontrol是相同的标签
            this.$refs.tabControl1.currentIndex = key
            this.$refs.tabControl2.currentIndex = key
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
                //完成一次上拉事件
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
           // 1.判断backtop是否显示
            this.isshow = (-position.y) > 1000
           //2.决定tabcontrol是否吸顶(position: fixed)
            this.isTabFxied = (-position.y) > this.tabOffsetTop
        },
        loadmore() {
            this.getHomeGoods(this.currentType)
        },
        //调用防抖函数会报错，找不到wrapper，原因未知
        // 防抖函数的封装
        // 不会再看一次vue 174级
        // debounce(func,delay) {
        //     let timer = null
        //     return function(...args) {
        //         if(timer) clearTimeout(timer)

        //         timer = setTimeout(() => {
        //             func.apply(this,args)
        //         }, delay);
        //     }
        // }
        
        // （轮播图加载最慢）监听轮播图图片加载，获取offsettop，
        swipeImageLoad() {
            this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
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
    .home-content {
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
        overflow: hidden;
       
    }
    .tab-control {
        position: relative;
        z-index: 9;
    }
    
</style>