// pages/cart/cart.js
Page({
    //按钮绑定的事件处理函数
    btnHandler(event){
        console.log(event.mark.id)
        console.log(event.mark.name)
    },
    parentHandler(event){
        //通过事件对象获取到的是触发事件的节点 以及父节点身上所有的mark数据
        console.log(event)
    }
})