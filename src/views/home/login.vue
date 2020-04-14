<template>
  <div class="login-container">
    <div class="logo animated bounceInDown">
      <my-logo/>
    </div>
    <div class="login-div animated zoomIn">
      <el-card class="box-card">
        <lang-select class="chose-lang"></lang-select>
        <div class="login-title">
          <div class="animated bounceInLeft">{{$t('login.title1')}}</div>
          <div class="splitRedis animated bounceInDown"></div>
          <div class="animated bounceInRight">{{$t('login.title2')}}</div>
        </div>
        <div class="login-input">
          <el-input
            class="phoneInput animated rotateInDownLeft"
            ref="phoneInput"
            :placeholder="$t('login.phonePlaceHolder')"
            prefix-icon="el-icon-phone-outline" v-model="phoneNum" clearable
            @focus="phoneFocus">
          </el-input>
          <el-input class="passwordInput animated rotateInUpRight"
                    :placeholder="$t('login.pwdPlaceHolder')"
                    prefix-icon="el-icon-key" v-model="password" show-password>
          </el-input>
        </div>
        <div class="remSwitch animated fadeInLeft">
          <div>
            <span style="color: gray;font-size: 14px">{{$t('login.noAccountTip')}}</span>
            <el-link class="regLink" :underline="false" type="primary" @click="goRegister">{{$t('login.register')}}</el-link>
          </div>
          <div>
            <el-switch v-model="rememberPsd"/>
            <span class="remPsd">{{$t('login.rememberPsd')}}</span>
          </div>
        </div>
        <el-button class="loginBtn animated rubberBand" type="primary" round @click="login">登录</el-button>
      </el-card>
    </div>
  </div>
</template>

<script>
import myLogo from '@/components/nav/myLogo'
import LangSelect from '@/components/LangSelect'

export default {
  name: 'login',
  components: {
    myLogo,
    LangSelect
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
    background-size: cover;
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
    color: #66B1FF;
    margin: 30px 0;
  }
  .chose-lang{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
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
