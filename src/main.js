import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* element ui */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import animated from 'animate.css' // npm install animate.css --save安装，在引入
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

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
  render: h => h(App)
}).$mount('#app')
