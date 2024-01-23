import service from '@/services/index'

interface SearchContent {
  search: string
}
export function fetchAllPosts(data: SearchContent) {
  return service({
    url: '/post',
    method: 'get',
    params: data
  })
}
