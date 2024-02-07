import axios from 'axios'

const service = axios.create({
  // baseURL: import.meta.env.DEV ? '/api' : import.meta.env.VITE_SERVER_BASE_API,
  baseURL: import.meta.env.VITE_SERVER_BASE_API,
  headers: {
    accept: 'application/json'
  },
  timeout: 30000
})

service.interceptors.request.use(
  (config) => {
    const getCookieTokenName: string | undefined = document.cookie
      .split('; ')
      .find((item) => item.includes('id_token='))
    const token: string | undefined = getCookieTokenName?.split('=')[1]

    if (config && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`
      return config
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
