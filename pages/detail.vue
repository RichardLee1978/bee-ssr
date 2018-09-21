<template>
         <div style="height:100%;" class="detail">
             <x-header style="background-color:#F9F9F9;">比特蜜蜂</x-header>
             <view-box>
                <card style="margin-top:0px;" v-if='detail'>
                    <!--<img slot="header" v-if='detail.articleImageUrl!="" && detail.articleImageUrl' :src="detail.articleImageUrl" style="width:100%;display:block;"> -->
                    <div slot="content" class="card-padding">
                        <h1 style="color:#333;font-size:14px;">{{detail.title}}</h1>
                        <h2 style="color:#666;font-size:12px;">{{detail.author}}</h2>
                        <p style="color:#999;font-size:12px;">{{detail.releaseTime}}</p>
                        <p style="font-size:14px;line-height:150%;" v-html='detail.text'></p>
                    </div>
                </card>
                </view-box>
         </div> 
</template>
<style lang='less'>
.detail {
    .vux-header {
        .vux-header-left {
            .left-arrow:before {
                   content: "";
                    position: absolute;
                    width: 12px;
                    height: 12px;
                    border: 1px solid #333;
                    border-width: 1px 0 0 1px;
                    -webkit-transform: rotate(315deg);
                    transform: rotate(315deg);
                    top: 8px;
                    left: 7px;
            }
            .vux-header-back {
                color:#333;
            }
        }
        .vux-header-title {
            color:#333;
        }
    }
}
    
    .card-padding {
        padding: 15px;
        img {
            max-width:100%;
        }
    }
</style>
<script>
import axios from '~/plugins/http'
import {DateDiff} from '~/plugins/datetimediff' 
export default {
    mounted(){
        if(this.$route.params.id){
            axios.get('/article/getArticleById?id='+this.$route.params.id)
                .then(res=>{
                    if(res.status ==200) {
                        this.detail = res.data.data;
                        this.detail.releaseTime = DateDiff(res.data.data.releaseTime);
                    }
                    
                })
        }
        
    },
    data() {
        return {
            detail:undefined
        };
    }
};
</script>