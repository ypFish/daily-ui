/*
 * @Description: 封装的微信按键震动工具类
 * @Author: yp
 * @Date: 2021-10-09 18:03:23
 * @LastEditTime: 2021-12-09 18:15:04
 * @LastEditors: yp
 */

// 默认值振动触觉
const {
  vibrateValue
} = require('../data/default')

const VIBRATE_TYPE = ['', 'light', 'medium', 'heavy']

module.exports = {

  //按键触感('':无振动，light:轻度振动，medium:中度震动，heavy:重度震动)
  vibrateType: VIBRATE_TYPE[vibrateValue],
  //震动值(0:无振动，1:轻度，2:中度，3:重度)
  vibrateValue: vibrateValue,

  /**
   * @description: 对微信按键震动进行封装
   * @param {*}
   * @return {*}
   */
  vibrate() {

    if (!this.vibrateType) {
      return;
    }
    //震动
    wx.vibrateShort({
      type: this.vibrateType,
    })
  },

  /**
   * @description: 更新当前系统震动值
   * @param {*} vibrateType
   * @return {*}
   */
  setVibrateType(vibrate = -1) {

    if (vibrate < 0 || vibrate >= VIBRATE_TYPE.length) {
      this.vibrateValue = vibrateValue;
      this.vibrateType = VIBRATE_TYPE[vibrateValue];
    } else {
      this.vibrateValue = vibrate;
      this.vibrateType = VIBRATE_TYPE[vibrate]
    }
  }
}