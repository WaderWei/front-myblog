import request from '@/tools/request'

export function login (data) {
  console.log(data)
  return request({
    url: 'user/login',
    methods: 'post',
    data
  })
}

export function getInfo (data) {
  return request({
    url: 'user/info',
    methods: 'get',
    data
  })
}

export function logout (data) {
  return request({
    url: 'user/logout',
    methods: 'post',
    data
  })
}
