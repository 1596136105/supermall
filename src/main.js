import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Vant from 'vant';
import 'vant/lib/index.css';


Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()  //在原型中定义$bus为Vue实例，此时可以监听与发送事件

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
