import constantVar from './constantVar'

export function getTokenInLs () {
  console.log(sessionStorage.getItem(constantVar.TokenKey))
  return sessionStorage.getItem(constantVar.TokenKey)
}

export function setTokenInLs (token) {
  sessionStorage.setItem(constantVar.TokenKey, token)
}

export function removeTokenInLs () {
  sessionStorage.removeItem(constantVar.TokenKey)
}
