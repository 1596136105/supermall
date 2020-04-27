<template>
<!-- ref绑定子组件 -->
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    data() {
        return {
            scroll: null
        }
    },
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
       
    },
    mounted() {
        //.创建BScroll对象
        this.scroll = new BScroll('.wrapper',{
            click: true,
            tap: true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad
        })
        //2.监听滚动位置
        this.scroll.on('scroll', (position) => {
            this.$emit('scroll',position)
        })
        //3.监听上拉事件
        this.scroll.on('pullingUp', () => {
            this.$emit('pullingUp') 
        })
        
    },
    methods: {
        //定义一个scrollTo方法，三个参数，time为默认值300
        scrollTo(x, y, time = 300) {
            this.scroll.scrollTo(x,y,time)
        },
        finishPullUp() {
            this.scroll.finishPullUp()
        },
        refresh() {
            this.scroll.refresh()
        }
    }

}
</script>

<style>

</style>