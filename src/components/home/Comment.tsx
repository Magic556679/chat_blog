interface CommentItem {
  _id: string
  user: {
    name: string
    photo: string
  }
  comment: string
  createdAt: string
}

interface CommentProps {
  data: CommentItem[]
}

const Comment = ({ data }: CommentProps) => {
  const formatData = (date: string) => {
    return date.split('T')[0]
  }

  return (
    <>
      <div>
        {data.map((item) => (
          <div className="flex px-4 py-[18px]" key={item._id}>
            <img
              className="w-[32px] h-[32px] mr-4 border-2 border-black rounded-full"
              src={item.user.photo}
            />
            <div>
              <div className="text-sm">
                <span>{item.user.name}</span> <span>{item.comment}</span>
                <p className="text-left">{formatData(item.createdAt)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Comment
