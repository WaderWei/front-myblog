import request from '@/tools/request'

export function login (data) {
  console.log(data)
  return request({
    url: 'pub/login',
    methods: 'post',
    data
  })
}

export function getInfo (data) {
  return request({
    url: 'authc/user/info',
    methods: 'get',
    params: data
  })
}

export function logout () {
  return request({
    url: 'logout',
    methods: 'post'
  })
}
