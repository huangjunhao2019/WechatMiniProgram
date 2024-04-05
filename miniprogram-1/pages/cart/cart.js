Page({

    /**
     * 页面的初始数据
     */
    data: {
      
    },
    navigateTo() {
        //保留当前页面，跳转到应用中其他页面，不能跳转到tabBar
        wx.navigateTo({
            url: '/pages/list/list?id=1&name=tom'
        })
    },
    redirectTo() {
        //销毁当前页面
        wx.redirectTo({
            url: '/pages/list/list'
            // url: '/pages/cate/cate'
        })
    },
    switchTab() {
        wx.switchTab({
            //跳转到tabBar页面，不能跳转到非tabBar页面
            // url: "/pages/list/list"
            url: "/pages/cate/cate"
        })
    },
    reLaunch() {
        //关闭所有的页面，然后跳转到应用中某一个页面
        wx.reLaunch({
            // url: "/pages/list/list"
            url: '/pages/cate/cate?id=2&name=Mary'
        })
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
      console.log('cart onShow')
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
      console.log('cart onUnload')
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