import { ApiAddLike, ApiUnLike } from '@/services/post'
import { useAppSelector } from '@/store/hooks'
import { useDispatch } from 'react-redux'
import { setToggle, setModelType } from '@/store/modal'
import { isAuth } from '@/helpers/index'

interface LikeProps {
  likeItem: string[]
  postId: string
  handleGetPostData: () => void
}

const Likes = ({ likeItem, postId, handleGetPostData }: LikeProps) => {
  const user = useAppSelector((state) => state.user)
  const dispatch = useDispatch()

  const isLiked = () => {
    return likeItem.includes(user.userId)
  }

  const toggleLike = () => {
    if (isLiked()) {
      unLike()
    } else {
      addLike()
    }
  }

  const addLike = async () => {
    try {
      const data = { postId }
      await ApiAddLike(data)
      handleGetPostData()
    } catch (err) {
      isAuth(err as Error)
      dispatch(setToggle())
      dispatch(setModelType('login'))
    }
  }

  const unLike = async () => {
    try {
      const data = { postId }
      await ApiUnLike(data)
      handleGetPostData()
    } catch (err) {
      isAuth(err as Error)
      dispatch(setToggle())
      dispatch(setModelType('login'))
    }
  }

  return (
    <div className="text-left">
      <button onClick={toggleLike}>
        <i
          className={`fa-regular fa-heart cursor-pointer mt-5 mr-2 ${
            isLiked() ? 'text-red-500' : ''
          }`}
        ></i>
      </button>
      {likeItem.length}
      <span className="text-sm">個讚</span>
    </div>
  )
}

export default Likes
