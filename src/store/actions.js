export default {
    addCart(context,payload){
        //1.查找之前数组中是否有该商品
        let oldproduct = context.state.cartList.find((item)=>{
             return item.iid === payload.iid
        })
        //2.判断oldProduct
        if(oldproduct) {
            // oldproduct.count += 1
            context.commit('addCounter',oldproduct)
            }
        else {
            payload.count = 1
        // state.cartList.push(payload)
        context.commit('addToCart',payload)
        }
     }
}
