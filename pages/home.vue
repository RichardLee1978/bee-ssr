<template>
<div style="height:100%;">
  <!-- <x-header style="background-color:#04BE02;">比特蜜蜂</x-header> -->
  <flexbox :gutter='2' :align="'center'" :justify="'center'" style='background-color:#EFEFF4;'>
    <flexbox-item  :span='1' >
      <x-icon style="display: block;margin: 0 auto;"  type="android-person" class="ion-logo-android" size="30"></x-icon>
    </flexbox-item>
    <flexbox-item :span='11'>
      <search
      auto-scroll-to-top
      :placeholder="'搜索'"
     
      ref="search">
      </search>
    </flexbox-item>
  </flexbox>
   
      
    <tab>
      <tab-item @on-item-click="changetab(item.id)" v-for="item in categorylist" :key="'key'+item.id" :selected="item.id===curID">{{ item.category }}</tab-item>
    </tab>
    <view-box>
      <panel  :list="lists.data" :type="type" @on-img-error="onImgError"></panel>
    </view-box>
   
  <footer-bar :cur="curIsSelected"></footer-bar>
   
</div>
</template>
<style lang='less'>
html,body {
  height:100%;
  width:100%;
}
</style>
<script>
import {mapState} from 'vuex';

export default {
    
    computed: {
      ...mapState({
        lists: state => {
          return state.article.lists
        },
        categorylist: state => {
          return state.article.category
        },
        curID: state => {
          return parseInt(state.article.id,10)
        },
        curRank: state => {
          return parseInt(state.article.rank,10)
        },
        curIsSelected: state => {
            const channel = state.article.channel;
            switch (channel) {
                case 'home':
                    return {
                        home: {
                            selected:true
                        },
                        news:{
                            selected:false
                        },
                        exp:{
                            selected:false
                        },
                        user:{
                            selected:false
                        }
                    }
                break;
                case 'news':
                    return {
                        home: {
                            selected:false
                        },
                        news:{
                            selected:true
                        },
                        exp:{
                            selected:false
                        },
                        user:{
                            selected:false
                        }
                    }
                break;
            }
           
        }
      })
    },
    methods:{
      changetab(id) {
        this.$store.dispatch('article/get',{rank:this.$store.state.article.rank,id:id,page:1})
      },
      onImgError (item, $event) {
        console.log(item, $event)
      }
    },
    mounted(){
      //console.log(this.$store.state)
      if(this.$store.state.article.rank==0 || this.$store.state.article.rank==1) {
        this.$store.dispatch('article/getAuto',{rank:2,page:1})
      }
      
      // if(this.$route.params.id) {
      //    this.$store.dispatch('article/get',{rank:this.$store.state.article.rank,id:this.$route.params.id,page:1})
      // } else {
      //   this.$store.dispatch('article/getAuto',{rank:2,page:1})
      // }
    },
    data () {
        return {
            type: '5',
            page:1,
            footer: {
              title: '更多',
              url: 'http://vux.li'
            }
        }
    }
}
</script>