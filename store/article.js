export const state = () => ({
    count: 0,
    list:[],
    page:1
  })
  export const mutations = {
    increment(state) {
      state.page++
    }
  }
  export const getters = {
    get(state) {
      return state.list
    }
  }