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
