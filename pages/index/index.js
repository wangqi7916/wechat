//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    autoplay: true,
    interval: 3000,
    duration: 300,
    circular: true, // 是否衔接滑动
    // 切换图
    imgUrls: [
      {
        'imgUrl': './image/bg.png',
        'isTrue': true
      },
      {
        'imgUrl': './image/bg.png',
        'isTrue': false
      }
    ],
    // button
    nav_list: [{
        url: '../adv/adv',
        img_url: './image/adv.png'
      },
      {
        url: '../case/case',
        img_url: './image/case.png'
      },
      {
        url: '../product/product',
        img_url: './image/product.png'
      },
      {
        url: '../information/information',
        img_url: './image/information.png'
      }]
  },
  changeImg: function(e) {
    let index = e.detail.current
    let arr = this.data.imgUrls

    for (let i = 0; i< arr.length; i++) {
      if (i == index) {
        arr[i].isTrue = true;
      } else {
        arr[i].isTrue = false;
      }
    }

    this.setData({
      imgUrls: arr
    })
  }
})
