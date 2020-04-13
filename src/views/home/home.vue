<template>
  <div class="home">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
       <home-swiper :banners = "banners"></home-swiper>
       <home-recommend-view :recommends = "recommends"></home-recommend-view>
       <feature-view></feature-view>
       <tab-control class="tabcontrol" :titles="['流行','新款','精选']"></tab-control>
       <goods-list :goods = "goods.pop.list"></goods-list>
  </div>
</template>

<script>
import FeatureView from './childComps/FeatureView'
import HomeRecommendView from './childComps/HomeRecommendView'
import HomeSwiper from './childComps/HomeSwiper'


import NavBar from '../../components/common/navbar/NavBar'
import tabControl from '../../components/content/tabControl/tabControl'
import GoodsList from '../../components/content/goods/GoodsList'

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
    methods: {
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
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page += 1
            })
        }

       
    }
}
</script>

<style>
    .home-nav {
        background-color: #ff8198;
        color: #ffffff;
    }
    .tabcontrol {
        position: sticky;
        top: 44px;
        z-index: 1;
    }
</style>