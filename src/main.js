// 入口文件
import Vue from 'vue';

//导入自己的路由的包
import router from './router.js';

//导入vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root="http://www.liulongbin.top:3005";

import app from './App.vue';

import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';


//按需导入mint-ui组件
import{Header,Swipe,SwipeItem} from 'mint-ui';
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);



var vm = new Vue({
    el:'#app',
    data:{

    },
    render: c=> c(app),
    router:router//挂载路由对象
})