// pages/index/custom-swiper/custom-swiper.js
Component({

    /**
     * 组件的属性列表
     */
    properties: {
        //如果需要接收传递的属性，有另种方式：全写、简写
       // label: String
       label: {
           //type是组件使用者传递的数据类型
           //数据类型：String、Number、Boolean、Object、Array
           //也可以设置为null，表示不限制类型
           type: String,
           value: ''
       },
       position: {
           type: String,
           value: "right"
       }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})