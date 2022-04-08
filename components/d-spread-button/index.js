/*
 * @Description: 
 * @Author: yp
 * @Date: 2021-04-14 17:19:58
 * @LastEditTime: 2021-10-18 11:21:32
 * @LastEditors: yp
 */
// components/d-spread-button/index.js

//获取封装的微信按键震动
const vibrateUtils = require('../../common/utils/vibrate-utils')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //按钮标题
    title: {
      type: String,
      value: "展开"
    },
    //按钮颜色
    color: {
      type: String,
      value: "#16A085"
    },
    //是否展开
    isSpread: {
      type: Boolean,
      value: false
    },
    //是否为加载状态
    loading: {
      type: Boolean,
      value: false
    },
    //不改变箭头状态
    iconAlways: {
      type: Boolean,
      value: false
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
    onTap() {
      const {
        isSpread,
        loading,
        iconAlways
      } = this.data;

      if (loading) {
        return
      }

      //震动
      vibrateUtils.vibrate();

      if (!iconAlways) {
        this.setData({
          isSpread: !isSpread
        })
      }

      this.triggerEvent('onSpreadButtonTap', {
        isSpread: !isSpread
      }, {
        bubbles: true,
        composed: true
      })
    }
  }
})