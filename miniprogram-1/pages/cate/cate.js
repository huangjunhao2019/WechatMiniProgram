// pages/cate.js
Page({
    //按钮触发的事件处理函数
    btnHandler(event){
        //currentTarget事件绑定者，也就是指：哪个组件绑定了当前事件
        //target事件触发者，也就是指：哪个组件触发了当前事件处理函数
        //currentTarget和target都是指按钮，因为是按钮绑定的事件处理函数，同时点击按钮
        //触发事件处理函数
        //这时候通过谁来获取数据都可以
        console.log(event.currentTarget.dataset.id)
        console.log(event.target.dataset.id)
    },
    // view绑定的时间处理函数
    parentHandler(event){
        //点击蓝色区域（不点击按钮）
        //currentTarget 事件绑定者：view
        //target事件触发者：view
        //currentTarget 和 target都是指view，如果想获取view身上的数据，使用谁都可以
        console.log(event)
    }
})