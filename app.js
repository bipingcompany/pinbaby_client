import URLS from './api/urls'
App({
  onLaunch: function(path) {
    this.globalData.fromPath = '/' + path.path
    // 登录
    let that = this;
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        that.globalData.loginInfo = res
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              //  向后台发请求传用户信息
              let url = URLS.HOSTURL + 'userLogin';
              wx.request({
                url: url,
                method: 'POST',
                data: {
                  appletType: 1,
                  code: that.globalData.loginInfo.code,
                  iv: res.iv,
                  encryData: res.encryptedData,
                },
                header: {
                  'content-type': 'application/x-www-form-urlencoded',
                },
                success: function(res) {
                  wx.setStorageSync('user', res.data.data)
                  wx.setStorageSync('token', res.data.data.token)
                },
                fail: function(res) {
                  console.log('fail=>', res)
                }
              })
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        } else {
          wx.reLaunch({
            url: '/pages/login/login'
          })
        }
      }
    })
  },
  globalData: {
    loginInfo: null,
    fromPath: null,
    imgUrl: 'https://lodis.oss-cn-beijing.aliyuncs.com'
  }
})