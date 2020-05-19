import * as types from '../action-types'
import { getToken } from '@/utils/auth'

const initUserInfo = {
  name: '',
  role: '',
  avatar: '',
  token: getToken()
}

const user = (state = initUserInfo, action) => {
  switch(action.type) {
    case types.USER_SET_USER_INFO:
      return {
        ...state,
        ...action.userInfo 
      }
    case types.USER_SET_USER_TOKEN:
      return {
        ...state,
        token: action.token 
      }
    default:
      return state 
  }
}

export default user 