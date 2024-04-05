Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  //将数据存储到本地
  setStorage() {
      //第一个参数：本地存储中指定的key
      wx.setStorageSync('num',1)
      //在小程序中
      //如果存储的是对象类型数据，不需要使用JSON.stringfy 和 JSON.parse 进行转换
      //直接进行存储和获取即可
      wx.setStorageSync('obj', {name: 'tom', age:10})
  },
  //获取本地存储的数据
  getStorage() {
      //从本地存储的数据中获取指定key的数据、内容
      const num = wx.getStorageSync('num')
      
      const obj = wx.getStorageSync('obj')

      console.log(num)
      console.log(obj)
  },
  //删除本地存储的数据
  removeStorage() {
      //从本地移除指定key的数据、内容
      wx.removeStorageSync('num')
  },
  //清空本地存储的全部数据
  clearStorage() {
      wx.clearStorageSync()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('cate onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('cate onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})