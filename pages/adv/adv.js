Page({
  data: {
    clientHeight: ''
  },
  onLoad: function(e) {
    // 动态改变scroll区域的高度
    let height = wx.getSystemInfoSync().windowHeight;
    this.setData({
      clientHeight: height - 200
    })
  }
})
