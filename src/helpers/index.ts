import { AxiosError } from 'axios'

const isAuth = (err: Error) => {
  if (err instanceof AxiosError && err.response?.status === 401) {
    // const useModel = useModelStore()
    // useModel.openModel()
  }
  console.error(err)
}

export { isAuth }
