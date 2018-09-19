import axios from '~/plugins/http'
import {articleListDiff} from '~/plugins/datadiff' 

export const state = () => ({
    
    lists:{
      count:0,
     
      data:[]
    },
    category:[],
    rank:0,
    id:0,
    page:1,
    channel:"home"
  })
  export const mutations = {
    SET_LIST(state,lists) {
      state.lists = lists
    },
    SET_CATEGORY(state,category) {
      state.category = category;
    },
    SET_RANK(state,rank) {
      state.rank = rank;
    },
    SET_ID(state,id) {
      state.id = id;
    },
    SET_CHANNEL(state,channel) {
      state.channel = channel;
    }
  }
  export const getters = {
    get_lists(state) {
      return state.lists
    },
    get_categorylists(state) {
      return state.category
    },
    get_rank(state) {
      return state.rank
    },
    get_id(state) {
      return state.id
    }
  }
  export const actions = {
    async getAuto({ commit },{rank,page}) {
     let id_
     const cate = await axios.get('/articleCategory/getCategoriesById?id='+rank)
     
     if(cate.status == 200) {
        if(rank==1) {
            commit('SET_CATEGORY',cate.data.data);
            commit('SET_ID',cate.data.data[0].id);
            commit('SET_RANK',rank)
            commit('SET_CHANNEL','news');
            id_ = cate.data.data[0].id;

        } else if(rank==2) {
            commit('SET_CATEGORY',cate.data.data[0].sons);
            commit('SET_ID',cate.data.data[0].sons[0].id);
            commit('SET_RANK',rank)
            commit('SET_CHANNEL','home');
            id_ = cate.data.data[0].sons[0].id;
        }
        const article =await axios.get('/articleCategory/getArticlesByCategoriesId/'+rank+'/'+id_+'/1/20/'+page)
        if(article.status == 200) {
          commit('SET_LIST',{
            count:article.data.data.count,
            data:articleListDiff(article.data.data.data)
          });
        }
     }                
    },
    async get({ commit },{rank,id,page}) {
        
        commit('SET_ID',id);
         
         const article =await axios.get('/articleCategory/getArticlesByCategoriesId/'+rank+'/'+id+'/1/20/'+page)
         if(article.status == 200) {
           commit('SET_LIST',{
             count:article.data.data.count,
             data:articleListDiff(article.data.data.data)
           });
         }
                   
     }
  }