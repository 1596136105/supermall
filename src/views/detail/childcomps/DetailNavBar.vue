<template>
  <div class="detailnavbar">
      <nav-bar>
          <div slot="left" class="imgitem" @click="backClick"><img src="../../../assets/img/detail/向左.svg" alt=""></div>
          <div slot="center" class="title">
              <div v-for="(item,key) in titles" :key="key" class="title-item" :class="{active: key === currentIndex}" @click="titlesClick(key)">
                  {{item}}
              </div>
          </div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar'
export default {
    components: {
        NavBar,
    },
    data() {
        return {
            titles:['商品','参数','评论','推荐'],
            currentIndex:0
        }  
    },
    methods: {
        titlesClick(key) {
            this.currentIndex = key
        },
        backClick() {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
    .title {
        display: flex;
        line-height: 44px;
    }
    .title-item {
        flex: 1;
        font-size: 15px;
    }
    .active {
        color: #ff5777;
    }
    img {
        margin-top: 8px;
        height: 30px;
        margin-left: 2px;
    }
    .imgitem {
        height: 44px;
    }
</style>