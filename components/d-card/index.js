/*
 * @Description: 
 * @Author: yp
 * @Date: 2021-03-29 16:30:36
 * @LastEditTime: 2022-02-06 17:54:47
 * @LastEditors: yp
 */
const app = getApp();

const {
  dCardBehavior
} = require('./behaviors/card-behavior.js')

//获取封装的微信按键震动
const vibrateUtils = require('../../common/utils/vibrate-utils')

// components/d-card/index.js
Component({

  // 指定所有 _ 开头的数据字段为纯数据字段
  options: {
    pureDataPattern: /^_/
  },

  //包含了组件的属性列表
  behaviors: [dCardBehavior],

  /**
   * 组件的初始数据
   */
  data: {
    //导航栏相关位置信息
    navHeight: app.globalData.navInfo.navHeight
  },

  /**
   * 组件的方法列表
   */
  methods: {

    /**
     * @description: 点击卡片顶部导航
     * @param {*}
     * @return {*}
     */
    headTap() {
      const {
        status,
        _comp,
        _id,
        from
      } = this.data;
      if (status === 0 || status === -1 || from === "share") {
        return;
      }
      //震动
      vibrateUtils.vibrate();

      this.triggerEvent('onHeadTap', {
        id: _id,
        comp: _comp
      }, {
        bubbles: true,
        composed: true
      })
    },

    /**
     * @description: 处理点击分享按钮事件
     * @param {*}
     * @return {*}
     */
    handleShareButtonTap() {
      //震动
      vibrateUtils.vibrate();
    },

    /**
     * @description: 加载失败，点击“重新加载”按钮触发
     * @param {*} e
     * @return {*}
     */
    errorButtonTap() {

      const {
        status,
        _comp,
        _id
      } = this.data;

      if (status === -1) {
        this.triggerEvent('onCardErrorButtonTap', {
          id: _id,
          comp: _comp
        }, {
          bubbles: true,
          composed: true
        })
      }
    }
  }
})