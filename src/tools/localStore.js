import constantVar from './constantVar'

export function getTokenInLs () {
  return sessionStorage.getItem(constantVar.TokenKey)
}

export function setTokenInLs (token) {
  sessionStorage.setItem(constantVar.TokenKey, token)
}

export function removeTokenInLs () {
  sessionStorage.removeItem(constantVar.TokenKey)
}
