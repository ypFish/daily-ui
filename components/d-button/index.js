/*
 * @Description: 
 * @Author: yp
 * @Date: 2021-04-06 11:17:57
 * @LastEditTime: 2022-01-26 17:58:22
 * @LastEditors: yp
 */
// components/d-button/index.js

//获取封装的微信按键震动
const vibrateUtils = require('../../common/utils/vibrate-utils')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    width: {
      type: Number,
      value: 0
    },
    height: {
      type: Number,
      value: 0
    },
    size: {
      type: Number,
      value: 0
    },
    title: {
      type: String,
      value: ''
    },
    bgColor: {
      type: String,
      value: '#16A085'
    },
    textColor: {
      type: String,
      value: '#FFFFFF'
    },
    iconName: {
      type: String,
      value: ''
    },
    iconSize: {
      type: Number,
      value: 0
    },
    iconPaddingBottom: {
      type: Number,
      value: 0
    },
    disable: {
      type: Boolean,
      value: false
    },
    disableBgColor: {
      type: String,
      value: 'rgba(114,121,134,.5)'
    },
    openType: {
      type: String,
      value: ''
    },
    loading: {
      type: Boolean,
      value: false
    },
    loadingIconSize: {
      type: Number,
      value: 0
    },
    loadingIconPaddingBottom: {
      type: Number,
      value: 0
    },
    //组件内，实际button元素赋予的id
    innerId: {
      type: String,
      value: ''
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
        disable,
        loading
      } = this.data;
      if (disable || loading) {
        return;
      }
      //震动
      vibrateUtils.vibrate();
      this.triggerEvent('onTap', {}, {
        bubbles: true,
        composed: true
      })

    }

  }
})