/*
 * @Description: 
 * @Author: yp
 * @Date: 2021-03-05 18:28:50
 * @LastEditTime: 2021-12-23 18:12:02
 * @LastEditors: yp
 */
// components/d-switch/index.js

//获取封装的微信按键震动
const vibrateUtils = require('../../common/utils/vibrate-utils')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    color: {
      type: String,
      value: "#16A085"
    },
    offColor: {
      type: String,
      value: "#727986"
    },
    value: {
      type: Boolean,
      value: false
    },
    disable: {
      type: Boolean,
      value: false,
    },
    //初始赋值时，是否有动画效果
    hasInitAns: {
      type: Boolean,
      value: false,
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
    _handleClick() {
      const {
        disable,
        value: _value
      } = this.data;

      if (disable) return false;

      //震动
      vibrateUtils.vibrate();

      const value = !_value;
      this.setData({
        hasInitAns: true,
        value
      });
      this.triggerEvent('onChange', {
        value
      }, {
        bubbles: true,
        composed: true
      });
    },
  }
})