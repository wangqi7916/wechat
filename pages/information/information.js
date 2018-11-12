Page({
  data:{
    region: []
  },
  bindRegionChange: function(e) {
    this.setData({
      region: e.detail.value
    })
  }
})