/*
 * @Author: yp
 * @Date: 2021-03-01 11:32:15
 * @LastEditTime: 2022-04-08 17:00:39
 * @LastEditors: yp
 * @Description: In User Settings Edit
 * @FilePath: /daily-pre/miniprogram/components/naviagtion/navigation.js
 */
// components/naviagtion/navigation.js
const app = getApp()

//获取封装的微信按键震动
const vibrateUtils = require('../../common/utils/vibrate-utils')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //是否为加载状态
    loading: { // 属性名
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: ''
    },
    //是否显示左侧胶囊按钮
    iconShow: {
      type: Boolean,
      value: true
    },
    textColor: {
      type: String,
      value: '#000'
    },
    bgColor: {
      type: String,
      value: '#FFF'
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
    menuWidth: app.globalData.navInfo.menuWidth,
    menuIconWidth: app.globalData.navInfo.menuIconWidth,
  },

  /**
   * 组件的方法列表
   */
  methods: {


    /**
     * @description: 返回上一级菜单
     * @param {*}
     * @return {*}
     */
    goBack() {

      if (this.data.loading) {
        return;
      }

      //震动
      vibrateUtils.vibrate();

      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        //当前为tabbar页面
        wx.redirectTo({
          url: '/pages/index/index'
        })
      } else {
        if (getCurrentPages().length <= 1) {
          wx.reLaunch({
            url: '/pages/index/index'
          })
        } else {
          wx.navigateBack()
        }
      }
    },

    /**
     * @description: 返回到主页面
     * @param {*}
     * @return {*}
     */
    goMain() {
      //震动
      vibrateUtils.vibrate();

      wx.reLaunch({
        url: '/pages/index/index'
      })

    }
  }
})