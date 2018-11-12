// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgDatas: [
      {
        bgColor: '#933aee',
        img: './image/detail1.png'
      },
      {
        bgColor: '#933aee',
        img: './image/detail1.png'
      }
    ],
    imgData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _that = this;
    let data = _that.data.imgDatas
    for(let i = 0; i< data.length; i++) {
      if (options.id == i) {
        _that.setData({
          imgData: data[i]
        })
        console.log(_that.data.imgData)
      }
    }
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

  }
})