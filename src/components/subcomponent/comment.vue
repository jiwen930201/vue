<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要咨询的内容(最多字数120)" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list" v-for="(item,i) in comments" :key="item.add_time">
            <div class="cmt-item">
                <div class="cmt-title">
                    第{{ i+1 }}楼&nbsp;&nbsp;用户:{{ item.user_name }}&nbsp;&nbsp;发表时间:{{ item.add_time | dataTime }}
                </div>
                <div class="cmt-body">
                    {{ item.content ===undefined ? '此用户很懒,什么也没有' : item.content}}
                </div>
            </div>
        </div>
<!--        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第2楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2018:10-23
                </div>
                <div class="cmt-body">
                    倒车影像哪个品牌好_倒车影像品牌排行榜
                </div>
            </div>
        </div>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第3楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2018:10-23
                </div>
                <div class="cmt-body">
                    倒车影像哪个品牌好_倒车影像品牌排行榜
                </div>
            </div>
        </div>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第4楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2018:10-23
                </div>
                <div class="cmt-body">
                    倒车影像哪个品牌好_倒车影像品牌排行榜
                </div>
            </div>
        </div>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第5楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2018:10-23
                </div>
                <div class="cmt-body">
                    倒车影像哪个品牌好_倒车影像品牌排行榜
                </div>
            </div>
        </div>-->
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    export default {
        data() {
            return {
                pageindex: 1,//默认第一页
                comments :[]//所有的评论数据
            }
        },
        created() {
            this.getCommentList();
        },
        methods: {
            getCommentList() {
                this.$http.get('api/getcomments/' + this.id + '?pageindex=1').then(function (result) {
                    if(result.body.status==0){
                        this.comments=result.body.message;
                    }else{
                        Toast('获取咨询数据失败')
                    }
                })
            }
        },
        props: ['id']
    }
</script>

<style lang="scss" scoped>
    .cmt-container {
        h3 {
            font-size: 16px;
        }
        textarea {
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .cmt-list {
            margin: 5px 0;
            .cmt-item {
                font-size: 13px;
                .cmt-title {
                    line-height: 30px;
                    background-color: #ccc;
                }
                .cmt-body {
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
        }
    }
</style>