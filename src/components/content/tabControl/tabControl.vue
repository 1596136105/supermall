<template>
  <div class="tabcontrol">
     <!--  生成三个tabcont div -->
      <div v-for="(item,key) in titles" :key="key" :class="{active: key ===currentIndex}" class="tabcontrolitem" @click="itemclick(key)">
          <span>{{item}}</span>
      </div> 
  </div>
</template>

<script>
export default {
    props: {
        titles: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data(){
        return {
            currentIndex:0
        }
    },
    methods: {
        itemclick(key){
        this.currentIndex = key
        }
    }
}
</script>

<style>
    .tabcontrol {
        display: flex;
        position: relative;
        top: 70px;
        text-align: center; 
        height: 30px;
        margin-bottom: 10px;
        background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
    }
    .tabcontrolitem {
        flex: 1;
        font-size: 15px;
    }
    .tabcontrolitem span {
        padding: 3px ;
    }
    .active {
        color: lightcoral;
    }
    .active span {
        border-bottom: 3px solid lightcoral ;
    }
</style>