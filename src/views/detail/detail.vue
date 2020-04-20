<template>
  <div id="detail">
        <detail-nav-bar></detail-nav-bar>
        <detail-swiper :top-images = "topImages"></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from './childcomps/DetailNavBar'
import DetailSwiper from './childcomps/DetailSwiper'

import {getDetail} from "../../network/detail"

export default {
    name: 'detail',
    data() {
        return {
            iid: null,
            topImages: []
        }
    },
    components: {
        DetailNavBar,
        DetailSwiper,
    },
    created() {
        //1.保存传入的id
        this.iid = this.$route.params.id

        //2.根据id请求详情数据
        getDetail(this.iid).then(res =>{
            console.log(res);
            
            this.topImages = res.result.itemInfo.topImages
            
        })
    },
  
}
</script>

<style>

</style>