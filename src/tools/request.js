/*
import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import { getTokenInLs, removeTokenInLs } from '@/tools/localStore'
import constantVar from './constantVar'

const service = axios.create({
  baseURL: 'http://localhost:9001/api', // api 的 base_url
  withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (getTokenInLs()) {
      config.headers[constantVar.TokenKey] = getTokenInLs()
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
    /!*  Message({
        message: res.msg,
        type: 'error',
        duration: 5 * 1000
      }) *!/
      if (res.code === 30001) {
        console.log('没有登录')
      } else if (res.code === 50001 || res.code === 50011) { // 50001:非法的token; 50011:Token 过期了;
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          removeTokenInLs()
          location.reload()
        })
      } else if (res.code === 60001) { // 无权限
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
      message: error,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
*/
