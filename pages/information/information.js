Page({
  data:{
    username:'',
    userphone:'',
    useraddress:'',
    region: []
  },
  onLoad: function() {
    wx.setNavigationBarTitle({
      title: '咨询'
    })
  },
  bindRegionChange: function(e) {
    this.setData({
      region: e.detail.value
    })
  },
  userName: function(e) {
    this.setData({
      username: e.detail.value
    })
  },
  userPhone: function (e) {
    this.setData({
      userphone: e.detail.value
    })
  },
  userAddress: function(e){
    this.setData({
      useraddress: e.detail.value
    })
  },
  submit: function() {
    let _that = this;
    // 姓名
    if (_that.data.username == '') {
      _that.showModel('姓名不能为空');
      return false;
    }
    // 电话
    if (_that.data.userphone == ''){
      _that.showModel('电话不能为空');
      return false;
    } else if (!(/^1[34578]\d{9}$/.test(_that.data.userphone))){
      _that.showModel('电话号码不正确');
      return false;
    } else if (wx.getStorageSync(_that.data.userphone) == _that.data.userphone) {
      _that.showModel('手机号不能重复');
      return false;
    } else {
      wx.setStorageSync(_that.data.userphone, _that.data.userphone);
    }

    // 公司
    if (_that.data.useraddress == '') {
      _that.showModel('公司不能为空');
      return false;
    }

    // 地址
    if (!_that.data.region.length) {
      _that.showModel('地址不能为空');
      return false;
    }
    let dataList = 'name='+ _that.data.username +'&phone='+ _that.data.userphone + '&company='+ _that.data.useraddress
    + '&province='+ _that.data.region[0] + '&city=' + _that.data.region[1] + '&district=' + _that.data.region[2]
    wx.request({
      url: 'https://top.yidianzixun.com/applet/clue',
      data: dataList,
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      success (res) {
        if (res.data.status == 0) {
          _that.showModel('提交成功');
          _that.setData({
            username: '',
            userphone: '',
            useraddress: '',
            region: []
          })
        }
      }
    })
  },
  showModel: function (text) {
    wx.showModal({
      title: '提示',
      content: text,
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})