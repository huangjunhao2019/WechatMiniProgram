// pages/cate.js
Page({
    data: {
        num: 1,
        userInfo: {}
    },

    //更新num
    updateNum(){
        //获取数据
        console.log(this.data.num)

        //通过赋值的方式直接修改数据
        //能够修改数据，但是不能改变页面上的数据
        // this.data.num += 1
        // console.log(this.data.num)

        //this.setData 两个作用
        //1. 更新数据
        //2. 驱动视图（页面）更新
        this.setData({
            //key: 需要更新的数据
            //value：最新的值
            num: this.data.num + 1
        })
    },
    //更新userInfo
    updateUserInfo(){
        // //新增单个/多个属性
        // this.setData({
        //     //如果给对象新增属性，可以将key协程数据路径的方式 a.b.c
        //     'userInfo.name':'tom',
        //     'userInfo.age':10
        // })
        // //修改单个/多个属性
        // this.setData({
        //     'userInfo.name':'jerry',
        //     'userInfo.age': 18
        // })
        //目前进行新增和修改都是使用数据路径，如果新增和修改的数据量比较小，还可以
        //如果修改的数据很多，每次都写数据路径，就较为困难
        //可以使用ES6提供的展开运算符和Object.assign()
        //使用ES6提供的展开运算符
        //通过展开运算符，能够将对象中的属性复制给另一个对象
        //后面的属性会覆盖前面的属性
        // const userInfo = {
        //     ...this.data.userInfo,
        //     name:'jerry',
        //     age:18
        // }
        // this.setData({
        //     userInfo: userInfo
        // })
        //Object.assign()将多个对象合并为一个对象
        // const userInfo = Object.assign(this.data.userInfo, {name: 'jerry'}, {age: 18})
        // this.setData({
        //     userInfo: userInfo
        // })
        delete this.data.userInfo.age
        console.log(this.data.userInfo)
    }
})