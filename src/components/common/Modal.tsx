import { useAppSelector } from '@/store/hooks'
import { useDispatch } from 'react-redux'
import { setToggle } from '@/store/modal'
import Login from '@/pages/login/Login'

const Model = () => {
  const dispatch = useDispatch()
  const handleCloseModal = () => {
    dispatch(setToggle())
  }

  const model = useAppSelector((state) => state.modal)
  return (
    <div
      className={`bg-gray-600/50 w-full h-full absolute top-0 left-0 ${
        model.isShow ? 'block' : 'hidden'
      }`}
    >
      {model.isShow && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/12 bg-white p-4  text-right rounded-lg">
          <span onClick={handleCloseModal} className="cursor-pointer">
            <i className="fa fa-times"></i>
          </span>
          <h1 className="text-4xl mt-9 mb-3 flex justify-center">Chat Blog</h1>
          <Login />
        </div>
      )}
    </div>
  )
}

export default Model
