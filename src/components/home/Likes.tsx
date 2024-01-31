interface LikeProps {
  likeTotal: string[]
}
const likes = ({ likeTotal }: LikeProps) => {
  return (
    <div className="text-left">
      <i className="fa-regular fa-heart cursor-pointer mt-5 mr-2"></i>
      {likeTotal.length}
      <span className="text-sm">個讚</span>
    </div>
  )
}

export default likes
