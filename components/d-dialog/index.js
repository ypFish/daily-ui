/*
 * @Description: 对话框组件
 * @Author: yp
 * @Date: 2021-03-08 10:57:31
 * @LastEditTime: 2021-10-15 14:31:48
 * @LastEditors: yp
 */

// components/d-dailog/index.js
// const app = getApp()

//获取封装的微信按键震动
const vibrateUtils = require('../../common/utils/vibrate-utils')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //弹窗是否可见
    visible: {
      type: Boolean,
      value: false,
    },
    //宽度
    width: {
      type: String,
      value: "60%"
    },
    //标题
    title: {
      type: String,
      value: ''
    },
    //标题颜色
    titleTextColor: {
      type: String,
      value: '#444'
    },
    //取消按钮颜色
    cancelTextColor: {
      type: String,
      value: '#727986'
    },
    //确定按钮颜色
    confirmTextColor: {
      type: String,
      value: '#16A085'
    },
    iconShow:{
      type:Boolean,
      value:true
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
     * 处理触摸滚动问题
     */
    handleCatchTouchMove() {
      return false;
    },

    onClose() {
      this.setData({
        visible: false
      })
      this.triggerEvent('onClose', {
        value: false
      }, {})
    },

    onConfirm() {
      //震动
      vibrateUtils.vibrate();
      this.onClose()
      this.triggerEvent('onConfirm', {
        value: true
      }, {})
    }

  }
})