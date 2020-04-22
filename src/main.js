import Vue from 'vue'
import 'babel-polyfill'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import setAxios from '@/tools/axiosconfig'
import qs from 'qs'
/* element ui */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import animated from 'animate.css' // npm install animate.css --save安装，在引入
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import i18n from './lang' // Internationalization

Vue.prototype.$qs = qs
Vue.prototype.$http = axios
setAxios()
Vue.use(animated)
Vue.use(ElementUI)
Vue.use(mavonEditor)
Vue.config.productionTip = false

new Vue({
  data () {
    return {
      screenWidth: document.body.offsetWidth,
      isResize: true
    }
  },
  created () {
    if (this.screenWidth > 420) {
      this.$store.commit('changeIsPhone', false)
    } else {
      this.$store.commit('changeIsPhone', true)
    }
  },
  mounted () {
    let that = this
    window.addEventListener('resize', function () {
      that.screenWidth = document.body.offsetWidth
    })
  },
  watch: {
    screenWidth (val) {
      if (this.isResize) {
        this.isResize = false
        let that = this
        setTimeout(() => {
          if (val > 768) {
            that.$store.commit('changeIsPhone', false)
          } else {
            that.$store.commit('changeIsPhone', true)
          }
          that.isResize = true
        }, 5)
      }
    }
  },
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
