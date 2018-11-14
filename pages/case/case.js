Page({
  data: {
    clientHeight: '',
    detail_links: [
      'https://statich.yidianzixun.com/public/file/1542188763192/case1.png',
      'https://statich.yidianzixun.com/public/file/1542188763192/case2.png',
      'https://statich.yidianzixun.com/public/file/1542188763192/case3.png'
    ]
  },
  onLoad: function (e) {
    wx.setNavigationBarTitle({
      title: '案例'
    })
    // 动态改变scroll区域的高度
    let height = wx.getSystemInfoSync().windowHeight;
    this.setData({
      clientHeight: height - 40
    })
  }
})
