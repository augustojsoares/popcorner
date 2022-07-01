import Axios from 'axios'
import { BASE_API_URL } from 'config'

// function envRequestInterceptor(config) {
//   config.params = namespace
//   return config
// }

// function responseInterceptor(response: any) {
//   return response.data
// }

// function errorInterceptor(error: any) {
//   const message = error.response?.data?.message || error.message
//   return Promise.reject(message)
// }

const axios = Axios.create({
  baseURL: BASE_API_URL,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
})
export default axios

// axios.interceptors.request.use(envRequestInterceptor)
// axios.interceptors.response.use(responseInterceptor, errorInterceptor)
