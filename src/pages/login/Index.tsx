import { Outlet } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'

const LoginIndex = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const nextPath = () => {
    const path = location.pathname === '/login' ? '/register' : '/login'
    navigate(path)
  }

  return (
    <>
      <div className="border border-black-600 border-solid text-center w-[350px] mx-auto mt-3 py-3">
        <h1 className="text-4xl mt-9 mb-3">Chat Blog</h1>
        <Outlet />
      </div>
      <div
        onClick={nextPath}
        className="border border-black-600 border-solid text-center w-[350px] mx-auto mt-3 py-3 cursor-pointer"
      >
        {location.pathname === '/login' ? '註冊' : '登入'}
      </div>
    </>
  )
}

export default LoginIndex
