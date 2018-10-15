import regeneratorRuntime from '../../lib/regenerator/runtime-module'
import { commDetail, groupResult } from '../../api/apis'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData: null,
    commId: null,
    nemoreId: null,
    resultData: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    console.log(options)
    let { commId, nemoreId } = options
    const data = await commDetail({
      data: {
        commId: commId
      }
    })
    const result = await groupResult({
      data: {
        nemoreId: nemoreId
      }
    })
    data.data.logoUrl = app.globalData.imgUrl + data.data.logoUrl;
    data.data.labels = data.data.labels.split(',');
    this.setData({
      detailData: data.data,
      commId: commId,
      nemoreId: nemoreId,
      resultData: result.data
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  formId: function() {
    console.log(1)
    
  },
  invokeGroup: function() {
    wx.navigateTo({
      url: `/pages/pay/pay?type=3&commId=${this.data.commId}&nemoreId=${this.data.nemoreId}`
    })
  }
})