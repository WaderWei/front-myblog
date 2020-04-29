import Cookies from 'js-cookie'
import constantVar from '@/tools/constantVar'

export function getToken () {
  return Cookies.get(constantVar.TokenKey)
}

export function setToken (token) {
  return Cookies.set(constantVar.TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(constantVar.TokenKey)
}
