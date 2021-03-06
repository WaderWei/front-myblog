import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
import { setTokenInLs, getTokenInLs, removeTokenInLs } from '../tools/localStore'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: Cookies.get('language') || 'zh',
    token: getTokenInLs() || null,
    userInfo: null,
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
    },
    saveUserInfo (state, userInfo) {
      state.userInfo = userInfo
    },
    setToken (state, token) {
      state.token = token
      setTokenInLs(token)
    },
    removeToken (state) {
      state.userInfo = null
      state.token = null
      removeTokenInLs()
    }
  },
  actions: {
    SET_LANGUAGE: (state, language) => {
      state.language = language
      Cookies.set('language', language)
    }
  },
  modules: {}
})
