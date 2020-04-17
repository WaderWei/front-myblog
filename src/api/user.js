import request from '@/tools/request'

export function login (data) {
  return request({
    url: 'pub/login',
    methods: 'get',
    params: data
  })
}

export function getInfo (data) {
  return request({
    url: 'user/info',
    methods: 'get',
    params: data
  })
}

export function logout (data) {
  return request({
    url: 'user/logout',
    methods: 'post',
    data
  })
}
