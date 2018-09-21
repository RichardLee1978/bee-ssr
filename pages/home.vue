<template>
<div style="height:100%;">
  <search-top></search-top>  
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