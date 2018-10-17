import regeneratorRuntime from '../../lib/regenerator/runtime-module'
import { spellorder } from '../../api/apis'
import { convertDate } from '../../utils/util'

Page({
  data:{
    listData: null,
    orderType: 'ALL'
  },
  onLoad: function(options){
    // 生命周期函数--监听页面加载
    this.getListdata()
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
  tabClick: function(e) {
    const { name } = e.currentTarget.dataset
    this.setData({
      orderType : name
    })
    this.getListdata()
  },
  getListdata: async function() {
    const data = await spellorder({
      data: {
        orderType: this.data.orderType,
        pageNumber: 1,
        pageSize: 1000
      }
    })
    data.data.map(function(item){
      item.createTime = convertDate(item.createTime, 'YYYY.MM.DD')
      return item
    })
    this.setData({
      listData: data.data
    })
  }
})