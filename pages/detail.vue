<template>
         <div style="height:100%;">
             <x-header style="background-color:#04BE02;">比特蜜蜂</x-header>
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
    .card-padding {
        padding: 15px;
        img {
            width:100%;
        }
    }
</style>
<script>
import axios from '~/plugins/http'
export default {
    mounted(){
        if(this.$route.params.id){
            axios.get('/article/getArticleById?id='+this.$route.params.id)
                .then(res=>{
                    if(res.status ==200) {
                        this.detail = res.data.data;
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