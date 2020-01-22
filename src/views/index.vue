<template>
  <div class="contain">
    <transition name="fade">
      <my-nav-menu v-show="isNavShow" @openLoginDialog="openLogin" class="nav"/>
    </transition>
    <div class="line"></div>
    <router-view class="main"/>
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

export default {
  name: 'index',
  components: {
    myNavMenu,
    myFooter,
    myDrawer,
    myPhoneDrawer
  },
  data () {
    return {
      isNavShow: true,
      loginVisible: false
    }
  },
  created () {

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
    }
  }
}
</script>

<style scoped>
  .contain {
  }

  .nav {

  }

  .main {
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
