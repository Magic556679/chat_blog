import service from '@/services/index'

interface SearchContent {
  search: string
}
export function fetchAllPosts(data: SearchContent) {
  return service({
    url: '/posts',
    method: 'get',
    params: data
  })
}

interface addLikeData {
  postId: string
}

export function ApiAddLike(data: addLikeData) {
  return service({
    url: `posts/${data.postId}/like`,
    method: 'post'
  })
}

export function ApiUnLike(data: addLikeData) {
  return service({
    url: `posts/${data.postId}/like`,
    method: 'delete',
    data
  })
}
