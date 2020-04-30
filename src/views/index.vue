<template>
  <div class="contain">
    <transition name="fade">
      <my-nav-menu v-show="isNavShow" @openLoginDialog="openLogin" class="nav"/>
    </transition>
    <div class="line"></div>
    <div class="myMain">
      <left-main class="left-main"/>
      <router-view class="main"/>
      <right-main class="right-main"/>
    </div>
    <my-footer class="footer"/>
    <my-phone-drawer/>
    <my-drawer class="my-drawer"/>
  </div>
</template>

<script>
import myNavMenu from '@/components/nav/myNavMenu'
import myFooter from '@/components/foot/myFooter'
import myDrawer from '@/components/drawer/myDrawer'
import myPhoneDrawer from '@/components/drawer/myPhoneDrawer'
import leftMain from '@/components/content/leftMain'
import rightMain from '@/components/content/rightMain'
import { getToken } from '@/tools/auth'

export default {
  name: 'index',
  components: {
    myNavMenu,
    myFooter,
    myDrawer,
    myPhoneDrawer,
    leftMain,
    rightMain
  },
  data () {
    return {
      isNavShow: true,
      loginVisible: false
    }
  },
  created () {
    this.getUserInfo()
  },
  mounted () {
    let oldTop = 0 // 旧数据，初始为0
    // 将自定义方法绑定到窗口滚动条事件
    window.onscroll = () => {
      let top = document.scrollingElement.scrollTop // 触发滚动条，记录数值
      // 旧数据大于当前位置，表示滚动条top向上滚动
      if (top < 120) {
        this.isNavShow = true
        return
      }
      if (oldTop > top) {
        this.isNavShow = true
      } else {
        this.isNavShow = false
      }
      oldTop = top// 更新旧的位置
    }
  },
  methods: {
    openLogin () {
      this.loginVisible = true
    },
    getUserInfo () {
      this.$http.get('user/authc/info')
        .then(res => {
          console.log(res)
          this.$store.commit('saveUserInfo', res.data)
        }).catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
  .contain {
  }

  .nav {
  }

  .myMain {
    display: flex;
    flex-direction: row;
  }
  .left-main{
    flex-grow: 4;
  }
  .right-main{
    flex-grow: 4;
  }
  .main {
    flex-grow: 8;
  }
  .footer {
  }

  .line {
    margin-top: 90px;
    border: 5px solid #f9f9f9;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 1.0s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
    height: 0;
  }
</style>
