<template>
  <div class="home">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
       <home-swiper :banners = "banners"></home-swiper>
       <home-recommend-view :recommends = "recommends"></home-recommend-view>
       <feature-view></feature-view>
       <tab-control class="tabcontrol" :titles="['流行','新款','精选']"></tab-control>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       <div>666</div>
       
  </div>
</template>

<script>
import FeatureView from './childComps/FeatureView'
import HomeRecommendView from './childComps/HomeRecommendView'
import HomeSwiper from './childComps/HomeSwiper'


import NavBar from '../../components/common/navbar/NavBar'
import tabControl from '../../components/content/tabControl/tabControl'

import {getHomeMultidata} from "../../network/home"   //导入home.js，面向home.js进行网络请求

export default {
    name: 'home',
    components: {
        NavBar,
       HomeSwiper,
       HomeRecommendView,
       FeatureView,
       tabControl,
    },
    data(){
        return {
            banners: [],          //定义数组变量保存数据
            recommends: []
        }
    },
    created() {
        //1.请求多个数据
        getHomeMultidata().then(res => {
            console.log(res);
            this.banners = res.data.banner.list
            this.recommends = res.data.recommend.list
            
        })
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
    }
</style>