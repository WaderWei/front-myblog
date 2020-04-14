<template>
  <div>
    <div class="allNav animated fadeInUp">
      <!--open menu icon-->
      <div class="i-menu" @click="showMenu" v-if="$store.state.isPhone">
        <i class="el-icon-menu"></i>
      </div>
      <!--logo-->
      <div style="margin-top: 3px" :class="{logo:$store.state.isPhone}">
        <my-logo/>
      </div>
      <!--nav menu-->
      <div class="menu" v-if="!$store.state.isPhone">
        <my-el-menu/>
        <div class="nav-left">
          <!--search-->
          <div class="search">
            <el-input
              @blur="searchBlur"
              @focus="searchFocus"
              placeholder="请输入要查找的内容"
              v-model="searchKey">
              <i slot="prefix" class="el-input__icon el-icon-search" :class="{ searchFocus:isFocus }"></i>
            </el-input>
          </div>
        </div>
      </div>
      <!--heard-->
      <div class="nav-right">
        <div class="logined" v-if="$store.state.userInfo.phoneNum">
          <my-msg class="hidden-sm-and-down"/>
          <my-avatar/>
        </div>
        <div class="unLogin" v-else>
          <el-link class="login" :underline="false" type="primary" @click="clickLoginBtn">登录</el-link>
          <div class="interval" v-if="!$store.state.isPhone"></div>
          <div class="phoneInterval" v-else></div>
          <el-link class="register" style="margin-right: 3px" :underline="false" type="danger" @click="clickRegisterBtn">注册</el-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
import myLogo from '@/components/nav/myLogo'
import myElMenu from '@/components/nav/myElMenu'
import myAvatar from '@/components/nav/myAvatar.vue'
import myMsg from '@/components/nav/myMsg.vue'

export default {
  name: 'myNavMenu',
  components: {
    myElMenu,
    myAvatar,
    myMsg,
    myLogo
  },
  data () {
    return {
      searchKey: '',
      isFocus: false
    }
  },
  created () {
    console.log(this.$store.state.userInfo.phoneNum)
  },
  methods: {
    searchBlur () {
      this.isFocus = false
    },
    searchFocus () {
      this.isFocus = true
    },
    showMenu () {
      this.$store.commit('changePhoneDrawer', true)
    },
    clickLoginBtn () {
      this.$router.push({ name: 'login' })
    },
    clickRegisterBtn () {
      this.$router.push({ name: 'register' })
    }
  }
}
</script>

<style scoped>
  .allNav {
    display: flex;
    padding: 10px 0 0 0;
    width: 100%;
    height: 80px;
    position: fixed;
    z-index: 100;
    background-color: white;
    border-bottom: 5px solid #f9f9f9;
    top: 0;
  }

  .allNav .menu {
    display: flex;
    align-items: center;
    margin-left: 15px;
    margin-bottom: 12px;
  }

  .allNav .nav-left {
    margin-left: 18px;
  }

  .allNav .nav-right .logined {
    display: flex;
    align-items: center;
    position: absolute;
    right: 10px;
    top: 25px;
  }

  .allNav .nav-right .unLogin {
    display: flex;
    align-items: center;
    position: absolute;
    right: 10px;
    top: 28px;
  }
  .allNav .nav-right .unLogin .interval {
    padding: 3px;
    background-color: gray;
    margin: 0 30px;
    border-radius: 5px;
  }
  .allNav .nav-right .unLogin .phoneInterval{
    height: 20px;
    padding: 0 1px;
    margin: 0 3px;
    background-color: #c1c1c1;
  }
  .allNav .nav-right .unLogin .el-link {
    font-size: 22px !important;
  }

  .allNav .i-menu {
    position: absolute;
    left: 15px;
    top: 28px;
  }

  .allNav .logo {
    flex-grow: 1;
    margin-right: 10px;
  }

  .allNav .i-menu .el-icon-menu {
    font-size: 30px;
  }

  .el-icon-menu:hover {
    color: #7f9ba9;
  }

  .searchFocus {
    color: #3487f1;
  }
</style>
