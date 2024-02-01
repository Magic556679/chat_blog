import { ApiAddLike, ApiUnLike } from '@/services/post'
import { useAppSelector } from '@/store/hooks'
interface LikeProps {
  likeItem: string[]
  postId: string
}

const Likes = ({ likeItem, postId }: LikeProps) => {
  const user = useAppSelector((state) => state.user)
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
      const data = {
        postId: postId
      }
      await ApiAddLike(data)
      // update get All Posts
    } catch (err) {
      console.error(err)
    }
  }

  const unLike = async () => {
    try {
      const data = {
        postId: postId
      }
      await ApiUnLike(data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="text-left">
      <button onClick={toggleLike}>
        <i className="fa-regular fa-heart cursor-pointer mt-5 mr-2"></i>
      </button>
      {likeItem.length}
      <span className="text-sm">個讚</span>
    </div>
  )
}

export default Likes
