import { Outlet } from 'react-router-dom'

const LoginIndex = () => {
  return (
    <div className="border border-black-600 border-solid text-center w-[350px] mx-auto mt-3 py-3">
      <h1 className="text-4xl mt-9 mb-3">Chat Blog</h1>
      <Outlet />
    </div>
  )
}

export default LoginIndex
