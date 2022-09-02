import server from '@/utils/request'

export const getMdfile = () => {
  return server({
    url: '/md',
    method: 'get',
  })
}
