import { useState, useEffect } from 'react'
import { fetchAllPosts } from '@/services/post'
import SideBar from '@/pages/home/SideBar'
import Likes from '@/components/home/Likes'
import Comment from '@/components/home/Comment'

const Home = () => {
  const [search] = useState('')
  const [posts, setPosts] = useState([] as Array<PostType>)

  interface CommentItem {
    _id: string
    user: {
      name: string
      photo: string
    }
    comment: string
    createdAt: string
  }

  interface PostType {
    _id: string
    user: {
      name: string
      photo: string
    }
    content: string
    comments: CommentItem[]
    image: string
    likes: Array<string>
    createAt: string
  }

  useEffect(() => {
    const getPostsData = async () => {
      try {
        const { data } = await fetchAllPosts({ search })
        setPosts(data.data)
      } catch (err) {
        console.error(err)
      }
    }
    getPostsData()
  }, [search])

  const formatData = (date: string) => {
    return date.split('T')[0]
  }

  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="grow flex">
          <div className="md:w-[30%]"></div>
          <article className="w-[470px] text-center ">
            {posts.map((item, index) => (
              <div key={item._id}>
                {index !== 0 && (
                  <div className={'my-3 h-[1px] w-full bg-black'}></div>
                )}
                <div className="flex items-center">
                  <img
                    src={item.user.photo}
                    alt={item.user.name}
                    className="w-[32px] h-[32px] mr-4 border-2 border-black rounded-full"
                  />
                  <div className="text-xs">
                    <span>{item.user.name}</span>
                    <span>•</span>
                    <span>{formatData(item.createAt)}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-left">{item.content}</p>
                  <div
                    className="mt-4 w-full h-52 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                </div>
                <Likes likeItem={item.likes} postId={item._id} />
                <Comment data={item.comments} />
              </div>
            ))}
          </article>
        </div>
      </div>
      <Modal />
    </div>
  )
}

export default Home
