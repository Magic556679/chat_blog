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
