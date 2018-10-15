import regeneratorRuntime from '../../lib/regenerator/runtime-module'
import { userLogin, getPhone } from '../../api/apis'
const app = getApp()
Page({
  data: {
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    fromPath: null
  },
  // 开发版第一次授权
  getUserInfo: async function(e) {
    this.userLogin(e.detail)
  },
  // 手机号授权
  getPhoneNumber: async function(e) {
    const data = await getPhone({
      data: {
        appletType: 1,
        code: app.globalData.loginInfo.code,
        iv: e.detail.iv,
        encryData: e.detail.encryptedData
      }
    })
  },
  userLogin: async function(e) {
    const user = await userLogin({
      data: {
        appletType: 1,
        code: app.globalData.loginInfo.code,
        iv: e.iv,
        encryData: e.encryptedData,
      }
    })
    this.setData({
      hasUserInfo: true
    })
    wx.setStorageSync('user', user.data)
    wx.setStorageSync('token', user.data.token)
    wx.reLaunch({
      url: app.globalData.fromPath
    })
  }
})