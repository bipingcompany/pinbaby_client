import regeneratorRuntime from '../../lib/regenerator/runtime-module'
import { commDetail, temFormid } from '../../api/apis'
const app = getApp()
Page({
  data:{
    detailData: null,
    commId: null
  },
  onLoad: async function(options){
    // 生命周期函数--监听页面加载
    let { commId } = options
    const data = await commDetail({
      data: {
        commId: commId
      }
    })
    data.data.logoUrl = app.globalData.imgUrl + data.data.logoUrl;
    data.data.labels = data.data.labels.split(',');
    this.setData({
      detailData: data.data,
      commId: commId
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
  formId: async function(e) {
    console.log(1)
    await temFormid({
      data: {
        appletType: 1,
        frod: e.detail.formId,
        count: 1,
      }
    });
  },
  goPay: function(e) {
    let dataset = e.target.dataset
    wx.navigateTo({
      url: `/pages/pay/pay?type=${dataset.type}&commId=${this.data.commId}`
    })
  },
  goIndex: function() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  }
}) 