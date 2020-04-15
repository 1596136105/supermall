<template>
    <div class="recommend">
        <div v-for="(item,key) in recommends" :key="key" class="recommenditem"> 
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        recommends: {
            type:Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
  .recommend {
      display: flex;
      text-align: center;
      padding: 5px 0px 15px;
      border-bottom: 10px solid #ece8e8;
  }
  .recommenditem {
      flex: 1;
  }
  .recommenditem img {
      margin-bottom: 5px;
        width: 85%;
  }
  .recommenditem a {
      color: black;
  }
</style>