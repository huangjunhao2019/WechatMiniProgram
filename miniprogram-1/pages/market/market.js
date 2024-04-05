// pages/market/market.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
       numList: [1,2,3]
    },
    
    //监听用户上拉加载
    onReachBottom(){
        //产品需求
        //当用户上拉，需要对数字进行累加
        //获取数组最后一项
        wx.showLoading({
            title:'数据加载中...'
        })
        setTimeout(()=>{
            const lastNum = this.data.numList[this.data.numList.length-1]
            //定义需要追加的元素
            const newArr = [ lastNum + 1, lastNum + 2, lastNum + 3 ]
            this.setData({
                numList: [...this.data.numList, ...newArr]
            })
            wx.hideLoading()
        },1500)
    },
    //更新 num
    updateNum(){
        
    },
    //监听用户上拉加载
    onPullDownRefresh(){
        this.setData({
            numList: [1, 2, 3]
        })
        if (this.data.numList.length===3){
            wx.stopPullDownRefresh()
        }
    }

})