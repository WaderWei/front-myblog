import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /* 抽屉打开状态 */
    drawer: false,
    /* 手机抽屉打开状态 */
    phoneDrawer: false,
    /* 是否是手机 */
    isPhone: false,
    unReadMsg: 2001
  },
  mutations: {
    changeDrawer (state, val) {
      state.drawer = val
    },
    changePhoneDrawer (state, val) {
      state.phoneDrawer = val
    },
    changeIsPhone (state, val) {
      state.isPhone = val
    },
    changeUnReadMsg (state, val) {
      state.unReadMsg = val
    }
  },
  actions: {},
  modules: {}
})
