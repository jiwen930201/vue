<template>
    <div class="">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <router-link :to="'/home/newsinfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>离合器多久更换一次？离合器打滑怎么办？</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间:{{ item.add_time | dataTime}}</span>
                            <span>点击次数:2</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';

    export default {
        data() {
            return {
                newslist: [] //定义一个空数组 接收新闻列表
            };
        },
        created() {
            this.getNewLists();
        },
        methods: {
            getNewLists() {
                this.$http.get("api/getnewslist").then(result => {
                    if (result.body.status == 0) {
                        this.newslist = result.body.message;
                    } else {
                        Toast("新闻获取失败");
                    }
                });
            }
        }
    };
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