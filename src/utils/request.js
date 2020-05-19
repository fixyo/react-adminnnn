import axios from 'axios'
import store from '@/store'
import { Modal } from 'antd'
import { getToken } from '@/utils/auth'
import { logout } from '@/store/actions'

const service = axios.create({
  baseUrl: process.env.REACT_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    if (store.getState().user.token) {
      config.headers.Authorization = getToken()
    }
    return config
  },

  error => {
    console.log(error)
    Promise.resolve(error)
  }
)


service.interceptors.response.use(
  response => response,
  err => {
    console.log('err:', err)
    const { status } = err.response
    if (status === 403) {
      Modal.confirm({
        title: '确定登出?',
        content: '登出',
        okText: '重新登录',
        cancelText: '取消',
        onOk() {
          let token = store.getState().user.token 
          store.dispatch(logout(token))
        },
        onCancel() {
          console.log('cancel')
        }
      })
    }
    return Promise.resolve(err)
  }
)

export default service

