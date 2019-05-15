import axios from '~/plugins/http'
export const state = () => ({
    
    // user : {
    //     "nickName": "nothing",
    //     "phone": "15555161265",
    //     "gender": 1,
    //     "location": "安徽,合肥,庐阳",
    //     "describe": "钢铁侠",
    //     "profileImageUrl": "/image/profile-photo/0/0c3dd662b589965f79cedca44a82ada3.png",
    //     "userMessages": [
    //         {
    //             "id": 163,
    //             "type": 9,
    //             "msg": "您的实名认证已通过。",
    //             "redirect": "{}",
    //             "createTime": "2018-09-26T11:51:15.047302Z"
    //         },
    //         {
    //             "id": 162,
    //             "type": 4,
    //             "msg": "有新奖励。",
    //             "redirect": "{}",
    //             "createTime": "2018-09-26T11:51:10.503329Z"
    //         }
    //     ],
    //     "status": 2,
    //     "balance": 60.4,
    //     "physicalStrength": 100,
    //     "articleCount": 8,
    //     "likeCount": 0,
    //     "dislikeCount": 0,
    //     "commentCount": 2,
    //     "followerCount": 4,
    //     "followingCount": 5,
    //     "userLevel": 0
    // }
    user:undefined
  })

  export const mutations = {
    SET_USER(state,user) {
      state.user = user
    }  
  }
  export const getters = {
    get_user(state) {
      return state.user
    }
  }
  export const actions = {
    async getuserinfo({ commit },{token}){
        const info = await axios.get('/user/userInfo',{
            headers:{
                'Authorization': 'Bearer ' + token
            }
        });
        if(info.status == 200) {
            commit('SET_USER',info.data.data);
        }
    },
    nuxtServerInit ({ commit }, { req, res }) {
        if (req.session && req.session.user) {
          const { nickName, phone } = req.session.user
          const user = {
            nickName,
            phone
          }
    
          commit('SET_USER', user)
        }
      }
  }
  


