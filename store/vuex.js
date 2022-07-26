import Vue from 'vue'
// 引入vuex
import vuex from 'vuex'
const actions = {}
const mutations = {}
const state = {}
Vue.use(vuex)
// 导出
export default new vuex.Store({
  actions,
  mutations,
  state
})
