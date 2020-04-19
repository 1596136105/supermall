<template>
    <swiper-bar class="swiperbar">
        <swiper-item v-for="(item,key) in banners" :key="key" class="swiperitem">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="swipeImageLoad">
            </a>
        </swiper-item>
    </swiper-bar>
</template>

<script>
import SwiperBar from '../../../components/common/swiper/SwiperBar'
import SwiperItem from '../../../components/common/swiper/SwiperItem'

export default {
    components: {
        SwiperBar,
        SwiperItem
    },
    data() {
        return {
            isLoad: false  //记录发送事件的状态
        }
    },
    props: {
        banners: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        swipeImageLoad() {
            //该事件仅需发送一次，使用if判断状态
            if(!this.isLoad){
            this.$emit('swipeImageLoad')
            this.isLoad = true
            }
        }
    }
}
</script>

<style >

</style>