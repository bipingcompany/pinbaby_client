import regeneratorRuntime from '../../lib/regenerator/runtime-module'
import { commDetail, singlePay, groupPay, invokeGroup } from '../../api/apis'

Page({
  data:{
    type: null, // 1 单买 2 拼团 3 加入拼团
    commId: null,
    nemoreId: null,
    detailData: null,
  },
  onLoad: async function(options){
    // 生命周期函数--监听页面加载
    let { type, commId, nemoreId } = options;
    const data = await commDetail({
      data: {
        commId: commId,
      }
    })
    this.setData({
      type: type,
      commId: commId,
      nemoreId: nemoreId,
      detailData: data.data
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
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
  singlePay: async function() {
    const data = await singlePay({
      data: {
        goodId: this.data.commId
      }
    })
    const msg = data.data
    this.payment(msg)
  },
  groupPay: async function() {
    const data = await groupPay({
      data: {
        goodCommId: this.data.commId
      }
    })
    const msg = data.data
    this.payment(msg)
  },
  invokeGroup: async function() {
    const data = await invokeGroup({
      data: {
        nemoreId: this.data.nemoreId
      }
    })
    const msg = data.data
    this.payment(msg)
  },
  payment: function(msg) {
    let that = this
    wx.requestPayment({
      'timeStamp': msg.timeStamp,
      'nonceStr': msg.nonceStr,
      'package': msg.package,
      'signType': msg.signType,
      'paySign': msg.paySign,
      'success':function(res){
        if (that.data.type == 1) {
          wx.navigateTo({
            url: '/pages/index/index'
          })
        } else {
          wx.navigateTo({
            url: `/pages/result/result?nemoreId=${msg.nemoreId}&commId=${that.data.commId}`
          })
        }
      },
      'fail':function(res){
        wx.showToast({
          title: '支付失败',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  goResult: function() {
    if (this.data.type == 1) {
      this.singlePay()
    } else if(this.data.type == 2) {
      this.groupPay()
    } else {
      this.invokeGroup()
    }
  }
})