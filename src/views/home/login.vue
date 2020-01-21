<template>
  <div class="login-container">
    <div class="logo animated bounceInDown" @click="backHome">
      <my-logo/>
    </div>
    <div class="login-div animated zoomIn">
      <el-card class="box-card">
        <div class="login-title">
          <div class="animated bounceInLeft">登</div>
          <div class="splitRedis animated bounceInDown"></div>
          <div class="animated bounceInRight">录</div>
        </div>
        <div class="login-input">
          <el-input
            class="phoneInput animated rotateInDownLeft"
            ref="phoneInput"
            placeholder="请输入手机号"
            prefix-icon="el-icon-phone-outline" v-model="phoneNum" clearable
            @focus="phoneFocus">
          </el-input>
          <el-input class="passwordInput animated rotateInUpRight"
                    placeholder="请输入密码"
                    prefix-icon="el-icon-key" v-model="password" show-password>
          </el-input>
        </div>
        <div class="remSwitch animated fadeInLeft">
          <div>
            <span style="color: gray;font-size: 14px">没有账号？</span>
            <el-link class="regLink" :underline="false" type="primary" @click="goRegister">注册</el-link>
          </div>
          <div>
            <el-switch v-model="rememberPsd"/>
            <span class="remPsd">记住密码</span>
          </div>
        </div>
        <el-button class="loginBtn animated rubberBand" type="primary" round @click="login">登录</el-button>
      </el-card>
    </div>
  </div>
</template>

<script>
import myLogo from '@/components/nav/myLogo'

export default {
  name: 'login',
  components: {
    myLogo
  },
  data () {
    return {
      phoneNum: '17356526878',
      password: '123456',
      rememberPsd: false
    }
  },
  created () {
  },
  methods: {
    backHome () {
      this.$router.replace({ path: '/' })
    },
    goRegister () {
      this.$router.replace({ path: 'register' })
    },
    phoneFocus () {
    },
    login () {
      this.$store.commit('saveUserInfo', { phoneNum: this.phoneNum, password: this.password })
      this.$router.replace({ path: '/' })
    }
  }
}
</script>

<style scoped>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #eceefe;
    background: url("../../assets/loginbg.jpg") no-repeat;
  }

  .logo {
    margin-top: 6%;
  }

  .login-div {
    width: 320px;
  }

  .splitRedis {
    padding: 3px;
    align-self: center;
    margin: 0 10px;
    background-color: gray;
    border-radius: 3px;
  }

  .login-title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-weight: bold;
    color: #0b84ff;
    margin: 30px 0;
  }

  .phoneInput {
    margin-bottom: 30px;
  }

  .passwordInput {

  }

  .remSwitch {
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
  }

  .remPsd {
    margin-left: 10px;
    line-height: 21px;
    color: gray;
    font-size: 14px;
  }

  .regLink {
    line-height: 21px;
  }

  .loginBtn {
    margin: 30px 0;
    width: 100%;
  }
</style>
