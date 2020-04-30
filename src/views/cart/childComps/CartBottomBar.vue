<template>
  <div class="bottom-bar">
     <div class="check-area">
          <check-button class="checkbutton"  :is-checked="isSelectAll" 
          @click.native="checkClick"></check-button>
          <span>全选</span>
     </div>
     
        <div class="totalprice">
         合计: {{totalPrice}}
        </div>
        <div class="calculate" @click="calculateClick">
            结算({{checkLength}})
        </div>
  </div>

  
</template>

<script>
import {Toast} from 'vant'

import CheckButton from '../../../components/content/checkButton/CheckButton'

export default {
    components: {
        CheckButton,
    },
    computed: {
        // 计算总金额
        totalPrice() {
            return '￥'+ this.$store.state.cartList.filter(item => {
                return item.checked          //当结果为true时才会返回
            }).reduce((preValue,item) => {
                return item.price * item.count
            },0)
        },
        checkLength() {
            return this.$store.state.cartList.filter(item =>item.checked).length
        },

        isSelectAll() {
            //1.当商品列表为空
           if(this.$store.state.cartList.length === 0) return false
           //使用filter
           //return !this.cartList.filter(item => !item.checked).length
           //2.使用find高阶函数
           //找到
           return !this.$store.state.cartList.find(item => !item.checked)
        },
        toastClick() {
            return this.$store.state.cartList.filter(item => {
               return item.checked
            }).length == 0
        }

    },
    methods: {
        checkClick() {
            //全选的按钮会由isSelectAll改变
            if(this.isSelectAll){
                //如果原来是全选中的，点击一次后全部不选中
                for (let n in this.$store.state.cartList){
                    this.$store.state.cartList[n].checked = false
                }
            }
            else
                //如果原来是部分/全未选中，点击一次后全部选中
            for (let n in this.$store.state.cartList) {
                this.$store.state.cartList[n].checked = true
            }
        },
        calculateClick() {
            if(this.toastClick) {
                Toast.fail('请选择您要购买的商品')
            }
            else
            Toast({
                message: '未完成的功能',
                icon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588253019698&di=0ff6d0c2781d747e975816d0db4a1ef9&imgtype=0&src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F11571350516%2F641.jpg'
            })
        }
    }
}
</script>

<style scoped>
    .bottom-bar {
        height: 40px;
        background-color: #eeeeee;
        position: absolute;
        bottom: 49px;
        left: 0;
        right: 0;
        display: flex;
    }
   .check-area {
       display:flex;
        margin-top: 10px;
        margin-left: 5px;
        margin-right: 10px;
        width: 55px;
   }
   .checkbutton  {
       height: 14px;
       width: 14px;
        line-height: 14px; 
        margin-right: 5px;
   }
   span {
       line-height: 17px;
   }
   .totalprice {
    font-size: 12px;
    line-height: 40px;
    margin-right: 5px;
    flex: 1;
   } 
   .calculate {
       display: flex;
       width: 90px;
       justify-content:center;
       align-items:center;
       background-color: dodgerblue;
   }
</style>