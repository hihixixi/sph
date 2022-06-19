//配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';
/*使用插件*/
Vue.use(VueRouter);

import Home from '@/pages/Home';
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

//重写push与replace方法，这两个方法的返回值是promise，解决bug因为调用时我们经常不手动传递失败与成功的回调
let originPush = VueRouter.prototype.push;
let originRplace = VueRouter.prototype.replace;

//只是简单的进行二次封装，并不改变函数的内部逻辑，所以需要保存原来的函数
VueRouter.prototype.push = function (location,resolve,reject){
    if(resolve && reject){
        //使用call是因为需要与原对象进行绑定
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,()=>{},()=>{});
    }
}
VueRouter.prototype.replace = function (location,resolve,reject){
    if(resolve && reject){
        //使用call是因为需要与原对象进行绑定
        originRplace.call(this,location,resolve,reject);
    }else{
        originRplace.call(this,()=>{},()=>{});
    }
}

//配置路由
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            /*添加一个属性用于控制v-show，属性字段不可以自己扩展*/
            meta:{show:true}
        },
        {
            path:'/login',
            component:Login,
            meta:{show:false}
        },
        {
            path:'/register',
            component:Register,
            meta:{show:false}
        },
        {
            path: '/search',
            component:Search,
            meta:{show:true}
        },
        {
            path: '*',
            /*重定向*/
            redirect: '/home'
        }
    ]
});