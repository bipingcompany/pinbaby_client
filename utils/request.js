import regeneratorRuntime from '../lib/regenerator/runtime-module'
const wxRequest = async (url, params = {}) => {
  let header = params.header || {
    'Content-Type': 'application/json'
  }
  // 所有的请求，header默认携带token
  Object.assign(header, {
    token: wx.getStorageSync('token') || ''
  })
  let data = params.data || {}
  let method = params.method || 'GET'
  // hideLoading可以控制是否显示加载状态
  if (!params.hideLoading) {
   wx.showLoading({
     title: '加载中...',
   })
  }
  let res = await new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: method,
      data: data,
      header: header,
      success: (res) => {
        if (res && res.statusCode == 200) {
          if (res.data.flag == -999) {
            wx.showToast({
              title: '请重新登陆',
              icon: 'none',
              duration: 2000
            })
            wx.clearStorage()
            wx.redirectTo({
              url: '/pages/login/login',
            })
          }
          resolve(res.data)
        } else  {
          wx.showLoading({
            title: '请求出错'
          })
          reject(res)
        }
      },
      fail: (err) => {
        reject(err)
      },
      complete: (e) => {
        wx.hideLoading()
      }
    })
  })
  return res
}

export {
  wxRequest
}