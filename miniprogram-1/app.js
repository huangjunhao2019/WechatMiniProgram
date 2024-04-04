App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
      //当进行冷启动时，才会触发onLaunch钩子函数
      //如果是热启动，不会触发 onLaunch钩子函数，会触发onShow钩子函数
      //因此，onLaunch全局只触发一次
    console.log('onLaunch  小程序初始化完成时')
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('onShow 小程序从后台进入前台显示')
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('onHide 从前台进入后台时显示')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
