Page({
  data: {
    clientHeight: '',
    detail_links: [
      'https://statich.yidianzixun.com/public/file/1542184054012/case1.png',
      'https://statich.yidianzixun.com/public/file/1542184054012/case2.png',
      'https://statich.yidianzixun.com/public/file/1542184054012/case3.png'
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
