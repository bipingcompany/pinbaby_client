import regeneratorRuntime from '../lib/regenerator/runtime-module'
import { wxRequest } from '../utils/request'
import URLS from './urls'
// 登录
export const userLogin = params => wxRequest(URLS.USERLOGIN, {
  method: 'POST',
  hideLoading: true,
  data: params.data,
  header: {
    'content-type': 'application/x-www-form-urlencoded'
  }
})
// 收集手机号
export const getPhone = params => wxRequest(URLS.GETPHONE, {
  method: 'POST',
  data: params.data,
  header: {
    'content-type': 'application/x-www-form-urlencoded'
  }
})

// 收集fromId
export const temFormid = params => wxRequest(URLS.TEMFORMID, {
  method: 'POST',
  hideLoading: true,
  data: params.data,
  header: {
    'content-type': 'application/x-www-form-urlencoded'
  }
})

// 商品列表
export const commlist = params => wxRequest(URLS.COMMLIST)

// 商品详情
export const commDetail = params => wxRequest(URLS.COMMDTAIL, {
  data: params.data
})

// 单买
export const singlePay = params => wxRequest(URLS.SINGLEPAY, {
  method: 'POST',
  data: params.data,
  header: {
    'content-type': 'application/x-www-form-urlencoded'
  }
})

// 组团买
export const groupPay = params => wxRequest(URLS.GROUPPAY, {
  method: 'POST',
  data: params.data,
  header: {
    'content-type': 'application/x-www-form-urlencoded'
  }
})

// 下单结果
export const groupResult = params => wxRequest(URLS.GROUPRESULT, {
  method: 'POST',
  data: params.data,
  header: {
    'content-type': 'application/x-www-form-urlencoded'
  }
})

// 加入拼团下单
export const invokeGroup = params => wxRequest(URLS.INVOKEGROUP, {
  method: 'POST',
  data: params.data,
  header: {
    'content-type': 'application/x-www-form-urlencoded'
  }
})

export const spellorder = params => wxRequest(URLS.SPELLORDER, {
  data: params.data
})