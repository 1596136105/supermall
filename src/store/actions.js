export default {
    addCart(context,payload){
        //promise用于toast的信息展示
       return new Promise((resolve,reject) => {
            //1.查找之前数组中是否有该商品
        let oldproduct = context.state.cartList.find((item)=>{
            return item.iid === payload.iid
       })
       //2.判断oldProduct
       if(oldproduct) {
           // oldproduct.count += 1
           context.commit('addCounter',oldproduct) 
           resolve('当前商品数量+1')   //toast显示这段话
           }
          
       else {
           payload.count = 1
       // state.cartList.push(payload)
       context.commit('addToCart',payload)
       resolve('添加商品成功')
       }
     })
    }
}
