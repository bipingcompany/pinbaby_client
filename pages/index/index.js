import regeneratorRuntime from '../../lib/regenerator/runtime-module'
import { commlist, temFormid } from '../../api/apis'
const app = getApp()
Page({
  data:{
    listData: null
  },
  onLoad: async function() {
    const data = await commlist()
    data.data.map(function(item){
      item.logoUrl = app.globalData.imgUrl + item.logoUrl;
      item.labels = item.labels.split(',');
      return item
    })
    this.setData({
      listData: data.data
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
    const data = e.detail.target.dataset
    await temFormid({
      data: {
        appletType: 1,
        frod: e.detail.formId,
        count: 1,
      }
    });
    wx.navigateTo({
      url: `/pages/detail/detail?commId=${data.id}`
    })
  }
})