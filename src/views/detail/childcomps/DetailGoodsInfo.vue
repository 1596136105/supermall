<template>
<div v-if="Object.keys(detailInfo).length !== 0">
    <div class="detail-info">
        <div class="introduce">{{detailInfo.desc}}</div>
        <div class="begin-photo">{{detailInfo.detailImage[0].key}}</div>
        <div class="edit-photo">
            <img v-for="(item,key) in detailInfo.detailImage[0].list" :key="key" :src="item" alt="" @load="imgload">
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        detailInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            counter: 0,
            imageslength: 0 
        }
    },
    methods: {
        imgload() {
            //判断，所有的图片都加载完了，才进行一次回调
            if(++this.counter === this.imageslength)
            this.$emit('imageload')
        }
    },
    watch: {
        detailInfo() {
            //获取图片的个数
            this.imageslength = this.detailInfo.detailImage[0].list.length
        }
    }
}
</script>

<style>
 .introduce {
     margin-bottom: 25px;
 }
</style>