/*
 * @Description: 
 * @Author: yp
 * @Date: 2021-04-25 11:52:13
 * @LastEditTime: 2021-10-18 14:08:12
 * @LastEditors: yp
 */
// pages/manage/components/line/index.js

//获取封装的微信按键震动
const vibrateUtils = require('../../../../common/utils/vibrate-utils')

Component({

  // 开启多slot
  options: {
    multipleSlots: true
  },

  /**
   * 组件的属性列表
   */
  properties: {

    //标题
    title: {
      type: String,
      value: ''
    },
    //标题颜色
    titleColor: {
      type: String,
      value: ''
    },
    //选项内容
    option: {
      type: String,
      value: ''
    },
    //选项颜色
    optionColor: {
      type: String,
      value: ''
    },
    //右箭头是否展示
    rightIconShow: {
      type: Boolean,
      value: false
    },
    //描述
    desc: {
      type: String,
      value: ''
    },
    //描述文字颜色
    descColor: {
      type: String,
      value: ''
    },
    //开关按钮是否展示
    switchShow: {
      type: Boolean,
      value: false
    },
    //是否开启
    switchValue: {
      type: Boolean,
      value: false
    },
    //是否为不可用
    disable: {
      type: Boolean,
      value: false
    },
    //微信开放能力
    openType: {
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
        switchShow
      } = this.data;
      if (disable) {
        return;
      }
      if (!switchShow) {
        //震动
        vibrateUtils.vibrate();
      }

      this.triggerEvent('onTap', {}, {
        bubbles: true,
        composed: true
      })

    }
  }
})