import service from '@/services/index'

interface LoginData {
  email: string
  password: string
}
export function login(data: LoginData) {
  return service({
    url: 'users/login',
    method: 'post',
    data
  })
}

interface registerData {
  name: string
  email: string
  password: string
}
export function register(data: registerData) {
  return service({
    url: 'users/register',
    method: 'post',
    data
  })
}
