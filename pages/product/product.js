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
    // 滑动返回顶部
    scrollTop: 0,
    // 头部导航data
    nav_list: [
      {
        "title": '多样化功能',
        "index": 0,
        "activity": false,
      },
      {
        "title": '生态化产品',
        "index": 1,
        "activity": true,
      },
      {
        "title": '智能化产品',
        "index": 2,
        "activity": false,
      }, 
      {
        "title": '定制化产品',
        "index": 3,
        "activity": false,
      }
    ],
    // 中间data
    content_list: [
      {
        'imgUrl': [
          {
            'outImg': 'https://statich.yidianzixun.com/public/file/1542361182067/dyh1.png',
            'isTrue': true
          },
          {
            'outImg': 'https://statich.yidianzixun.com/public/file/1542361182067/dyh2.png',
            'isTrue': false
          },
          {
            'outImg': 'https://statich.yidianzixun.com/public/file/1542361182067/dyh3.png',
            'isTrue': false
          },
          {
            'outImg': 'https://statich.yidianzixun.com/public/file/1542361182067/dyh4.png',
            'isTrue': false
          },
          {
            'outImg': 'https://statich.yidianzixun.com/public/file/1542361182067/dyh5.png',
            'isTrue': false
          }
        ],
        'detailUrl': [
          {
            'imgUrl': 'https://statich.yidianzixun.com/public/file/1542362309201/dyh11.png',
            'height': '1633'
          },
          {
            'imgUrl': 'https://statich.yidianzixun.com/public/file/1542361182067/dyh22.png',
            'height': '477'
          },
          {
            'imgUrl': 'https://statich.yidianzixun.com/public/file/1542361182067/dyh33.png',
            'height': '1605'
          },
          {
            'imgUrl': 'https://statich.yidianzixun.com/public/file/1542361182067/dyh44.png',
            'height': '477'
          },
          {
            'imgUrl': 'https://statich.yidianzixun.com/public/file/1542361182067/dyh55.png',
            'height': '1259'
          }
        ],
        'index': 0
      },
      {
        'imgUrl': [
          {
            'outImg': 'https://statich.yidianzixun.com/public/file/1542361182067/sth1.png',
            'isTrue': true
          }
        ],
        'detailUrl': [
          {
            'imgUrl': 'https://statich.yidianzixun.com/public/file/1542701998577/sth11.png',
            'height': '586'
          }
        ],
        'index': 1
      },
      {
        'imgUrl': [
          {
            'outImg': 'https://statich.yidianzixun.com/public/file/1542362309201/zlh1.png',
            'isTrue': true
          },
          {
            'outImg': 'https://statich.yidianzixun.com/public/file/1542362309201/zlh2.png',
            'isTrue': false
          }
        ],
        'detailUrl': [
          {
            'imgUrl': 'https://statich.yidianzixun.com/public/file/1542362309201/zlh11.png',
            'height': '673'
          },
          {
            'imgUrl': 'https://statich.yidianzixun.com/public/file/1542362309201/zlh22.png',
            'height': '691'
          }
        ],
        'index': 2
      }, 
      {
        'imgUrl': [
          {
            'outImg': 'https://statich.yidianzixun.com/public/file/1542362309201/dzh1.png',
            'isTrue': true
          },
          {
            'outImg': 'https://statich.yidianzixun.com/public/file/1542362309201/dzh2.png',
            'isTrue': false
          },
          {
            'outImg': 'https://statich.yidianzixun.com/public/file/1542362309201/dzh3.png',
            'isTrue': false
          },
          {
            'outImg': 'https://statich.yidianzixun.com/public/file/1542362309201/dzh4.png',
            'isTrue': false
          },
          {
            'outImg': 'https://statich.yidianzixun.com/public/file/1542362309201/dzh5.png',
            'isTrue': false
          }
        ],
        'detailUrl': [
          {
            'imgUrl': 'https://statich.yidianzixun.com/public/file/1542362309201/dzh11.png',
            'height': '798'
          },
          {
            'imgUrl': 'https://statich.yidianzixun.com/public/file/1542362309201/dzh22.png',
            'height': '1105'
          },
          {
            'imgUrl': 'https://statich.yidianzixun.com/public/file/1542362309201/dzh33.png',
            'height': '798'
          },
          {
            'imgUrl': 'https://statich.yidianzixun.com/public/file/1542362309201/dzh44.png',
            'height': '800'
          },
          {
            'imgUrl': 'https://statich.yidianzixun.com/public/file/1542362309201/dzh55.png',
            'height': '798'
          }
        ],
        'index': 3
      }
    ],
    // content配置参数
    autoplay: false,
    interval: 3000,
    duration: 300,
    circular: false, // 是否衔接滑动
  },
  onLoad: function() {
    wx.setNavigationBarTitle({
      title: '产品'
    })
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
        clientHeight: (height - res[0].top - 30)
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
      globalList: arr,
      scrollTop: 0
    })
  },
  // 产品图片
  proMethods: function (gloIndex, proIndex) {
    let list = this.data.content_list[gloIndex].detailUrl;
    this.setData({
      productImg: list[proIndex],
      scrollTop: 0
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
      productIndex: 0,
      scrollTop: 0,
      globalIndex: currentIndex
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
      productIndex: 0,
      scrollTop: 0,
      globalIndex: currentIndex
    })
    // 初始化最下方图片index
    this.proMethods(this.data.globalIndex, this.data.productIndex)
  },
  // 改变确定产品图片
  changeImg: function(e) {
    let currentIndex = e.detail.current;
    this.gloMethods(this.data.globalIndex, currentIndex)
    this.proMethods(this.data.globalIndex, currentIndex)
  }
})