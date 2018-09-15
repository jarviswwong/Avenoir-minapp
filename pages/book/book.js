// pages/book/book.js
import {
  BookModel
} from '../../models/book';
const book = new BookModel();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    bookDatas: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    book.getHotList().then(res => {
      this.setData({
        bookDatas: res
      });
    });
  },

  /**
   * 监听Book点击事件并跳转到Book详情
   */
  onBookDetailTap: function (event) {
    const bid = event.detail.bid;
    wx.navigateTo({
      url: `/pages/book-detail/book-detail?bid=${bid}`,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {}
});