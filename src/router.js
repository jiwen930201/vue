import VueRouter from 'vue-router';
 import Vue from 'vue';
 Vue.use(VueRouter)

 //导入对应的路由组件
 import Home from './components/tabbar/home.vue';
 import Member from './components/tabbar/member.vue';
 import Shopcar from './components/tabbar/shopcar.vue';
 import Search from './components/tabbar/search.vue';

 import Newlist from './components/newLsit/newlist.vue'
// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:"/",redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/member',component:Member},
    {path:'/shopcar',component:Shopcar},
    {path:'/search',component:Search},
    {path:"/home/newlist",component:Newlist}
    
  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router