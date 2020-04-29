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
          <el-form :model="loginForm" :rules="rules" ref="loginForm">
            <el-form-item prop="email" class="spacingStyle">
              <el-input
                class="animated rotateInDownLeft"
                :placeholder="$t('login.emailPlaceHolder')"
                prefix-icon="el-icon-user" v-model="loginForm.email" clearable
              >
              </el-input>
            </el-form-item>
            <el-form-item prop="password" class="spacingStyle">
              <el-input class="passwordInput animated rotateInUpRight"
                        :placeholder="$t('login.pwdPlaceHolder')"
                        prefix-icon="el-icon-key" v-model="loginForm.password" show-password>
              </el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="remSwitch animated fadeInLeft">
          <div>
            <span style="color: gray;font-size: 14px">{{$t('login.noAccountTip')}}</span>
            <el-link class="regLink" :underline="false" type="primary" @click="goRegister">{{$t('login.register')}}
            </el-link>
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
    let checkEmail = (rule, value, callback) => {
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
      if (!value) {
        return callback(new Error(this.$t('register.emailNullError')))
      }
      setTimeout(() => {
        if (mailReg.test(value)) {
          callback()
        } else {
          callback(new Error(this.$t('register.emailFormatError')))
        }
      }, 100)
    }
    return {
      loginForm: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          { validator: checkEmail, trigger: 'blur' }
        ],
        password: [
          { required: true, message: this.$t('register.pswNullError'), trigger: 'blur' },
          { min: 5, max: 12, message: this.$t('register.pswFormatError'), trigger: 'blur' }
        ]
      },
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
    emailFocus () {
    },
    login () {
      const data = { email: this.loginForm.email, password: this.loginForm.password }
      this.$http.post('pub/login', this.$qs.stringify(data))
        .then(res => {
          if (res.data) {
            this.$router.replace({ path: '/' })
          }
        }).catch(err => {
          console.log(err)
        })
        /* login({ email: this.emailNum, password: this.password }).then(req => {
          this.$router.replace({ path: '/' })
          this.$store.commit('setToken', req.data)
        }).catch(err => {
          console.log(err)
        }) */
      // this.$store.commit('saveUserInfo', { emailNum: this.emailNum, password: this.password })
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
    margin: 0 3px;
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

  .chose-lang {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .spacingStyle {
    margin-bottom: 40px;
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
