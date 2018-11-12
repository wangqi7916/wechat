Page({
  data: {
    // 全局index
    globalIndex: 1,
    // 产品图片索引
    productIndex: 0,
    // 产品列表
    globalList: {},
    // 产品图片
    productImg: {},
    // 产品图片外层高度
    clientHeight: '',
    // 头部导航data
    nav_list: [
      {
        "title": '生态流量',
        "index": 0,
        "activity": false,
      },
      {
        "title": '信息流广告',
        "index": 1,
        "activity": true,
      },
      {
        "title": '智能化产品',
        "index": 2,
        "activity": false,
      }, 
      {
        "title": '生态流量',
        "index": 3,
        "activity": false,
      },
      {
        "title": '信息流广告',
        "index": 4,
        "activity": false,
      },
      {
        "title": '智能化产品',
        "index": 5,
        "activity": false,
      }
    ],
    // 中间data
    content_list: [
      {
        'imgUrl': [
          {
            'outImg': 'https://statich.yidianzixun.com/public/file/1539245717671/tu1.png',
            'isTrue': true
          },
          {
            'outImg': 'https://statich.yidianzixun.com/public/file/1539245717671/tu2.png',
            'isTrue': false
          }
        ],
        'detailUrl': [
          {
            'imgUrl': './image/advBg.png',
            'height': '1206'
          },
          {
            'imgUrl': './image/caseBg.png',
            'height': '1206'
          }
        ],
        'index': 0
      },
      {
        'imgUrl': [
          {
            'outImg': 'https://ks3-cn-beijing.ksyun.com/static.toptest.yidianzixun.com/public/file/1536832712286/3.jpg',
            'isTrue': true
          },
          {
            'outImg': 'https://ks3-cn-beijing.ksyun.com/static.toptest.yidianzixun.com/public/file/1536832712286/2.jpg',
            'isTrue': false
          }
        ],
        'detailUrl': [
          {
            'imgUrl': './image/advBg.png',
            'height': '1206'
          },
          {
            'imgUrl': './image/caseBg.png',
            'height': '1206'
          }
        ],
        'index': 1
      },
      {
        'imgUrl': [
          {
            'outImg': 'https://statich.yidianzixun.com/public/file/1539245717671/tu4.png',
            'isTrue': true
          },
          {
            'outImg': 'https://statich.yidianzixun.com/public/file/1539245717671/tu2.png',
            'isTrue': false
          }
        ],
        'detailUrl': [
          {
            'imgUrl': './image/advBg.png',
            'height': '1206'
          },
          {
            'imgUrl': './image/caseBg.png',
            'height': '1206'
          }
        ],
        'index': 2
      }, 
      {
        'imgUrl': [
          {
            'outImg': 'https://ks3-cn-beijing.ksyun.com/static.toptest.yidianzixun.com/public/file/1536832712286/5.jpg',
            'isTrue': true
          },
          {
            'outImg': 'https://ks3-cn-beijing.ksyun.com/static.toptest.yidianzixun.com/public/file/1536832712286/4.jpg',
            'isTrue': false
          }
        ],
        'detailUrl': [
          {
            'imgUrl': './image/advBg.png',
            'height': '1206'
          },
          {
            'imgUrl': './image/caseBg.png',
            'height': '1206'
          }
        ],
        'index': 3
      }, 
      {
        'imgUrl': [
          {
            'outImg':'https://ks3-cn-beijing.ksyun.com/static.toptest.yidianzixun.com/public/file/1539052231462/bq4.jpg',
            'isTrue': true
          },
          {
            'outImg': 'https://ks3-cn-beijing.ksyun.com/static.toptest.yidianzixun.com/public/file/1536832712286/6.jpg',
            'isTrue': false
          }
        ],
        'detailUrl': [
          {
            'imgUrl': './image/advBg.png',
            'height': '1206'
          },
          {
            'imgUrl': './image/caseBg.png',
            'height': '1206'
          }
        ],
        'index': 4
      }, 
      {
        'imgUrl': [
          {
            'outImg':'https://ks3-cn-beijing.ksyun.com/static.toptest.yidianzixun.com/public/file/1539052231462/bq1.jpg',
            'isTrue': true
          },
          {
            'outImg':'https://ks3-cn-beijing.ksyun.com/static.toptest.yidianzixun.com/public/file/1539052231462/bq2.jpg',
            'isTrue': false
          }
        ],
        'detailUrl': [
          {
            'imgUrl': './image/advBg.png',
            'height': '1206'
          },
          {
            'imgUrl': './image/caseBg.png',
            'height': '1206'
          }
        ],
        'index': 5
      },
      {
        'imgUrl': [
          {
            'outImg':'https://ks3-cn-beijing.ksyun.com/static.toptest.yidianzixun.com/public/file/1539052231462/zx2.jpg',
            'isTrue': true
          },
          {
            'outImg':'https://ks3-cn-beijing.ksyun.com/static.toptest.yidianzixun.com/public/file/1539052231462/zx1.jpg',
            'isTrue': false
          }
        ],
        'detailUrl': [
          {
            'imgUrl': './image/advBg.png',
            'height': '1206'
          },
          {
            'imgUrl': './image/caseBg.png',
            'height': '1206'
          }
        ],
        'index': 6
      }
    ],
    // content配置参数
    autoplay: false,
    interval: 3000,
    duration: 300,
    circular: false, // 是否衔接滑动
  },
  onLoad: function() {
    let _that = this;
    this.gloMethods(_that.data.globalIndex, _that.data.productIndex);

    // 计算屏幕高度
    let height = wx.getSystemInfoSync().windowHeight;
    // 计算产品距离顶部高度
    const query = wx.createSelectorQuery()
    query.select('#content_img').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function (res) {
      _that.setData({
        clientHeight: (height - res[0].top)
      })
    })
  },
  onReady: function() {
    this.proMethods(this.data.globalIndex, this.data.productIndex);
  },
  // 产品图片列表
  gloMethods: function(gloIndex, proIndex) {
    let arr = this.data.content_list[gloIndex].imgUrl;

    for (let i = 0;i< arr.length;i++) {
      if (i == proIndex) {
        arr[i].isTrue = true;
      } else {
        arr[i].isTrue = false;
      }
    }
    this.setData({
      globalList: arr
    })
  },
  // 产品图片
  proMethods: function (gloIndex, proIndex) {
    let list = this.data.content_list[gloIndex].detailUrl;
    this.setData({
      productImg: list[proIndex]
    })
  },
  // 滑动顶部导航
  changeCurrent: function (e) {
    let currentIndex = e.detail.current;
    let list = this.data.nav_list;

    if (currentIndex == list.length - 1) {
      currentIndex = 0
    } else {
      currentIndex += 1
    }

    // 改变导航，调出产品
    this.gloMethods(currentIndex, 0);

    for (let i = 0; i < list.length; i++) {
      if (list[i].activity) {
        list[i].activity = false;
      }

      if (list[i].index == currentIndex) {
        list[i].activity = true;
      }
    }

    this.setData({
      nav_list: list,
      productIndex: 0
    })

    // 初始化最下方图片index
    this.proMethods(this.data.globalIndex, this.data.productIndex)
  },
  // 点击顶部导航元素
  addActive: function(e) {
    let currentIndex = e.currentTarget.dataset.clickId;
    // 改变导航，调出产品
    this.gloMethods(currentIndex, 0);
    let list = this.data.nav_list;

    for (let i = 0; i < list.length; i++) {
      if (list[i].activity) {
        list[i].activity = false;
      }

      if (list[i].index == currentIndex) {
        list[i].activity = true;
      }
    }

    this.setData({
      nav_list: list,
      productIndex: 0
    })

    // 初始化最下方图片index
    this.proMethods(this.data.globalIndex, this.data.productIndex)
  },
  // 改变确定产品图片
  changeImg: function(e) {
    let currentIndex = e.detail.current;
    this.gloMethods(this.data.productIndex, currentIndex)
    this.proMethods(this.data.globalIndex, currentIndex)
  }
})