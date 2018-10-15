import regeneratorRuntime from '../../lib/regenerator/runtime-module'
import { groupResult } from '../../api/apis'

Page({
  data:{
    resultData: null
  },
  onLoad: async function(options){
    console.log(options)
    // 生命周期函数--监听页面加载
    let { nemoreId, commId } = options;
    let data = await groupResult({
      data: {
        nemoreId: nemoreId
      }
    })
    console.log('=>', data.data)
    console.log(data.data.groupStatus == 'DOING' && data.data.alreadStatus)
    if (data.data.groupStatus == 'DOING' && !data.data.alreadStatus) {
      console.log(11111)
      wx.redirectTo({
        url: `/pages/joinGroup/joinGroup?nemoreId=${nemoreId}&commId=${commId}`
      })
    } else {
      console.log(22222)
    }
    this.setData({
      commId: commId,
      nemoreId: nemoreId,
      resultData: data.data
    })
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      // title: 'title', // 分享标题
      // desc: 'desc', // 分享描述
      // path: 'path' // 分享路径
    }
  },
  goDetail: function() {
    wx.navigateTo({
      url: `/pages/detail/detail?commId=${this.data.commId}`
    })
  },
  goIndex: function() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  }
})