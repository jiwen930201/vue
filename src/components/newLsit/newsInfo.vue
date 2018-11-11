<template>
   <div class="newsInfo-container">
       <h3 class="title">离合器多久更换一次？离合器打滑怎么办？</h3>
       <p class="subtitle">
           <span>发表时间:{{newsInfo.add_time | dataTime}}</span>
           <span>点击:{{newsInfo.click}}次</span>
       </p>
       <hr>
       <!--内容区域-->
       <div class="content">
           <p>
               1.    Q：离合器分离不好是为什么？<br>
               A：离合器分离不好的主要原因是离合器踏板的自由行程太大，再就是更换离合器从动盘后，由于忽视了对变速器第一轴的清洗，有杂质，造成从动盘毂和第一轴的间隙过小，移动阻力大，离合器分离不好。<br>
               2.    Q：离合器分离不彻底有哪些现象？<br>
               A：离合器分离不彻底可能有以下两种现象：<br>
               1、汽车起步时，将离合器踏板踩下去，超过自由行程，却仍感到挂档困难。如果是强行挂入档，但是还没有完全抬起离合器踏板，车就前进或后移，并导致发动机熄火。<br>
               2、行驶中换档困难，或挂不上档，变速器内发生齿轮的撞击声。<br>
               3.    Q：造成离合器打滑的原因有哪些？<br>
               A：造成离合器打滑的原因可能有：<br>
               1、从动盘磨擦片磨损过度或铆钉外露
               2、离合器压盘弹簧过软或折断
               3、离合器踏板自由行程过小
               4、从动盘摩擦片上有油污或老化变硬
               5、离合器与飞轮接合螺栓松动
               6、离合器总泵回油孔堵塞
               4.    Q：离合器片需多久更换一次？<br>
               A：正常使用的离合器片，更换公里数都会在10万公里以上，甚至更多。
               但更换离合器片不能只靠公里数来判断，一些高性能车型的马力较大，离合器的磨损较快，要看具体的使用情况而定，如果出现挂挡困难（特别是倒挡因没有同步器）、踩下离合踏板有烧焦烧糊味、车子爬坡无力等情况下，就需要进行离合器的检修和更换了。<br>
               5.    Q：离合器抬快了容易熄火怎么办？<br>
               A：对于开手动挡不太熟练的朋友，可以试试下面的练习方法：
               第一步，建议平地挂空挡，单独练习原地右脚给油，右脚点踩油门，并试着将转速控制在2000转左右，直到你可以很自然很熟练地维持这个转速，新手容易给油过度或不足，导致无法很好维持这个转速，所以需要多加练习。<br>
               练熟第一步之后，可以配合离合起步，此时右脚仍保持第一步练习时候的状态，将转速维持在2000转，同时，左脚慢慢松离合即可。<br>
               当然，以上2000转的转速是一般车平地起步，具体情况以及多少转速合适可以自己摸索一下。<br>
           </p>
       </div>
       <!--评论子组件区域-->
       <comment-box :id="this.id"></comment-box>
   </div>
</template>

<script>
    //导入评论子组件
    import  comment from '../subcomponent/comment.vue'
    import {Toast} from 'mint-ui'
    export default {
        data(){
            return {
                id: this.$route.params.id,
                newsInfo :{}
            }
        },
        created(){
            this.getNewsInfo()
        },
        methods:{
            getNewsInfo(){
                this.$http.get("api/getnew/" + this.id).then(function(result){
                    if(result.body.status==0){
                        this.newsInfo = result.body.message[0]
                    }else{
                        Toast('获取新闻详情失败')
                    }
                })
            }
        },
        components:{
            "comment-box" : comment
        }
    }
</script>

<style lang="scss">
    .newsInfo-container{
        padding: 0 4px;
        .title{
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        .subtitle{
            font-size: 13px;
            color:#0aa6e8;
            display: flex;
            justify-content: space-between;
        }
        .content{
            img{
                width: 100%;
            }
            p{
                padding: 0 6px;
            }
        }
    }
</style>