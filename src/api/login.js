import request from '@/utils/request' 

export const reqLogin = data => {
  return request({
    url: '/login',
    method: 'POST',
    data 
  })
}

export const reqLogout = data => {
  return request({
    url: '/logout',
    method: 'POST',
    data 
  })
}
