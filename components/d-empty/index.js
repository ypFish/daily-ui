/*
 * @Description: 
 * @Author: yp
 * @Date: 2021-09-08 15:48:45
 * @LastEditTime: 2021-09-08 19:09:03
 * @LastEditors: yp
 */
// components/d-empty/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //配置按钮标题
    title: {
      type: String,
      value: "配置"
    },
    //是否展示
    show: {
      type: Boolean,
      value: false
    },

    //按钮图标
    iconName: {
      type: String,
      value: "jia2"
    },
    iconSize: {
      type: Number,
      value: 20
    },
    iconPaddingsizeBottom: {
      type: Number,
      value: 4
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

    /**
     * @description: 点击配置按钮，处理函数
     * @param {*}
     * @return {*}
     */
    handleManage() {

      //点击配置按钮处理
      this.triggerEvent('onManage', {}, {})
    }
  }
})