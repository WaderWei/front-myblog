<template>
  <div class="login-container">
    <div class="logo animated bounceInDown" @click="backHome">
      <my-logo/>
    </div>
    <div class="login-div animated zoomIn">
      <el-card class="box-card">
        <div class="login-title">
          <div class="animated bounceInLeft">登</div><div class="splitRedis animated bounceInDown"></div><div class="animated bounceInRight">录</div>
        </div>
        <div class="login-input">
          <el-input
            placeholder="请输入手机号"
            prefix-icon="el-icon-phone-outline" v-model="phoneNum" clearable>
          </el-input>
          <el-input placeholder="请输入密码"
                    prefix-icon="el-icon-key" v-model="password" show-password>
          </el-input>
        </div>
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
      phoneNum: '',
      password: ''
    }
  },
  created () {
  },
  methods: {
    backHome () {
      this.$router.replace({ path: '/' })
    }
  }
}
</script>

<style scoped>
  .login-container{
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #eceefe;
  }
  .logo{
    margin-top: 6%;
  }
  .login-div{
    width:320px;
  }
  .splitRedis{
    padding: 3px;
    align-self: center;
    margin: 0 10px;
    background-color: gray;
    border-radius: 3px;
  }
  .login-title{
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-weight: bold;
    color: #b096ff;
    margin: 30px 0;
  }
</style>
