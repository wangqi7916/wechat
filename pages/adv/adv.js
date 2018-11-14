Page({
  data: {
    clientHeight: '',
    imgUrl: [
      'https://statich.yidianzixun.com/public/file/1542184054012/advPic1.png',
      'https://statich.yidianzixun.com/public/file/1542186788439/advPic2.png',
      'https://statich.yidianzixun.com/public/file/1542186788439/advPic3.png'
    ]
  },
  onLoad: function(e) {
    wx.setNavigationBarTitle({
      title: '优势'
    })
    // 动态改变scroll区域的高度
    let height = wx.getSystemInfoSync().windowHeight;
    this.setData({
      clientHeight: height - 200
    })
  }
})
