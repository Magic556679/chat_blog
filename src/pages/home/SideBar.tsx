import { useNavigate } from 'react-router-dom'
import { useCheckLogin } from '@/hook/hooks'
import { useDispatch } from 'react-redux'
import { setToggle, setModelType } from '@/store/modal'
import { reset } from '@/store/userSlice'

const SideBar = () => {
  const checkLogin = useCheckLogin()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const openLoginModal = (type: string) => {
    dispatch(setToggle())
    dispatch(setModelType(type))
  }

  const enterHomePage = () => {
    navigate('/')
  }

  const signOut = () => {
    dispatch(reset())
    document.cookie = 'id_user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    document.cookie =
      'id_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  }

  return checkLogin ? (
    <div className="w-[200px] px-3 pt-2 flex flex-col border-r border-gray-300 border-solid">
      <button type="button" onClick={enterHomePage} className="flex">
        <i className="fa-solid fa-house text-2xl"></i>
        <p className="hidden sm:block ml-4">首頁</p>
      </button>
      <button type="button" className="flex mt-5">
        <i className="fa-solid fa-pen-to-square text-2xl"></i>
        <p className="hidden sm:block ml-4">修改個人資料</p>
      </button>
      <button type="button" onClick={signOut} className="flex mt-5">
        <i className="fa-solid fa-arrow-right-from-bracket text-2xl"></i>
        <p className="hidden sm:block ml-4">登出</p>
      </button>
    </div>
  ) : (
    <div className="w-[200px] px-3 pt-2 flex flex-col items-center border-r border-gray-300 border-solid">
      <div
        onClick={() => {
          openLoginModal('login')
        }}
        className="w-[35%] py-1 px-1 rounded-lg text-white bg-[#0077C5] shadow-3xl text-center cursor-pointer"
      >
        登入
      </div>
      <div
        onClick={() => {
          openLoginModal('register')
        }}
        className="w-[35%] mt-2 py-1 px-1  rounded-lg text-white bg-[#0077C5] shadow-3xl text-center cursor-pointer"
      >
        註冊
      </div>
    </div>
  )
}

export default SideBar
