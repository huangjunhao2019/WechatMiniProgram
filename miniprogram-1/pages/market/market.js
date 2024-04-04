// pages/market/market.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        num: 1
    },
    //更新 num
    updateNum(){
        this.setData({
            num: this.data.num+1
        })
    }
})