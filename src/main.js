import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/pages/Home/TypeNav';

//注册全局组件,第一个参数组件的名称，第二个参数是组件本身
Vue.component(TypeNav.name,TypeNav);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  /*
  注册路由
  作用:
    会在所有的组件上添加两个属性
    $route:一般获取路由的属性[路径，param]
    $router:用于进行编程式导航进行路由跳转[push\replace]
  */
  router,
}).$mount('#app')
