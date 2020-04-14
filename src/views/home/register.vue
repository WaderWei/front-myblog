<template>
  <div class="register-container">
    <div class="logo animated bounceInDown" @click="backHome">
      <my-logo/>
    </div>
    <div class="register-div animated zoomIn">
      <el-card class="box-card">
        <lang-select class="chose-lang"></lang-select>
        <div class="register-title">
          <div class="animated bounceInLeft">{{$t('register.title1')}}</div>
          <div class="splitRedis animated bounceInDown"></div>
          <div class="animated bounceInRight">{{$t('register.title2')}}</div>
        </div>
        <div class="register-input">
          <el-input
            class="inputStyle animated rotateInDownLeft"
            :placeholder="$t('register.phonePlaceHolder')"
            prefix-icon="el-icon-phone-outline" v-model="phoneNum" clearable
            @focus="phoneFocus">
          </el-input>
          <el-input class="inputStyle animated rotateInUpRight"
                    :placeholder="$t('register.pwdPlaceHolder')"
                    prefix-icon="el-icon-key" v-model="password" show-password>
          </el-input>
          <div class="verCode">
            <el-input
              class="animated fadeInRight"
              prefix-icon="el-icon-unlock"
              :placeholder="$t('register.CaptchaPlaceHolder')" v-model="verificationCode" clearable
              @focus="phoneFocus">
            </el-input>
            <el-button class="animated fadeInLeft" type="success">{{$t('register.getCaptcha')}}</el-button>
          </div>
        </div>
        <div class="remSwitch animated fadeInLeft">
          <div>
            <span style="color: gray;font-size: 14px">{{$t('register.hasAccountTip')}}</span>
            <el-link class="regLink" :underline="false" type="primary" @click="goLogin">{{$t('register.login')}}</el-link>
          </div>
        </div>
        <el-button class="registerBtn animated rubberBand" type="primary" round>{{$t('register.register')}}</el-button>
      </el-card>
    </div>
  </div>
</template>

<script>
import myLogo from '@/components/nav/myLogo'
import LangSelect from '@/components/LangSelect'
export default {
  name: 'register',
  components: {
    myLogo,
    LangSelect
  },
  data () {
    return {
      phoneNum: '',
      password: '',
      rememberPsd: false,
      verificationCode: ''
    }
  },
  created () {
  },
  methods: {
    backHome () {
      this.$router.replace({ path: '/' })
    },
    goLogin () {
      this.$router.replace({ path: 'login' })
    },
    phoneFocus () {
    }
  }
}
</script>

<style scoped>
  .register-container {
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

  .register-div {
    width: 320px;
  }

  .chose-lang{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .splitRedis {
    padding: 3px;
    align-self: center;
    margin: 0 10px;
    background-color: gray;
    border-radius: 3px;
  }

  .register-title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-weight: bold;
    color: #66B1FF;
    margin: 30px 0;
  }

  .inputStyle {
    margin-bottom: 30px;
  }
  .verCode{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .remSwitch {
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
  }

  .regLink {
    line-height: 21px;
  }

  .registerBtn {
    margin: 30px 0;
    width: 100%;
  }
</style>
