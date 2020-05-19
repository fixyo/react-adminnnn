import * as types from '../action-types'
import { getUser } from '@/api/user'

export const getUserInfo = token => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      getUserInfo(token)
        .then(res => {
          const { data } = res 
          if (data.status === 0) {
            const userInfo = data.userInfo 
            dispatch(setUserInfo(userInfo))
            resolve(data)
          }
        })
    })
  }
}

export const setUserInfo = userInfo => {
  return {
    type: types.USER_SET_USER_INFO,
    userInfo  
  }
}

export const setUserToken = token => {
  return {
    type: types.USER_SET_USER_TOKEN,
    token 
  }
}