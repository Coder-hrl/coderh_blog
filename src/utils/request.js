import axios from 'axios'

const server = axios.create({
  baseURL: 'http://localhost:3003',
  timeout: 3000,
})

server.interceptors.response.use((res) => {
  return res.data
})

export default server
