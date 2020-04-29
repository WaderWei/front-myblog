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
          <el-form :model="registerForm" :rules="rules" ref="registerForm">
            <el-form-item prop="email" class="spacingStyle">
              <el-input
                class="animated rotateInDownLeft"
                :placeholder="$t('register.emailPlaceHolder')"
                prefix-icon="el-icon-user" v-model="registerForm.email" clearable
              >
              </el-input>
            </el-form-item>
            <el-form-item prop="password" class="spacingStyle">
              <el-input class="animated rotateInUpRight"
                        :placeholder="$t('register.pwdPlaceHolder')"
                        prefix-icon="el-icon-key" v-model="registerForm.password" show-password>
              </el-input>
            </el-form-item>
            <div class="verCode">
              <el-form-item prop="verificationCode">
                <el-input
                  class="animated fadeInRight"
                  prefix-icon="el-icon-unlock"
                  :placeholder="$t('register.CaptchaPlaceHolder')" v-model="registerForm.verificationCode" clearable
                >
                </el-input>
              </el-form-item>
              <el-button class="animated fadeInLeft" :disabled="btn.disabled" @click="clickCodeBtn" type="success">{{btn.content}}</el-button>
            </div>
          </el-form>
        </div>
        <div class="remSwitch animated fadeInLeft">
          <div>
            <span style="color: gray;font-size: 14px">{{$t('register.hasAccountTip')}}</span>
            <el-link class="regLink" :underline="false" type="primary" @click="goLogin">{{$t('register.login')}}
            </el-link>
          </div>
        </div>
        <el-button class="registerBtn animated rubberBand" type="primary" @click="register" round>
          {{$t('register.register')}}
        </el-button>
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
    let checkEmail = (rule, value, callback) => {
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
      if (!value) {
        return callback(new Error(this.$t('register.emailNullError')))
      }
      if (!mailReg.test(value)) {
        return callback(new Error(this.$t('register.emailFormatError')))
      }
      this.checkEmailIsRegister(value, callback)
    }
    return {
      countDownInterval: null,
      registerForm: {
        email: '',
        password: '',
        verificationCode: ''
      },
      rules: {
        email: [
          { validator: checkEmail, trigger: 'blur' }
        ],
        password: [
          { required: true, message: this.$t('register.pswNullError'), trigger: 'blur' },
          { min: 5, max: 12, message: this.$t('register.pswFormatError'), trigger: 'blur' }
        ],
        verificationCode: [
          { required: true, message: this.$t('register.verityNullError'), trigger: 'blur' },
          { min: 5, max: 5, message: this.$t('register.verityFormatError'), trigger: 'blur' }
        ]
      },
      btn: {
        disabled: false,
        content: this.$t('register.getCaptcha'),
        num: 300
      }
    }
  },
  created () {
  },
  watch: {// 重点** 解决i18n 切换语言，js中写时语言不切换
    '$i18n.locale' () {
      this.btn.content = this.$t('register.getCaptcha')
    }
  },
  methods: {
    backHome () {
      this.$router.replace({ path: '/' })
    },
    goLogin () {
      this.$router.replace({ path: 'login' })
    },
    register () {
      this.$refs['registerForm'].validate((valid) => {
        if (valid) {
          this.$http.post('pub/register', this.$qs.stringify(this.registerForm))
            .then(res => {
              if (!this.countDownInterval) {
                clearInterval(this.countDownInterval)
              }
              if (res.data) {
                this.$alert('注册成功,将跳转到登录页面', '成功', {
                  confirmButtonText: '确定',
                  callback: action => {
                    this.$message({
                      type: 'info',
                      message: `action: ${action}`
                    })
                    this.$router.push({ path: 'login' })
                  }
                })
              } else {
                this.$message({
                  showClose: true,
                  message: '验证码错误',
                  type: 'error'
                })
              }
            })
        }
      })
    },
    emailFocus () {
    },
    async checkEmailIsRegister (val, callback) {
      let result = await this.$http.get('user/pub/verifyExist', {
        params: {
          email: val
        }
      })
      if (result.data) {
        return callback()
      } else { // false 表示已存在
        return callback(new Error(this.$t('register.emailExistError')))
      }
    },
    getCode () {
      this.countDownInterval = this.countDown()
      let data = { email: this.registerForm.email, password: this.registerForm.password }
      this.$http.post('user/pub/code', this.$qs.stringify(data))
        .then(res => {
          if (res.code !== 200) {
            this.btn.disabled = false
            this.btn.content = this.$t('register.getCaptcha')
            this.btn.num = 300
            if (this.countDownInterval != null) {
              clearInterval(this.countDownInterval)
            }
          }
        })
    },
    countDown () {
      let that = this
      this.btn.disabled = true // 按钮不可用
      this.countDownInterval = setInterval(function () {
        if (that.btn.num < 1) {
          that.btn.disabled = false
          that.btn.content = that.$t('register.getCaptcha')
          clearInterval(this.countDownInterval)
        } else {
          that.btn.content = that.btn.num
          that.btn.num--
        }
      }, 1000)
    },
    clickCodeBtn () {
      this.waitValid().then(b => {
        if (b) {
          this.getCode()
        } else {
          console.log(b)
        }
      })
    },
    /* 重点** 一个异步的方法执行完，再执行其它方法的解决方案 */
    waitEmail () {
      return new Promise((resolve, reject) => {
        this.$refs['registerForm'].validateField('email', validateMsg => {
          resolve(!validateMsg)
        })
      })
    },
    waitValid () {
      return new Promise((resolve, reject) => {
        this.waitEmail().then(b => {
          this.$refs['registerForm'].validateField('password', validateMsg => {
            resolve(!validateMsg && b)
          })
        })
      })
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

  .chose-lang {
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

  .spacingStyle {
    margin-bottom: 30px;
  }

  .verCode {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
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
