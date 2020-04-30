import axios from 'axios'
import { MessageBox, Message, Loading } from 'element-ui'
import { getTokenInLs, removeTokenInLs } from '@/tools/localStore'
import constantVar from './constantVar'

axios.defaults.baseURL = 'http://192.168.0.120:9001/api'
axios.defaults.withCredentials = true
axios.defaults.timeout = 50000

// 开始加载动画
let loading
function openLoading () {
  loading = Loading.service({
    lock: true, // 是否锁定
    text: '拼命加载中...', // 加载中需要显示的文字
    background: 'rgba(0,0,0,.7)'// 背景颜色
  })
}
// 结束加载动画
function closeLoading () {
  loading.close()
}

export default function setAxios () {
  axios.interceptors.request.use(
    request => {
      openLoading()
      if (getTokenInLs()) {
        request.headers[constantVar.TokenKey] = getTokenInLs()
      }
      return request
    },
    error => {
      closeLoading()
      return Promise.reject(error)
    }
  )

  axios.interceptors.response.use(
    response => {
      closeLoading()
      const res = response.data
      if (res.code !== 200) {
        /*  Message({
            message: res.msg,
            type: 'error',
            duration: 5 * 1000
          }) */
        if (res.code === -1) {
          console.log(res) // 服务器未知错误
        }
        if (res.code === 30001) {
          console.log('没有登录')
        } else if (res.code === 50001 || res.code === 50011) { // 50001:非法的token; 50011:Token 过期了;
          /* MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
          }) */
          removeTokenInLs()
        } else if (res.code === 60001) { // 无权限
          Message({
            message: '您没有权限哦',
            type: 'error',
            duration: 5 * 1000
          })
        } else if (res.code === 80001) { // 用户已经存在
          Message({
            message: res.msg,
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
      closeLoading()
      console.log('err' + error) // for debug
      Message({
        message: error,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    }
  )
}
