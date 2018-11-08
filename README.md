### 制作首页APP组件

1. 完成Header 区域.使用的是Mint-ui 中的Header组件
2. 制作底部的Tabbar 区域,使用的是mui 的Tarbar


## 使用 mt-swipe 轮播图组件

1. 按需导入mint-ui中的组件
2. 注册组件
3. 在轮播图中 需要手动的给类名为mint-swipe 设置高度  这样轮播图 图片才会显示出来
4. 使用scss编译解析css
5. 获取数据, 使用vue-resource
6. 使用vue-resource 的this. $http.get获取数据
7. 获取到的数据 保存到data上定义的数据
8. 利用v-for 渲染到页面上

### 改造六宫格

1. 利用mui中的格式进行改造 修改样式

### 路由重定向

- 在router.js中进行重定向 {path:"/",redirect:'/home'},

### 页面间的跳转过渡效果

1. 解决滑动问题
   + 取消滚动条  利用overflow-x:hidden
2. 因为页面从右侧进来 就应该从左侧消失  所以应该把v-enter 和v-leave-to分开写  离开的时候需要加上position:absolute
3. 利用过渡效果是为了让用户觉得web网站很流畅,更方便用户理解我们的页面运行逻辑

### 实现新闻详情的页面布局和数据渲染



1. 单独封装一个comment.vue 评论子组件
2. 先创建一个单独的comment,vue 组件模板
3. 在需要使用comment组件的页面中,手动导入comment组件(因为不止一个页面需要用到comment  所以可以单独封装一个组件)
4. 在父组件中,使用component属性 ,将刚才导入comment组件,注册为自己的子组件
5. 将注册子组件时候的注册名称,以标签形式,在页面中饮用即可

### 获取所有的评论数据显示到页面中

在评论数据时需要获取文章id  可以通过父组件向子组件传值  因为在父组件Newsinfo.vue中已经在data中定义接收了id值

### 实现点击加载更多功能

为加载更多按钮,绑定点击事件,在事件中请求下一页数据

点击加载更多让pageIndex++ 然后重新调用下thisgetComments











