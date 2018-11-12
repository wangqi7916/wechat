Page({
  data: {
    clientHeight: '',
    detail_links: [
      './image/case1.png',
      './image/case2.png',
      './image/case2.png'
    ]
  },
  onLoad: function (e) {
    // 动态改变scroll区域的高度
    let height = wx.getSystemInfoSync().windowHeight;
    this.setData({
      clientHeight: height - 40
    })
  }
})
