<template>
    <swiper-bar class="swiperbar">
        <swiper-item v-for="(item,key) in banners" :key="key" class="swiperitem">
            <a :href="item.link">
                <img :src="item.image" alt="">
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
    props: {
        banners: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style >

</style>