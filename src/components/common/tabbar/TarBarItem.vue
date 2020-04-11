<template>
  <div class="tab-bar-item" @click="itemClick">  <!-- 组件内监听点击  -->
   <!--  使用div包裹，防止slot内属性被替换 -->
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <!-- <div :class="{active: !isActive}"><slot name="item-text"></slot></div> -->
       <div :style="activeStyle"><slot name="item-text"></slot></div>
      
  </div>
</template>

<script>
export default {
    props:{             /* 定义props，使用父传子组件通信,值在APP中传入 */
      path: String,
      activeColor: {
        type: String,
        default: '#3f64a0'

      }
    },
   computed: {   /* 利用isActive保存活跃状态布尔值以使用v-if，动态绑定class等判断 */
     isActive() {
       return this.$route.path.indexOf(this.path) !==-1  /* 比较活跃路径与点击时传入路径，相同为true */
       // /home -> item(/home) =true
       // /home -> item(/category) =false
       // /home -> item(/cart) =false
       // /home -> item(/profile) =false
       },
       activeStyle(){   //动态绑定style
        return this.isActive? {color: this.activeColor} : {}
       }
      
     
   },
    
    methods:{
     /*  定义点击后执行方法 */
      itemClick(){
        this.$router.push(this.path)    /* 使用push方法跳转路径 */
        
      }
    }
    
}
</script>


<style scoped>

  
  .tab-bar-item {    /*  横向居中均等分 */
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 15px;

  }

  .tab-bar-item img {
      width: 24px;
      height: 24px;
      margin-top: 3px;
      vertical-align: middle;
      margin-bottom: 1px;
  }
  .active {
    color: #3f64a0
  }

</style>