/*
 * @Description: 
 * @Author: yp
 * @Date: 2021-03-08 10:57:31
 * @LastEditTime: 2022-02-14 21:12:19
 * @LastEditors: yp
 */

//获取封装的微信按键震动
const vibrateUtils = require('../../common/utils/vibrate-utils')


// components/d-coverpage/index.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //弹窗是否可见
    visible: {
      type: Boolean,
      value: true
    },
    //标题
    title: {
      type: String,
      value: ''
    },
    //等待状态
    loading: {
      type: Boolean,
      value: false
    },
    //关闭由自身决定
    closeBySelf: {
      type: Boolean,
      value: true
    },
    //允许被关闭
    allowClose: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //导航栏相关位置信息
    navHeight: app.globalData.navInfo.navHeight,
    menuLeft: app.globalData.navInfo.menuLeft,
    menuTop: app.globalData.navInfo.menuTop,
    menuHeight: app.globalData.navInfo.menuHeight,
    menuWidth: app.globalData.navInfo.menuWidth
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

    /**
     * @description: 页面关闭后触发
     * @param {*}
     * @return {*}
     */
    onClose() {
      const {
        visible,
        loading,
        closeBySelf
      } = this.data;

      if (loading) {
        return
      }
      //震动
      vibrateUtils.vibrate();

      if (closeBySelf) {
        this.setData({
          visible: false
        })
      }

      this.triggerEvent(
        'onClose', {
          visible
        }, {}
      )
    }
  }
})