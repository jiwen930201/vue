<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要咨询的内容(最多字数120)" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="cmt-list" v-for="(item,i) in comments" :key="i">
            <div class="cmt-item">
                <div class="cmt-title">
                    第{{ i+1 }}楼&nbsp;&nbsp;用户:{{ item.user_name }}&nbsp;&nbsp;发表时间:{{ item.add_time | dataTime }}
                </div>
                <div class="cmt-body">
                    {{ item.content ===undefined ? '此用户很懒,什么也没有' : item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    export default {
        data() {
            return {
                pageindex: 1,//默认第一页
                comments :[],//所有的评论数据
                msg:''
            }
        },
        created() {
            this.getCommentList();
        },
        methods: {
            getCommentList() {
                this.$http.get('api/getcomments/' + this.id + '?pageindex=1').then(function (result) {
                    if(result.body.status==0){
                        //使用concat()方法拼接之前的数据 这样不会清空之前的数据
                        this.comments= this.comments.concat(result.body.message);
                        // console.log(result.body)
                    }else{
                        Toast('获取咨询数据失败')
                    }
                })
            },
            getMore(){
                this.pageindex++;
                this.getCommentList()
            },
            postComment(){
                //校验是否为空
                if(this.msg.trim().length ==0){
                    return Toast('咨询内容不能为空')
                }
                this.$http.post('api/postcomment/'+ this.$route.params.id,{ content:this.msg.trim()} ).then(function(result){
                    if(result.body.status==0){
                        //拼接一个评论对象
                        var cmt = {
                            user_name:'匿名用户',
                            add_time:Date.now(),
                            content:this.msg.trim()
                        };
                        this.comments.unshift(cmt);
                        this.msg = ''

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