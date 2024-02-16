import { useAppSelector } from '@/store/hooks'

const useCheckLogin = () => {
  const user = useAppSelector((state) => state.user)
  if (user.userId) return true
  return false
}

export { useCheckLogin }
