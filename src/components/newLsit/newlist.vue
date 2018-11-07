<template>
  <div class="">
      <ul class="mui-table-view" v-for="item in newslist" :key="item.id">
          <li class="mui-table-view-cell mui-media">
              <a href="javascript:;">
                  <img class="mui-media-object mui-pull-left" src="../../images/shuijiao.jpg">
                  <div class="mui-media-body">
                      幸福
                      <p class='mui-ellipsis'>
                          <span>发表时间:2018-11-7</span>
                          <span>点击次数:2</span>
                      </p>
                  </div>
              </a>
          </li>
          <li class="mui-table-view-cell mui-media">
              <a href="javascript:;">
                  <img class="mui-media-object mui-pull-left" src="../../images/shuijiao.jpg">
                  <div class="mui-media-body">
                      木屋
                      <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
                  </div>
              </a>
          </li>
          <li class="mui-table-view-cell mui-media">
              <a href="javascript:;">
                  <img class="mui-media-object mui-pull-left" src="../../images/shuijiao.jpg">
                  <div class="mui-media-body">
                      CBD
                      <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
                  </div>
              </a>
          </li>

      </ul>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  export default {
    data(){
        return {
            newslist :[]
        }
    },
     methods:{
        getNewsList(){
            this.$http.get('/api/getnewslist').then(function(result){
                if(result.body.status==0){
                    this.newlist = result.body
                }else{}
                Toast:"获取新闻列表失败"
            })
        }
     }
  }
</script>

<style lang="scss" scoped>
    .mui-table-view {
        li {
            h1 {
                font-size: 14px;
            }
            .mui-ellipsis {
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>