<template>
    <div>
        <!-- 顶部导航区域 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.id==0 ?'mui-active' : '']" v-for="item in cates" :key="item.id" @click="getPhotoList(item.id)">
                        {{ item.title }}
                    </a>
                </div>
            </div>
        </div>
        <!-- 图片列表区域 -->
        <ul class="photo-list">
            <router-link v-for="item in list" :key="item.id" to="">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{ item.title }}</h1>
                    <div class="info-body">{{ item.zhaiyao }}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.js";

export default {
  data() {
    return {
      cates: [], //所有分类的数组
      list: []
    }
  },
  created() {
    this.getAllCategory();
    //默认进入页面,就开始请求所有图片列表的数据
    this.getPhotoList(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    })
  },
  methods: {
    getAllCategory() {
      this.$http.get("api/getimgcategory").then(function(result) {
        if (result.body.status === 0) {
          //手动拼接一个最完整的分类列表
          result.body.message.unshift({ title: "全部", id: 0 });
          this.cates = result.body.message;
        }
      })
    },
    getPhotoList(cateid) {
      this.$http.get("api/getimages/" + cateid).then(result => {
        if (result.body.status === 0) {
          this.list = result.body.message;
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
}
.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li {
    text-align: center;
    background-color: #ccc;
    margin-bottom: 10px;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
      box-shadow: 0 0 10px #999;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info{
        color:white;
        position: absolute;
        text-align: left;
        bottom: 0;
        background-color: rgba(0,0,0,0.3);
        max-height :84px;
        .info-title{
            font-size: 14px;

        }
        .info-body{
            font-size: 12px;

        }
    }
  }
}
</style>