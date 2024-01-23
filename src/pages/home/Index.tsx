import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchAllPosts } from '@/services/post'
import SideBar from '@/pages/home/SideBar'

const Home = () => {
  const [search] = useState('')
  const [posts, setPosts] = useState([] as Array<PostType>)

  interface PostType {
    id: number
    title: string
    content: string
    created_at: string
  }
  useEffect(() => {
    const getPostsData = async () => {
      try {
        const { data } = await fetchAllPosts({ search })
        setPosts(data.posts)
      } catch (err) {
        console.error(err)
      }
    }
    getPostsData()
  }, [search])

  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="w-[80%]">
          {posts.map((item) => (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.content}</p>
              <p>建立時間：{item.created_at}</p>
              <Link to={`/edit/${item.id}`}>前往編輯</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
