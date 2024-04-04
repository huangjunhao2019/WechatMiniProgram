// app.js
App({
    //onLaunch是小程序的钩子函数，这个钩子函数在冷启动时，肯定会执行到
    //当小程序冷启动时，微信后台会自动请求版本的信息，如果有新版本，会立即进行下载
    //使用wxwx.getUpdateManager()
    onLaunch(){
        const updateManager = wx.getUpdateManager()

        //当下载完成新版本以后，会触发 onUpdateReady回调函数
        updateManager.onUpdateReady(function(){
            //在回调函数中给用户提示，
            wx.showModal({
              title: '更新提示',
              content: '新版本已经准备好，是否重启应用？',
              success(res){
                  if(res.confirm){
                    //强制当前小程序使用新版本并且会重启当前小程序
                    updateManager.applyUpdate()
                  }
              }
            })
        })
    }

})
