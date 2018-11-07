<template>
    <div class="">
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="../../images/banner2.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../images/xh_banner.png" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../images/uk_banner.png" alt="">s
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../images/banner.jpg" alt="">s
            </mt-swipe-item>
        </mt-swipe>

        <!-- 六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <router-link to="/home/newlist">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">汽车保养</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4"><a href="#">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">汽车喷漆</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4"><a href="#">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">汽车美容</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4"><a href="#">
                    <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">汽车养护</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4"><a href="#">
                    <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">维修预约</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4"><a href="#">
                    <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">违章查询</div>
                </a></li>

        </ul>
    </div>
</template>

<script>
//利用Toast弹框提醒用户获取轮播图失败
export default {
 
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: white;
  border: none;
  img {
    width: 60px;
  }
  .mui-media-body {
    font-size: 13px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
</style>