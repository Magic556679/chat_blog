import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE_API,
  headers: {
    accept: 'application/json',
  },
  timeout: 30000,
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

service.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default service
