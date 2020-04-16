import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import { getToken, removeToken } from '@/tools/auth'
import constantVar from './constantVar'

// create an axios instance
const service = axios.create({
  baseURI: 'http://192.168.0.120:9001/api/pub/login',
  withCredentials: true,
  timeout: 5000
})

// request interceptor

service.interceptors.request.use(
  config => {
    console.log(config)
    if (getToken) {
      config.headers[constantVar.TokenKey] = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })
      // 50001:非法的token; 50011:Token 过期了;
      if (res.code === 50001 || res.code === 50011) {
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          removeToken()
          location.reload()
        })
      } else if (res.code === 60021) {
        Message({
          message: '您没有权限哦',
          type: 'error',
          duration: 5 * 1000
        })
      }
      return res
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
